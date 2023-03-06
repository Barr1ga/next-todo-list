import Card from "@/app/components/Card";
import { Task, Board } from "@/app/config/interfaceTypes"
import { HiOutlinePlus } from "react-icons/hi"
import CreateTask from "@/app/components/CreateTask";

export default function board({ boardName, tasks }: Board) {
  const tasksCount = tasks.length;

  return (
    <div className="flex flex-col gap-2 flex-1">
      <span className="flex gap-4">
        <div>{boardName}</div>
        <div className="opacity-40">{tasksCount}</div>
        <CreateTask boardName={boardName.slice(2)} triggerComponent={
          <button
            type="button"
            className="flex items-center gap-2 opacity-40 hover:opacity-100 ease-out duration-200">
            <HiOutlinePlus></HiOutlinePlus>
            Add
          </button>
        }></CreateTask>
      </span>

      <div className="flex flex-col gap-2">
        {tasks.map((task: Task, idx: number) => (
          <Card key={idx} task={task}></Card>
        ))}
      </div>
    </div>
  )
}
