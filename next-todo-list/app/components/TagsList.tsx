"use client"
import { useQuery } from '@/convex/_generated/react';
import { useState } from 'react'
import { HiChevronDown, HiChevronRight, HiCog, HiPlus } from 'react-icons/hi';
import CreateTag from './CreateTag';
import TagCircle from './TagCircle';
import TagInfo from './TagInfo';

export default function TagsList() {
    const [show, setShow] = useState<boolean>(true);
    const tags = useQuery("tags/getTags") || [];

    return (
        <div className="flex flex-col gap-2">
            {/* accounts */}

            <div className='flex gap-2 items-center justify-between cursor-pointer'>
                <div onClick={() => setShow((prev) => !prev)} className='flex gap-2 items-center w-full opacity-40 hover:opacity-100 ease-out duration-200'>
                    {show && <HiChevronDown></HiChevronDown>}
                    {!show && <HiChevronRight></HiChevronRight>}
                    <small>Workspace Tags</small>
                </div>
                <CreateTag triggerComponent={
                    <HiPlus className='opacity-40 hover:opacity-100 ease-out duration-200'></HiPlus>
                }></CreateTag>
            </div>

            <div className={`${show ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} ease-in-out duration-200 flex flex-col`}>
                {tags.map((tag, idx) => {
                    return (
                        <div key={idx} className={`${show ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} flex gap-3 items-center rounded px-2 py-1 hover:bg-gray/10 ease-out duration-200 cursor-pointer w-full group/item`}>
                            <div className='flex gap-2 items-center w-full'>
                                <div>
                                    <TagCircle color={tag.color}></TagCircle>
                                </div>
                                <span className="text-sm pr-0.5 w-full">{tag.name}</span>
                            </div>
                            <TagInfo
                                triggerComponent={
                                    <HiCog className="group/edit invisible group-hover/item:visible opacity-40 hover:opacity-100 ease-in"></HiCog>
                                }
                                defaultValues={tag}
                            ></TagInfo>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}
