import { Tag } from "@/app/config/interfaceTypes"
import { HiOutlineX } from "react-icons/hi"

export default function HashTag({ tag, withX = false }: { tag: string, withX: boolean }) {
    const tags = [
        { uid: "1", name: "Scool", color: "color1" },
        { uid: "2", name: "Family", color: "color2" },
        { uid: "3", name: "Work", color: "color3" },
        { uid: "4", name: "Guest", color: "color4" },
    ]

    const evaluatedTag = tags.find((tagOption) => tagOption.uid === tag);

    if (!evaluatedTag) {
        return <></>;
    }

    if (evaluatedTag.color === "color1") {
        return (
            <div className="flex gap-2 rounded text-xs px-2 py-[2px] border border-gray/10 hover:bg-gray/10 items-center ease-out duration-200">
                <div className="h-[10px] w-[10px] bg-color1 text-[color1] rounded-full"></div>
                {evaluatedTag.name}
                {withX && <HiOutlineX></HiOutlineX>}
            </div>
        )
    }

    if (evaluatedTag.color === "color2") {
        return (
            <div className="flex gap-2 rounded text-xs px-2 py-[2px] border border-gray/10 hover:bg-gray/10 items-center ease-out duration-200">
                <div className="h-[10px] w-[10px] bg-color2 rounded-full"></div>
                {evaluatedTag.name}
                {withX && <HiOutlineX></HiOutlineX>}
            </div>
        )
    }

    if (evaluatedTag.color === "color3") {
        return (
            <div className="flex gap-2 rounded text-xs px-2 py-[2px] border border-gray/10 hover:bg-gray/10 items-center ease-out duration-200">
                <div className="h-[10px] w-[10px] bg-color3 rounded-full"></div>
                {evaluatedTag.name}
                {withX && <HiOutlineX></HiOutlineX>}
            </div>
        )
    }

    if (evaluatedTag.color === "color4") {
        return (
            <div className="flex gap-2 rounded text-xs px-2 py-[2px] border border-gray/10 hover:bg-gray/10 items-center ease-out duration-200">
                <div className="h-[10px] w-[10px] bg-color4 rounded-full"></div>
                {evaluatedTag.name}
                {withX && <HiOutlineX></HiOutlineX>}
            </div>
        )
    }

    if (evaluatedTag.color === "color5") {
        return (
            <div className="flex gap-2 rounded text-xs px-2 py-[2px] border border-gray/10 hover:bg-gray/10 items-center ease-out duration-200">
                <div className="h-[10px] w-[10px] bg-color5 rounded-full"></div>
                {evaluatedTag.name}
                {withX && <HiOutlineX></HiOutlineX>}
            </div>
        )
    }

    if (evaluatedTag.color === "color6") {
        return (
            <div className="flex gap-2 rounded text-xs px-2 py-[2px] border border-gray/10 hover:bg-gray/10 items-center ease-out duration-200">
                <div className="h-[10px] w-[10px] bg-color6 rounded-full"></div>
                {evaluatedTag.name}
                {withX && <HiOutlineX></HiOutlineX>}
            </div>
        )
    }

    if (evaluatedTag.color === "color7") {
        return (
            <div className="flex gap-2 rounded text-xs px-2 py-[2px] border border-gray/10 hover:bg-gray/10 items-center ease-out duration-200">
                <div className="h-[10px] w-[10px] bg-color7 rounded-full"></div>
                {evaluatedTag.name}
                {withX && <HiOutlineX></HiOutlineX>}
            </div>
        )
    }

    if (evaluatedTag.color === "color8") {
        return (
            <div className="flex gap-2 rounded text-xs px-2 py-[2px] border border-gray/10 hover:bg-gray/10 items-center ease-out duration-200">
                <div className="h-[10px] w-[10px] bg-color8 rounded-full"></div>
                {evaluatedTag.name}
                {withX && <HiOutlineX></HiOutlineX>}
            </div>
        )
    }

    if (evaluatedTag.color === "color9") {
        return (
            <div className="flex gap-2 rounded text-xs px-2 py-[2px] border border-gray/10 hover:bg-gray/10 items-center ease-out duration-200">
                <div className="h-[10px] w-[10px] bg-color9 rounded-full"></div>
                {evaluatedTag.name}
                {withX && <HiOutlineX></HiOutlineX>}
            </div>
        )
    }

    if (evaluatedTag.color === "color10") {
        return (
            <div className="flex gap-2 rounded text-xs px-2 py-[2px] border border-gray/10 hover:bg-gray/10 items-center ease-out duration-200">
                <div className="h-[10px] w-[10px] bg-color10 rounded-full"></div>
                {evaluatedTag.name}
                {withX && <HiOutlineX></HiOutlineX>}
            </div>
        )
    }

    if (evaluatedTag.color === "color11") {
        return (
            <div className="flex gap-2 rounded text-xs px-2 py-[2px] border border-gray/10 hover:bg-gray/10 items-center ease-out duration-200">
                <div className="h-[10px] w-[10px] bg-color11 rounded-full"></div>
                {evaluatedTag.name}
                {withX && <HiOutlineX></HiOutlineX>}
            </div>
        )
    }

    if (evaluatedTag.color === "color12") {
        return (
            <div className="flex gap-2 rounded text-xs px-2 py-[2px] border border-gray/10 hover:bg-gray/10 items-center ease-out duration-200">
                <div className="h-[10px] w-[10px] bg-color12 text-color12 rounded-full"></div>
                {evaluatedTag.name}
                {withX && <HiOutlineX></HiOutlineX>}
            </div>
        )
    }

    return (
        <div className="flex gap-2 rounded text-xs px-2 py-[2px] border border-gray/10 hover:bg-gray/10 items-center ease-out duration-200">
            <div className="h-[10px] w-[10px] bg-[#ffffff] rounded-full"></div>
            {evaluatedTag.name}
            {withX && <HiOutlineX></HiOutlineX>}
        </div>
    )
}
