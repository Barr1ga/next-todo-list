import { Tag } from "@/app/config/interfaceTypes"
import { HiOutlineX } from "react-icons/hi"

export default function HashTag({ tag, withX = false }: { tag: string, withX: boolean }) {
    const tags = [
        { uid: "1", name: "School", color: "color1" },
        { uid: "2", name: "Family", color: "color2" },
        { uid: "3", name: "Work", color: "color3" },
        { uid: "4", name: "Guest", color: "color4" },
    ]

    const currentTag = tags.find((tagConstant) => tagConstant.uid === tag);
    var circleClass = (currentTag ? "bg-".concat(currentTag?.color) : "#ffffff").concat(" min-h-[10px] min-w-[10px] rounded-full");

    function unassignTag() {
        console.log("remove tag uid ", tag)
    }

    return (
        <div className="flex rounded gap-2 pl-1 pr-0.5 py-[2px] border border-gray/10 items-center ease-out duration-200">
            <div className={circleClass}></div>
            <span className="text-xs pr-0.5">{currentTag?.name}</span>
            {withX &&
                <HiOutlineX className="opacity-40 hover:opacity-100" onClick={unassignTag}></HiOutlineX>
            }
        </div>
    )
}
