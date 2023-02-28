"use client";

import Card from "@/app/components/Card";
import { Task, Board } from "@/app/config/interfaceTypes"
import { methodTypes } from "@/app/config/methodTypes";
import { HiOutlinePlus } from "react-icons/hi"
import { useState } from "react";
import TaskModal from "@/app/components/TaskModal"

export default function board({ boardName, tasks }: Board) {
  const [addModal, setAddModal] = useState<boolean>(false);
  const tasksCount = tasks.length;
  const defaultValues = {
    title: "",
    description: "",
    status: "",
    tags: [],
    isPrivate: false,
    date: "",
  }

  return (
    <div className="flex flex-col gap-2 flex-1">
      <span className="flex justify-between">
        <span className="flex gap-4">
          <div>{boardName}</div>
          <div className="opacity-40">{tasksCount}</div>
        </span>
        <TaskModal boardName={boardName.slice(2)} triggerComponent={
          <button
            className="flex items-center gap-2 opacity-40 hover:opacity-100 ease-out duration-200">
            <HiOutlinePlus></HiOutlinePlus>
            Add
          </button>
        } methodType={methodTypes.CREATE} defaultValues={defaultValues}></TaskModal>
      </span>

      <div className="flex flex-col gap-2">
        {tasks.map((task: Task, idx: number) => (
          <Card key={idx} task={task}></Card>
        ))}
      </div>
    </div>
  )
}
