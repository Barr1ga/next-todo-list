import Card from "@/app/components/Card";
import { Task, Board } from "@/.next/types/app/interfaces"
import { HiOutlinePlus } from "react-icons/hi"
import Modal from "@/app/components/Modal"

export default function board({ boardName, tasks }: Board) {
  const tasksCount = tasks.length;

  return (
    <div className="flex flex-col gap-2 flex-1">
      <span className="flex justify-between">
        <span className="flex gap-4">
          <div>{boardName}</div>
          <div className="opacity-40">{tasksCount}</div>
        </span>
        <Modal></Modal>
        <button className="flex items-center gap-2 opacity-40 hover:opacity-100  ease-out duration-200"><HiOutlinePlus></HiOutlinePlus>Add</button>
      </span>

      <div className="flex flex-col gap-2">
        {tasks.map((task: Task, idx: number) => (
          <Card key={idx} task={task}></Card>
        ))}
      </div>
    </div>
  )
}
