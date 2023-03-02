import React from 'react'
import TagCircle from './TagCircle';

export default function TagsList() {
    const tags = [
        { uid: "1", name: "School", color: "color1" },
        { uid: "2", name: "Family", color: "color2" },
        { uid: "3", name: "Work", color: "color3" },
        { uid: "4", name: "Guest", color: "color4" },
    ]


    return (
        <div className="flex flex-col gap-2">
            {/* accounts */}

            <small className='opacity-40'>Workspace Tags</small>
            <div className=''>
                {tags.map((tag) => {
                    return (
                        <div className="flex gap-3 items-center rounded px-2 py-1 hover:bg-gray/10 ease-out duration-200 cursor-pointer">
                            <TagCircle color={tag.color}></TagCircle>
                            <span className="text-sm pr-0.5">{tag.name}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
