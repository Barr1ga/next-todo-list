import { Dispatch, Fragment, SetStateAction } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { HiChevronDown, HiChevronUp } from "react-icons/hi"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown({ stateValue, stateSetter, options }: { stateValue: string, stateSetter: Dispatch<SetStateAction<string>>, options: string[] }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <div className="flex gap-2">
          <Menu.Button
            // onClick={(e) => { e.stopPropagation(); }}
            className="h-[30px] flex justify-center items-center gap-2 rounded-md border border-gray/20 bg-white px-2 font-medium hover:bg-gray/10 ease-out duration-200">
            <p className="text-xs">
              {stateValue}
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
        <Menu.Items className="bg-dark border py-1 border-gray/20 absolute right-0 z-10 mt-1 w-56 origin-top-right rounded-md bg-white shadow-xl shadow-[#000]/30  ring-opacity-5 focus:outline-none">
          {options.map((option, idx) =>
            <Menu.Item key={idx}
              // onClick={(e) => {
              //   e.stopPropagation();
              //   stateSetter(option)
              // }}
              >
              {({ active }) => (
                <button type="button"
                  className="hover:bg-cardBackground flex justify-start items center px-4 py-2 text-sm ease-out duration-200 w-full font-normal"
                >
                  {option}
                </button>
              )}
            </Menu.Item>)}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
