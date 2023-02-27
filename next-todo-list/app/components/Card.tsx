import { Tag, Task } from "@/.next/types/app/interfaces"
import { taskStatus } from "../config/taskStatus"
import HashTag from "@/app/components/HashTag"

export default function Card({ task }: { task: Task }) {
    return (
        <div className="bg-cardBackground rounded border border-gray/10 hover:bg-cardBackgroundHover ease-out duration-200 flex flex-col cursor-pointer">
            <div className="flex justify-between items-center pt-2 pr-4 pb-2 pl-4 gap-4">
                <div className="flex gap-1 flex-wrap">
                    {task.tags.map((tag: string, idx: number) => (
                        <HashTag key={idx} tag={tag}></HashTag>
                    ))}
                </div>

                {task.status === taskStatus.BACKLOG && <div className="flex items-center gap-2">🎯</div>} 
            </div>
            <div className="bg-cardBody pt-2 pr-4 pb-2 pl-4 border-t border-gray/10 rounded-bl-[4px] rounded-br-[4px] flex flex-col gap-2">
                <small className="opacity-40">{task.date}</small>
                {task.title}
            </div>
        </div>
    )
}
{/*
📩
🎯
🚚
✅
❌ */}
