"use client";
import { useState } from "react"
import { HiChevronDown, HiChevronUp } from "react-icons/hi"
import Dropdown from "@/app/components/Dropdown"
import TagsFilter from "./TagsFilter";
import useStore from "../(store)/store";

export default function Filters() {
    const sortOptions = [
        "None",
        "Ascending",
        "Descending",
    ]

    const { orderFilter, updateOrderFilter } = useStore();

    return (
        <div className="flex gap-2">
            {/* tags */}
            <TagsFilter></TagsFilter>

            {/* sort */}
            <Dropdown stateValue={orderFilter} stateSetter={updateOrderFilter} options={sortOptions}></Dropdown>
        </div>
    )
}
