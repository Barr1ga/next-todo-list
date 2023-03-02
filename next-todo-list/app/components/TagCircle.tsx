import React from 'react'

export default function TagCircle({ color = "#ffffff" }: {color: string}) {
    console.log(color)
    return (
        <div className={`bg-color1 min-h-[10px] min-w-[10px] rounded-full`}></div>
    )
}
