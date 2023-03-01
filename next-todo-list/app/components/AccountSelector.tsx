"use client";
import React from 'react'

const users = [
    {
        uid: "1",
        username: "admin@usc.edu.ph",
        token: "2",
        userType: "Administrator",
    },
    {
        uid: "1",
        username: "collaborator@usc.edu.ph",
        token: "3",
        userType: "Collaborator",
    },
    {
        uid: "1",
        username: "guest@usc.edu.ph",
        token: "1",
        userType: "Guest",
    }
]

export default function AccountSelector() {


    return (
        <div className="flex flex-col gap-2">
            {/* accounts */}

            <small className='opacity-40'>Accounts</small>

            <div className='flex flex-col gap-2'>
                {users.map((user) => (
                    <div className="flex gap-3 items-center rounded p-2 hover:bg-gray/10 ease-out duration-200 cursor-pointer">
                        <div className="bg-[#fff] h-[30px] w-[30px] rounded-full text-[#000] flex items-center justify-center">{"H"}</div>
                        <div className="flex flex-col gap-0">
                            <h5 className='text-sm'>{user.username}</h5>
                            <small className="opacity-40 text-xs">{user.userType}</small>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
