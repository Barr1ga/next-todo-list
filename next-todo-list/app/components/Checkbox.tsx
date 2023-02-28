"use client"
import { Dispatch, SetStateAction, useState } from "react"
import { HiCheck } from "react-icons/hi"

export default function Checkbox({ isChecked, setIsChecked }: { isChecked: boolean, setIsChecked: Dispatch<SetStateAction<boolean>> }) {

    return (
        <div className="h-[20px] w-[20px] rounded border border-gray/20" onClick={() => setIsChecked((prev: boolean) => !prev)}>
            {isChecked && <div className="flex justify-center items-center h-[20px] w-[20px] rounded text-[#ffffff] bg-primary"><HiCheck></HiCheck></div>}
        </div>
    )
}
