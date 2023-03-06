import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { HiChevronDown } from "react-icons/hi"
import { useQuery } from '@/convex/_generated/react';
import TagCircle from './TagCircle';
import useStore from '../(store)/store';
import { GenericId } from 'convex/values';
import { Tag } from '../config/interfaceTypes';

export default function TagsFilter() {
  const { signedInUser, tagFilter, selectedTagFilter, updateTagFilter, selectTagFilter } = useStore();
  const tags = useQuery("tags/getTags", signedInUser) || [];

  function handleSelectTagFilter(tagUid: GenericId<string>) {
    updateTagFilter(true);
    selectTagFilter(tagUid);
  }

  function handleSelectAllFilter() {
    updateTagFilter(false);
    selectTagFilter(undefined);
  }

  const currentTag = tagFilter && selectedTagFilter !== undefined ? tags.find((tag: Tag) => tag._id.id === selectedTagFilter.id) : undefined;

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <div className="flex gap-2">
          <Menu.Button
            // onClick={(e) => { e.stopPropagation(); }}
            className="h-[30px] flex justify-center items-center gap-2 rounded-md border border-gray/20 bg-white px-2 font-medium hover:bg-gray/10 ease-out duration-200">
            <p className="text-xs flex gap-2 items-center">
              {tagFilter && currentTag && <TagCircle color={currentTag.color}></TagCircle>}
              {!tagFilter && !currentTag ? "All" : currentTag.name}
            </p>
            <HiChevronDown></HiChevronDown>
          </Menu.Button>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="bg-background border py-1 border-gray/20 absolute right-0 z-10 mt-1 w-56 origin-top-right rounded-md bg-white shadow-xl shadow-[#000]/30  ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <button type="button"
                onClick={handleSelectAllFilter}
                className="hover:bg-cardBackground flex justify-start items-center px-4 py-2 text-sm ease-out duration-200 w-full font-normal"
              >
                <div className='flex gap-2 items-center'>
                  All
                </div>
              </button>
            )}
          </Menu.Item>

          {tags.map((tag: Tag, idx) =>
            <Menu.Item key={idx}
            >
              {({ active }) => (
                <button type="button"
                  onClick={() => handleSelectTagFilter(tag._id)}
                  className="hover:bg-cardBackground flex justify-start items-center px-4 py-2 text-sm ease-out duration-200 w-full font-normal"
                >
                  <div className='flex gap-2 items-center'>
                    <TagCircle color={tag.color}></TagCircle>
                    {tag.name}
                  </div>
                </button>
              )}
            </Menu.Item>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
