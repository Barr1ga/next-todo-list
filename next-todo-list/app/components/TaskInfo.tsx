"use client";
import { useMutation, useQuery } from "@/convex/_generated/react";
import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { HiLockClosed, HiOutlineX, HiOutlineRefresh } from "react-icons/hi"
import { Tag, Task } from "@/app/config/interfaceTypes"
import TextareaAutosize from 'react-textarea-autosize';
import Dropdown from "@/app/components/Dropdown"
import HashTag from './HashTag';
import Checkbox from './Checkbox';
import { taskStatus } from '../config/taskStatus';
import AssignTags from './AssignTags';
import { GenericId } from "convex/values";

export default function TaskInfo({ boardName, triggerComponent, defaultValues }: { boardName: string, triggerComponent: any, defaultValues: Task }) {
    const tags = useQuery("tags/getTags") || [];
    const updateTagMutation = useMutation("tags/updateTag");
    const [open, setOpen] = useState(false);
    // [] of tag._id
    var defaultAssignedTags = tags.filter((tag: Tag) => { if (tag.tasks && tag.tasks.some((task: GenericId<string>) => task.id === defaultValues._id.id && task.tableName === defaultValues._id.tableName)) { return tag } });
    const [assignedTags, setAssignedTags] = useState<Tag[]>(tags.filter((tag: Tag) => { if (tag.tasks && tag.tasks.some((task: GenericId<string>) => task.id === defaultValues._id.id && task.tableName === defaultValues._id.tableName)) { return tag } }));
    const [unassignedTags, setUnassignedTags] = useState<Tag[]>([]);

    const [isPrivate, setIsPrivate] = useState<boolean>(defaultValues.isPrivate);
    const [title, setTitle] = useState<string>(defaultValues.title);
    const [description, setDescription] = useState<string>(defaultValues.description);
    const cancelButtonRef = useRef(null);
    const [status, setStatus] = useState(boardName);

    const updateTaskMutation = useMutation("tasks/updateTask");
    const deleteTaskMutation = useMutation("tasks/deleteTask");

    const statusOptions = {
        options: Object.values(taskStatus),
        defaultValue: Object.values(taskStatus).findIndex((status) => status === defaultValues.status)
    }

    useEffect(() => {
        defaultAssignedTags = tags.filter((tag: Tag) => { if (tag.tasks && tag.tasks.some((task: GenericId<string>) => task.id === defaultValues._id.id && task.tableName === defaultValues._id.tableName)) { return tag } });
        setAssignedTags(tags.filter((tag: Tag) => { if (tag.tasks && tag.tasks.some((task: GenericId<string>) => task.id === defaultValues._id.id && task.tableName === defaultValues._id.tableName)) { return tag } }));
        setUnassignedTags([]);
    }, [tags])


    function closeModal() {
        setOpen(false);
        setAssignedTags(tags.filter((tag: Tag) => { if (tag.tasks && tag.tasks.some((task: GenericId<string>) => task.id === defaultValues._id.id && task.tableName === defaultValues._id.tableName)) { return tag } }))
        setUnassignedTags([]);
        setIsPrivate(defaultValues.isPrivate);
        setTitle(defaultValues.title);
        setDescription(defaultValues.description);
    }

    function assignTag(tagParam: Tag) {
        setAssignedTags([...assignedTags, tagParam]);
        setUnassignedTags(unassignedTags.filter((tag) => tag._id !== tagParam._id));
    }

    function unassignTag(tagParam: Tag) {
        setAssignedTags(assignedTags.filter((tag) => tag._id !== tagParam._id));
        setUnassignedTags([...unassignedTags, tagParam]);
    }

    function onDelete() {
        const res = deleteTaskMutation(defaultValues._id);
    }

    function onSubmit() {
        // clean assigned & unassigned tags to modify only assigned and unassigned tag documentst in convex
        const cleanedAssignedTag = assignedTags.filter((assignedTag: Tag) => !defaultAssignedTags.some((defaultTag: Tag) => defaultTag._id.id === assignedTag._id.id));
        const assignedTaskIds = cleanedAssignedTag.map((tag: Tag) => tag._id);
        const unassignedTaskIds = unassignedTags.map((tag: Tag) => tag._id);

        const data = {
            title,
            description,
            status,
            isPrivate,
            date: new Date().toISOString(),
        }

        const updateTaskData = {
            documentId: defaultValues._id,
            taskData: data,
        }

        if (assignedTaskIds.length > 0) {
            assignedTaskIds.forEach((_id) => {
                const currentTag = tags.find((tag: Tag) => tag._id === _id);

                const updateTagData = {
                    documentId: currentTag._id,
                    tagData: {
                        name: currentTag.name,
                        color: currentTag.color,
                        tasks: currentTag.tasks ? [...currentTag.tasks, defaultValues._id] : [defaultValues._id]
                    },
                }

                const tagUpdateRes = updateTagMutation(updateTagData);
            })
        }

        if (unassignedTaskIds.length > 0) {
            unassignedTaskIds.forEach((_id) => {
                const currentTag = tags.find((tag: Tag) => tag._id === _id);

                const updateTagData = {
                    documentId: currentTag._id,
                    tagData: {
                        name: currentTag.name,
                        color: currentTag.color,
                        tasks: currentTag.tasks ? currentTag.tasks.filter((task: GenericId<string>) => task.id !== defaultValues._id.id && task.tableName !== defaultValues._id.id) : currentTag.tasks
                    },
                }

                const tagUpdateRes = updateTagMutation(updateTagData);
            })
        }

        const res = updateTaskMutation(updateTaskData);
        // console.log(res);
        setOpen(false);
    }

    return (
        <>
            <div onClick={(e) => setOpen((prev: boolean) => !prev)}>{triggerComponent}</div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={closeModal}>
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
                                            {"Update " + boardName + "task"}
                                            <Dropdown stateValue={status} stateSetter={setStatus} options={statusOptions.options}></Dropdown>
                                        </div>
                                        <button type="button" onClick={() => closeModal()} className="opacity-40 hover:opacity-100 ease-out duration-200">
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
                                                defaultValue={defaultValues.description}
                                                className='bg-background placeholder:text-[#fff]/40 min-h-[135px] w-full py-2 px-4 rounded outline-none focus:shadow-xl focus:shadow-[#000]/30 ease-out duration-200 resize-none text-sm'></TextareaAutosize>
                                        </div>

                                        {/* tags */}
                                        <div className="flex flex-col gap-2 items-start w-full">
                                            <label className='text-sm'>Tags</label>
                                            <div className='flex w-full flex-wrap gap-1 mt-2'>
                                                {assignedTags.map((tag, idx: number) => (
                                                    <HashTag key={idx} tag={tag} withX={true} unassignTag={unassignTag}></HashTag>
                                                ))}
                                                <AssignTags assignedTags={assignedTags} tagSelector={assignTag} assignTags={true} all={false}></AssignTags>
                                            </div>
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
                                        <button type="button"
                                            onClick={onDelete}
                                            className="flex justify-center min-w-fit text-danger opacity-40 hover:opacity-100 text-sm w-auto items-center gap-2 font-medium ease-out duration-200"
                                        >
                                            Delete Task
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


