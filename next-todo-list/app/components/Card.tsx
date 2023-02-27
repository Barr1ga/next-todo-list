import { Tag, Task } from "@/.next/types/app/interfaces"
import Status from "@/app/components/Status"

export default function Card({ task }: { task: Task }) {
    return (
        <div className="bg-[#1b1d24] rounded border border-[#d8dcec]/10 flex flex-col">
            <div className="flex gap-1 flex-wrap pt-2 pr-4 pb-2 pl-4">
                {task.tags.map((tag: Tag, idx: number) => (<Status key={idx} status={task.status}></Status>))}
            </div>
            <div className="bg-[#0e0f13] pt-2 pr-4 pb-2 pl-4 border-t border-[#d8dcec]/10 rounded-bl-[4px] rounded-br-[4px] flex flex-col">
                <h4></h4>{task.title}
                <small className="opacity-40">{task.date}</small>
            </div>
        </div>
    )
}
