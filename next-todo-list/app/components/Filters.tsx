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

    const tagOptions = ["All", ...tags.map((tag) => tag.name)];
    const sortOptions = [
        "Ascending",
        "Descending",
    ]

    const [tagsFilter, setTagsFilter] = useState<string>(tagOptions[0]);
    const [sortFIlter, setSortFilter] = useState<string>(sortOptions[0]);

    return (
        <div className="flex gap-2">
            {/* tags */}
            <Dropdown stateValue={tagsFilter} stateSetter={setTagsFilter} options={tagOptions}></Dropdown>

            {/* sort */}
            <Dropdown stateValue={sortFIlter} stateSetter={setSortFilter} options={sortOptions}></Dropdown>
        </div>
    )
}
