import { Tag } from "@/.next/types/app/interfaces"

export default function HashTag({ tag }: { tag: string }) {
    console.log(tag)
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
            <div className="flex gap-2 items-center">
                <div className="text-xs bg-color1/10 pt-0.5 pr-1.5 pb-0.5 pl-1.5 text-color1 rounded-full">{`#${evaluatedTag.name}`}</div>
            </div>
        )
    }

    if (evaluatedTag.color === "color2") {
        return (
            <div className="flex gap-2 items-center">
                <div className="text-xs bg-color2/10 pt-0.5 pr-1.5 pb-0.5 pl-1.5 text-color2 rounded-full">{`#${evaluatedTag.name}`}</div>
            </div>
        )
    }

    if (evaluatedTag.color === "color3") {
        return (
            <div className="flex gap-2 items-center">
                <div className="text-xs bg-color3/10 pt-0.5 pr-1.5 pb-0.5 pl-1.5 text-color3 rounded-full">{`#${evaluatedTag.name}`}</div>
            </div>
        )
    }

    if (evaluatedTag.color === "color4") {
        return (
            <div className="flex gap-2 items-center">
                <div className="text-xs bg-color4/10 pt-0.5 pr-1.5 pb-0.5 pl-1.5 text-color4 rounded-full">{`#${evaluatedTag.name}`}</div>
            </div>
        )
    }

    if (evaluatedTag.color === "color5") {
        return (
            <div className="flex gap-2 items-center">
                <div className="text-xs bg-color5/10 pt-0.5 pr-1.5 pb-0.5 pl-1.5 text-color5 rounded-full">{`#${evaluatedTag.name}`}</div>
            </div>
        )
    }

    if (evaluatedTag.color === "color6") {
        return (
            <div className="flex gap-2 items-center">
                <div className="text-xs bg-color6/10 pt-0.5 pr-1.5 pb-0.5 pl-1.5 text-color6 rounded-full">{`#${evaluatedTag.name}`}</div>
            </div>
        )
    }

    if (evaluatedTag.color === "color7") {
        return (
            <div className="flex gap-2 items-center">
                <div className="text-xs bg-color7/10 pt-0.5 pr-1.5 pb-0.5 pl-1.5 text-color7 rounded-full">{`#${evaluatedTag.name}`}</div>
            </div>
        )
    }

    if (evaluatedTag.color === "color8") {
        return (
            <div className="flex gap-2 items-center">
                <div className="text-xs bg-color8/10 pt-0.5 pr-1.5 pb-0.5 pl-1.5 text-color8 rounded-full">{`#${evaluatedTag.name}`}</div>
            </div>
        )
    }

    if (evaluatedTag.color === "color9") {
        return (
            <div className="flex gap-2 items-center">
                <div className="text-xs bg-color9/10 pt-0.5 pr-1.5 pb-0.5 pl-1.5 text-color9 rounded-full">{`#${evaluatedTag.name}`}</div>
            </div>
        )
    }

    if (evaluatedTag.color === "color10") {
        return (
            <div className="flex gap-2 items-center">
                <div className="text-xs bg-color10/10 pt-0.5 pr-1.5 pb-0.5 pl-1.5 text-color10 rounded-full">{`#${evaluatedTag.name}`}</div>
            </div>
        )
    }

    if (evaluatedTag.color === "color11") {
        return (
            <div className="flex gap-2 items-center">
                <div className="text-xs bg-color11/10 pt-0.5 pr-1.5 pb-0.5 pl-1.5 text-color11 rounded-full">{`#${evaluatedTag.name}`}</div>
            </div>
        )
    }

    if (evaluatedTag.color === "color12") {
        return (
            <div className="flex gap-2 items-center">
                <div className="text-xs bg-color12/10 pt-0.5 pr-1.5 pb-0.5 pl-1.5 text-color12 rounded-full">{`#${evaluatedTag.name}`}</div>
            </div>
        )
    }

    return (
        <div className="flex gap-2 items-center">
            <div className="text-xs bg-[#ffffff]/10 pt-0.5 pr-1.5 pb-0.5 pl-1.5 text-[#ffffff] rounded-full">{`#${evaluatedTag.name}`}</div>
        </div>
    )
}
