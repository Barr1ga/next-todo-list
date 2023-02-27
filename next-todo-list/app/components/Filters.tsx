"use client";
import { useState } from "react"
import { HiChevronDown, HiChevronUp } from "react-icons/hi"

export default function Filters() {
    const tags = [
        { uid: "1", name: "Scool", color: "color1" },
        { uid: "2", name: "Family", color: "color2" },
        { uid: "3", name: "Work", color: "color3" },
        { uid: "4", name: "Guest", color: "color4" },
    ]

    const [tagUidFilter, setTagsFilter] = useState(tags[0].uid);
    const selectedTag = tags.find((tag) => tagUidFilter === tag.uid);

    return (
        <div className="flex gap-2">
            {/* tags */}
            <div className="flex gap-2">
                <button className="btn-secondary">
                    <p>
                        {selectedTag ? selectedTag.name : tags[0].name}
                    </p>
                    <HiChevronDown></HiChevronDown>
                </button>
            </div>

            {/* sort */}
            <div className="flex gap-2">
                <button className="btn-secondary">
                    <p>
                        Sort
                    </p>
                    <HiChevronDown></HiChevronDown>
                </button>
            </div>
        </div>
    )
}
