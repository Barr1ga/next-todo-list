"use client";
import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { HiOutlinePlus, HiLockClosed, HiOutlineX } from "react-icons/hi"
import { Tag, Task } from "@/app/config/interfaceTypes"
import TextareaAutosize from 'react-textarea-autosize';
import Dropdown from "@/app/components/Dropdown"
import HashTag from './HashTag';
import Checkbox from './Checkbox';
import { methodTypes } from '../config/methodTypes';

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const colors = {
    color1: "#27e64d",
    color2: "#1962ff",
    color3: "#7a38ff",
    color4: "#ff3651",
    color5: "#ff5297",
    color6: "#f0353b",
    color7: "#f08635",
    color8: "#fff53b",
    color9: "#537199",
    color10: "#eca1ff",
    color11: "#aeffa1",
    color12: "#aeffa1",
}

const tags = [
    { uid: "1", name: "Scool", color: "color1" },
    { uid: "2", name: "Family", color: "color2" },
    { uid: "3", name: "Work", color: "color3" },
    { uid: "4", name: "Guest", color: "color4" },
]

export default function AddTask({ boardName, triggerComponent, methodType, defaultValues }: { boardName: string, triggerComponent: any, methodType: string, defaultValues: Task }) {
    const [open, setOpen] = useState(false);
    const [assignedTags, setAssignedTags] = useState<Tag[]>(tags.filter((tag) => defaultValues?.tags.includes(tag.uid)));
    const [isPrivate, setIsPrivate] = useState<boolean>(defaultValues?.isPrivate ? true : false);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const cancelButtonRef = useRef(null);
    const titleRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (titleRef.current) {
            titleRef.current.focus();
        }
    }, [])

    function onSubmit() {
        const data = {
            title,
            description,
            isPrivate,
            assignedTags,
        }

        if (methodType === methodTypes.CREATE) {
            console.log("create");
            console.log(data);
        }

        if (methodType === methodTypes.UPDATE) {
            console.log("Update");
        }

        setOpen(false);
    }

    return (
        <>
            <div onClick={(e) => setOpen((prev: boolean) => !prev)}>{triggerComponent}</div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-dark bg-opacity-50 backdrop-blur-sm transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="flex flex-col gap-4 items-start relative bg-cardBackground border border-gray/10 transform overflow-hidden rounded-lg shadow-xl shadow-dark/40 transition-all sm:my-8 sm:w-full sm:max-w-lg p-4">
                                    <span className='text-2xl font-semibold flex justify-between w-full'>
                                        {methodType} {boardName}
                                        <button type="button" onClick={() => setOpen(false)} className="opacity-40 hover:opacity-100 ease-out duration-200">
                                            <HiOutlineX></HiOutlineX>
                                        </button>
                                    </span>

                                    <form className='flex flex-col gap-4 w-full'>
                                        {/* title */}
                                        <div className='flex flex-col gap-1 items-start w-full'>
                                            <label className='text-sm'>Title of this task</label>
                                            <TextareaAutosize
                                                minRows={1}
                                                maxRows={3}
                                                onChange={(e) => setTitle(e.target.value)}
                                                placeholder="New task"
                                                defaultValue={defaultValues.title}
                                                className='bg-dark min-h-[44px] w-full p-2 rounded outline-none focus:shadow-xl focus:shadow-[#000]/30 ease-out duration-200 resize-none text-lg'></TextareaAutosize>
                                        </div>

                                        {/* description */}
                                        <div className='flex flex-col gap-1 items-start w-full'>
                                            <label className='text-sm'>Description</label>
                                            <TextareaAutosize
                                                minRows={9}
                                                maxRows={9}
                                                onChange={(e) => setDescription(e.target.value)}
                                                placeholder="Add a description"
                                                defaultValue={defaultValues.description}
                                                className='bg-dark min-h-[135px] w-full p-2 rounded outline-none focus:shadow-xl focus:shadow-[#000]/30 ease-out duration-200 resize-none text-sm'></TextareaAutosize>
                                        </div>

                                        {/* tags */}
                                        <div className="flex flex-col gap-2 items-start w-full">
                                            <label className='text-sm'>Tags</label>
                                            <div className='flex gap-1 mt-2'>
                                                {assignedTags.map((tag, idx: number) => (
                                                    <HashTag key={idx} tag={tag.uid} withX={true}></HashTag>
                                                ))}
                                                <button type="button" className="flex items-center justify-center border border-gray/10 hover:bg-gray/10 rounded h-[22px] w-[22px]  ease-out duration-200"><HiOutlinePlus></HiOutlinePlus></button>
                                            </div>
                                        </div>

                                        <hr className='w-full h-[1px] opacity-10'></hr>

                                        {/* private */}
                                        <div className='flex w-full justify-between'>
                                            <div>
                                                <span className="flex gap-2 items-center">
                                                    <HiLockClosed className="opacity-40"></HiLockClosed>
                                                    Private Task
                                                </span>
                                                <small className='opacity-40'>Enabling this function will restrict guest users from viewing this task.</small>
                                            </div>
                                            <Checkbox isChecked={isPrivate} setIsChecked={setIsPrivate}></Checkbox>
                                        </div>
                                    </form>

                                    <hr className='w-full h-[1px] opacity-10'></hr>

                                    <div className="flex w-full justify-end gap-2">
                                        <button
                                            type="button"
                                            className="flex justify-center items-center gap-2 rounded-md border border-gray/10 px-4 py-2 text-sm font-medium hover:bg-gray/10 ease-out duration-200"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="button"
                                            className="bg-primary hover:bg-[#ffffff] hover:text-[#000000] flex justify-center items-center gap-2 rounded-md border border-gray/10 bg-white px-4 py-2 text-sm font-semibold ease-out duration-200"
                                            onClick={onSubmit}
                                            ref={cancelButtonRef}
                                        >
                                            <HiOutlinePlus></HiOutlinePlus>Add
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}