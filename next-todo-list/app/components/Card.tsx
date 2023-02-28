"use client";

import { useState } from "react"
import { Tag, Task } from "@/app/config/interfaceTypes"
import { taskStatus } from "../config/taskStatus"
import HashTag from "@/app/components/HashTag"
import formatISO from 'date-fns/formatISO'
import format from 'date-fns/format'
import TaskModal from "./TaskModal";
import { methodTypes } from "../config/methodTypes";
import { HiChevronDown } from "react-icons/hi";
import Dropdown from "./Dropdown";

export default function Card({ task }: { task: Task }) {
    const date = format(new Date(task.date), "PPpp");
    const [isPickStatus, setIsPickStatus] = useState<boolean>(false);

    const statusOptions = {
        options: Object.values(taskStatus),
        defaultValue: Object.values(taskStatus).findIndex((status) => status === task.status)
    }

    return (
        <TaskModal boardName={"Task"} triggerComponent={
            <div className="hover:shadow-xl hover:shadow-[#000]/30 bg-cardBackground rounded border border-gray/10 hover:bg-cardBackgroundHover ease-out duration-200 flex flex-col cursor-pointer">
                <div className="flex justify-between items-center p-2 gap-4">
                    <div className="flex gap-2 items-center">
                        <div className="flex justify-center items-center h-[15px] w-[15px] rounded-full border border-gray/40 bg-gray/5 border-dashed">
                            <div className="bg-gray/40 rounded-full h-[5px] w-[5px]"></div>
                        </div>
                        <div className="flex gap-1 flex-wrap">
                            {task.tags.map((tag: string, idx: number) => (
                                <HashTag key={idx} tag={tag} withX={false}></HashTag>
                            ))}
                        </div>
                    </div>

                    {/* {task.status === taskStatus.BACKLOG && <button onClick={() => setIsPickStatus(true)} className="flex items-center gap-2">📩</button>}
                    {task.status === taskStatus.TODO && <button onClick={() => setIsPickStatus(true)} className="flex items-center gap-2">🎯</button>}
                    {task.status === taskStatus.IN_PROGRESS && <button onClick={() => setIsPickStatus(true)} className="flex items-center gap-2">🚚</button>}
                    {task.status === taskStatus.DONE && <button onClick={() => setIsPickStatus(true)} className="flex items-center gap-2">✅</button>}
                    {task.status === taskStatus.CANCELLED && <button onClick={() => setIsPickStatus(true)} className="flex items-center gap-2">❌</button>} */}
                </div>
                <div className="bg-dark px-3 py-2 border-t border-gray/10 ease-in-out transition-all duration-1000 rounded-bl-[4px] rounded-br-[4px] flex flex-col gap-2">
                    <small className="opacity-40">{date}</small>
                    <p className="text-sm">{task.title}</p>

                    <hr className="opacity-10"></hr>

                    <div className="w-full flex justify-end">
                        <Dropdown options={statusOptions.options} defaultValue={statusOptions.defaultValue}></Dropdown>
                    </div>
                </div>
            </div>
        } methodType={methodTypes.UPDATE} defaultValues={task}></TaskModal>
    )
}
