import { Tag } from "@/app/config/interfaceTypes"
import { useQuery } from "@/convex/_generated/react";
import { HiOutlineX } from "react-icons/hi"
import TagCircle from "./TagCircle";

export default function HashTag({ tag, unassignTag, withX = false }: { tag: Tag, unassignTag: ((tagParam: Tag) => void) | undefined, withX: boolean }) {
    return (
        <div className="flex rounded gap-2 pl-1 pr-0.5 py-[2px] border border-gray/10 items-center ease-out duration-200">
            <TagCircle color={tag?.color}></TagCircle>
            <span className="text-xs pr-0.5">{tag?.name}</span>
            {withX && unassignTag &&
                <HiOutlineX className="opacity-40 hover:opacity-100" onClick={() => unassignTag(tag)}></HiOutlineX>
            }
        </div>
    )
}
