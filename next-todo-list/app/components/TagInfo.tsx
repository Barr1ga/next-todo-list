"use client";
import { useMutation, } from "@/convex/_generated/react";
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { HiOutlineX, HiOutlineRefresh } from "react-icons/hi"
import { Tag } from "@/app/config/interfaceTypes"
import { colors } from "@/app/config/colors"

export default function TagInfo({ triggerComponent, defaultValues }: { triggerComponent: any, defaultValues: Tag }) {
    const [open, setOpen] = useState<boolean>(false);
    const [name, setName] = useState<string>(defaultValues.name);
    const [selectedColor, setSelectedColor] = useState(defaultValues.color);
    const cancelButtonRef = useRef(null);

    const updateTagMutation = useMutation("tags/updateTag");
    const deleteTagMutation = useMutation("tags/deleteTag");

    function onDelete() {
        const res = deleteTagMutation(defaultValues._id);
    }

    function closeModal() {
        setOpen(false);
        setName(defaultValues.name);
        setSelectedColor(defaultValues.color)
    }

    function onSubmit() {
        const data = {
            name,
            color: selectedColor,
            tasks: defaultValues.tasks ? defaultValues.tasks : [],
        }

        const updateTagData = {
            documentId: defaultValues._id,
            tagData: data,
        }

        const res = updateTagMutation(updateTagData);

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
                                            {"Update " + defaultValues.name + " tag"}
                                        </div>
                                        <button type="button" onClick={() => closeModal()} className="opacity-40 hover:opacity-100 ease-out duration-200">
                                            <HiOutlineX></HiOutlineX>
                                        </button>
                                    </span>


                                    <form className='flex flex-col gap-4 w-full'>
                                        {/* name */}
                                        <div className='flex flex-col gap-1 items-start w-full'>
                                            <label className='text-sm'>Name of this tag</label>
                                            <input type="text"
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="New tag"
                                                defaultValue={defaultValues.name}
                                                className='bg-background placeholder:text-[#fff]/40 w-full py-2 px-4 rounded outline-none focus:shadow-xl focus:shadow-[#000]/30 ease-out duration-200 text-sm'>
                                            </input>
                                        </div>

                                        <hr className='w-full h-[1px] opacity-10'></hr>

                                        {/* colors */}
                                        <div className='flex flex-col gap-1 items-start w-full'>
                                            <div>
                                                <div className="flex flex-2 gap-1 items-center flex-wrap">
                                                    {colors.map((color, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="rounded-lg p-[3px] cursor-pointer"
                                                            onClick={() => setSelectedColor(color)}
                                                            style={{
                                                                border: "2px solid",
                                                                borderColor: selectedColor === color ? color : "transparent"
                                                            }}>
                                                            <div
                                                                className="rounded h-[20px] w-[20px]"
                                                                style={{
                                                                    backgroundColor: color,
                                                                    // borderColor: selectedColor === color ? color : "transparent"
                                                                }}></div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    <hr className='w-full h-[1px] opacity-10'></hr>

                                    <div className="flex w-full justify-between items-center">
                                        <button type="button"
                                            onClick={onDelete}
                                            className="flex justify-center min-w-fit text-danger opacity-40 hover:opacity-100 text-sm w-auto items-center gap-2 font-medium ease-out duration-200"
                                        >
                                            Delete Tag
                                        </button>

                                        <div className="flex w-full justify-end gap-2">
                                            <button
                                                type="button"
                                                className="flex justify-center items-center gap-2 rounded-md border border-gray/10 px-4 py-2 text-sm font-medium hover:bg-gray/10 ease-out duration-200"
                                                onClick={() => closeModal()}
                                                ref={cancelButtonRef}
                                            >
                                                Cancel
                                            </button>

                                            {/* update */}
                                            <button
                                                type="button"
                                                className="bg-primary hover:bg-[#ffffff] hover:text-[#000000] flex justify-center items-center gap-2 rounded-md border border-gray/10 bg-white px-4 py-2 text-sm font-semibold ease-out duration-200"
                                                onClick={onSubmit}
                                                ref={cancelButtonRef}
                                            >
                                                <HiOutlineRefresh className='opacity-40'></HiOutlineRefresh>Update
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


