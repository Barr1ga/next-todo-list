"use client";
import { useMutation, useQuery } from "@/convex/_generated/react";
import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { HiOutlinePlus, HiLockClosed, HiOutlineX } from "react-icons/hi"
import TextareaAutosize from 'react-textarea-autosize';
import Checkbox from './Checkbox';
import useStore from "../(store)/store";

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CeateTask({ boardName, triggerComponent }: { boardName: string, triggerComponent: any }) {
    const { signedInUser } = useStore();

    const [open, setOpen] = useState(false);
    const [isPrivate, setIsPrivate] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const cancelButtonRef = useRef(null);
    const [status, setStatus] = useState(boardName ? boardName.slice(1) : "");

    const createTaskMutation = useMutation("tasks/createTask");

    function onSubmit() {
        const res = createTaskMutation({
            title,
            description,
            status,
            isPrivate,
            date: new Date().toISOString(),
        }, signedInUser);

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
                        <div className="fixed inset-0 bg-background bg-opacity-50 backdrop-blur-sm transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto overflow-x-visible">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 overflow-x-visible">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="flex flex-col gap-4 items-start relative bg-dark border border-gray/10 transform rounded-lg shadow-2xl shadow-[#000]/40 transition-all sm:my-8 sm:w-full sm:max-w-lg p-4 overflow-x-visible">
                                    <span className='text-2xl font-semibold flex justify-between w-full mb-4'>
                                        <div className="flex items-center gap-4">
                                            {/* title */}
                                            {"Create" + boardName}
                                        </div>
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
                                                className='bg-background placeholder:text-[#fff]/40 min-h-[44px] w-full py-2 px-4 rounded outline-none focus:shadow-xl focus:shadow-[#000]/30 ease-out duration-200 resize-none text-lg'></TextareaAutosize>
                                        </div>

                                        {/* description */}
                                        <div className='flex flex-col gap-1 items-start w-full'>
                                            <label className='text-sm'>Description</label>
                                            <TextareaAutosize
                                                minRows={9}
                                                maxRows={9}
                                                onChange={(e) => setDescription(e.target.value)}
                                                placeholder="Add a description"
                                                className='bg-background placeholder:text-[#fff]/40 min-h-[135px] w-full py-2 px-4 rounded outline-none focus:shadow-xl focus:shadow-[#000]/30 ease-out duration-200 resize-none text-sm'></TextareaAutosize>
                                        </div>

                                        <hr className='w-full opacity-10'></hr>

                                        {/* private */}
                                        <div className='flex w-full justify-between'>
                                            <div>
                                                <span className="flex gap-2 items-center">
                                                    <HiLockClosed className="opacity-40"></HiLockClosed>
                                                    <span className=" text-sm">Private Task</span>
                                                </span>
                                                <small className='opacity-40'>Enabling this function will restrict guest users from viewing this task.</small>
                                            </div>
                                            <Checkbox isChecked={isPrivate} setIsChecked={setIsPrivate}></Checkbox>
                                        </div>


                                    </form>

                                    <hr className='w-full h-[1px] opacity-10'></hr>

                                    <div className="flex w-full justify-between items-center">
                                        <div className="flex w-full justify-end gap-2">
                                            <button
                                                type="button"
                                                className="flex justify-center items-center gap-2 rounded-md border border-gray/10 px-4 py-2 text-sm font-medium hover:bg-gray/10 ease-out duration-200"
                                                onClick={() => setOpen(false)}
                                                ref={cancelButtonRef}
                                            >
                                                Cancel
                                            </button>

                                            {/* create */}
                                            <button
                                                type="button"
                                                className="bg-primary hover:bg-[#ffffff] hover:text-[#000000] flex justify-center items-center gap-2 rounded-md border border-gray/10 bg-white px-4 py-2 text-sm font-semibold ease-out duration-200"
                                                onClick={onSubmit}
                                                ref={cancelButtonRef}
                                            >
                                                <HiOutlinePlus></HiOutlinePlus>Add
                                            </button>
                                        </div>
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


