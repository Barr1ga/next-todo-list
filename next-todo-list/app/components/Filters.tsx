"use client";
import { useState } from "react"
import { HiChevronDown, HiChevronUp } from "react-icons/hi"
import Dropdown from "@/app/components/Dropdown"

export default function Filters() {
    const tags = [
        { uid: "1", name: "Scool", color: "color1" },
        { uid: "2", name: "Family", color: "color2" },
        { uid: "3", name: "Work", color: "color3" },
        { uid: "4", name: "Guest", color: "color4" },
    ]

    const tagOptions = {
        options: tags.map((tag) => tag.name),
        defaultValue: "All"
    };

    const sortOptions = [
        "ascending",
        "descending",
    ]

    const [tagUidFilter, setTagsFilter] = useState(tags[0].uid);
    const selectedTag = tags.find((tag) => tagUidFilter === tag.uid);

    return (
        <div className="flex gap-2">
            {/* tags */}
            <Dropdown options={tagOptions}></Dropdown>

            {/* sort */}
            <Dropdown options={sortOptions}></Dropdown>
        </div>
    )
}
