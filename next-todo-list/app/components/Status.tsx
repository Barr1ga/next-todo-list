import { taskStatus } from "../config/taskStatus"

export default function Status({ status }: { status: string }) {
    return (
        <div className="flex gap-2 items-center">
            <h5 className="text-xs bg-[#ffffff]/10 pl-1 pr-1 text-[#ffffff] rounded-full">#{status}</h5>
        </div>
    )
}
