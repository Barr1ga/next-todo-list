import { colors } from "@/app/config/colors";

export default function TagCircle({ color = "#ffffff" }: { color: string }) {
    return (
        <div
            className="min-h-[10px] min-w-[10px] rounded-full"
            style={{
                backgroundColor: color
            }}>
        </div>
    )
}
