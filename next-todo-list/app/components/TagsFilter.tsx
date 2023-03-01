"use client";

import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { HiChevronDown, HiOutlinePlus } from "react-icons/hi"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function TagsDropdown() {
  const [filteredTag, setFilteredTag] = useState("All");

  const tags = [
    { uid: "1", name: "School", color: "color1" },
    { uid: "2", name: "Family", color: "color2" },
    { uid: "3", name: "Work", color: "color3" },
    { uid: "4", name: "Guest", color: "color4" },
  ]

  const currentTag = tags.find((tagConstant) => tagConstant.uid === filteredTag);
  var circleClass = (currentTag ? "bg-".concat(currentTag?.color) : "#ffffff").concat(" h-[10px] w-[10px] rounded-full");

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <div className="flex gap-2">
          <Menu.Button onClick={(e) => { e.stopPropagation(); }} className="h-[30px] flex justify-center items-center gap-2 rounded-md border border-gray/20 bg-white px-2 font-medium hover:bg-gray/10 ease-out duration-200">
            <p className="text-xs flex gap-2 items-center">
              {filteredTag != "All" && <div className={circleClass}></div>}
              {filteredTag === "All" ? "All" : tags.find((tag) => tag.uid === filteredTag)?.name}
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
          className="bg-dark border py-1 border-gray/20 absolute right-0 z-10 mt-1 w-56 origin-top-right rounded-md bg-white shadow-xl shadow-[#000]/30  ring-opacity-5 focus:outline-none">
          <Menu.Item onClick={(e) => {
            e.stopPropagation();
            setFilteredTag("All")
          }}>
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

          {tags.map((tag, idx) => {
            const circleClass = "h-[10px] w-[10px] rounded-full bg-".concat(tag.color)

            return <>
              <Menu.Item key={idx} onClick={(e) => {
                e.stopPropagation();
                setFilteredTag(tag.uid)
              }}>
                {({ active }) => (
                  <button type="button"
                    className="hover:bg-cardBackground flex justify-start items-center px-4 py-2 text-sm ease-out duration-200 w-full font-normal"
                  >
                    <div className='flex gap-2 items-center'>
                      <div className={circleClass}></div>
                      {tag.name}
                    </div>
                  </button>
                )}
              </Menu.Item>
            </>
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
