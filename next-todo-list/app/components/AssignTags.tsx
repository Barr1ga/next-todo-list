import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { HiChevronDown, HiOutlinePlus } from "react-icons/hi"
import TagCircle from './TagCircle'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function TagsDropdown({ assignedTags, tagSelector, assignTags, all }: { assignedTags: string[], tagSelector: (uid: string) => void, assignTags: boolean, all: boolean }) {
  const tags = [
    { uid: "1", name: "School", color: "color1" },
    { uid: "2", name: "Family", color: "color2" },
    { uid: "3", name: "Work", color: "color3" },
    { uid: "4", name: "Guest", color: "color4" },
  ]

  const filteredTags = tags.filter((tag) => !assignedTags.includes(tag.uid));

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <div className="flex gap-2">
          {!assignTags && <Menu.Button
            // onClick={(e) => { e.stopPropagation(); }}
            className="h-[30px] flex justify-center items-center gap-2 rounded-md border border-gray/20 bg-white px-2 font-medium hover:bg-gray/10 ease-out duration-200">
            <p className="text-xs">
            </p>
            <HiChevronDown></HiChevronDown>
          </Menu.Button>}

          {assignTags && <Menu.Button
            // onClick={(e) => { e.stopPropagation(); }}
            className="flex items-center justify-center border border-gray/10 hover:bg-gray/10 rounded h-[22px] w-[22px]  ease-out duration-200">
            <HiOutlinePlus></HiOutlinePlus>
          </Menu.Button>}

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
          className="bg-dark border py-1 border-gray/20 absolute right-[-95px] z-50 mt-1 w-56 rounded-md bg-white shadow-xl shadow-[#000]/30  ring-opacity-5 focus:outline-none">
          {all &&
            <Menu.Item
              // onClick={(e) => {
              //   e.stopPropagation();
              //   tagSelector("All")
              // }}
              >
              {({ active }) => (
                <button type="button"
                  className="hover:bg-cardBackground flex justify-start items-center px-4 py-2 text-sm ease-out duration-200 w-full font-normal"
                >
                  <div className='flex gap-2 items-center'>
                    All
                  </div>
                </button>
              )}
            </Menu.Item>
          }
          {filteredTags.map((tag, idx) =>
            <Menu.Item key={idx}
              // onClick={(e) => {
              //   e.stopPropagation();
              //   tagSelector(tag.uid)
              // }}
              >
              {({ active }) => (
                <button type="button"
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
