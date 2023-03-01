"use client";
import { useState } from "react"
import { HiChevronDown, HiChevronUp } from "react-icons/hi"
import Dropdown from "@/app/components/Dropdown"
import TagsFilter from "./TagsFilter";

export default function Filters() {
    const sortOptions = [
        "Ascending",
        "Descending",
    ]

    const [sortFIlter, setSortFilter] = useState<string>(sortOptions[0]);

    function selectTagFilter(tagUid: string) {
        console.log(tagUid)
    }

    return (
        <div className="flex gap-2">
            {/* tags */}
            <TagsFilter></TagsFilter>

            {/* sort */}
            <Dropdown stateValue={sortFIlter} stateSetter={setSortFilter} options={sortOptions}></Dropdown>
        </div>
    )
}
