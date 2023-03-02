"use client";

import { useState } from 'react'

const users = [
    {
        uid: "1",
        email: "admin@usc.edu.ph",
        token: "2",
        userType: "Administrator",
    },
    {
        uid: "1",
        email: "collaborator@usc.edu.ph",
        token: "3",
        userType: "Collaborator",
    },
    {
        uid: "1",
        email: "guest@usc.edu.ph",
        token: "1",
        userType: "Guest",
    }
]

export default function AccountSelector() {
    const [loggedInAccount, setLoggedInAccount] = useState("admin@usc.edu.ph");

    return (
        <div className="flex flex-col gap-2">
            {/* accounts */}

            <small className='opacity-40'>Accounts</small>

            <div className='flex flex-col'>
                {users.map((user, idx) => (
                    <div key={idx} className={`${loggedInAccount === user.email ? "bg-dark" : ""} flex gap-3 items-center rounded px-2 py-1 hover:bg-dark ease-out duration-200 cursor-pointer`}>
                        <div className="bg-primary h-[25px] w-[25px] rounded-full text-sm text-[#fff] flex items-center justify-center">
                            {user.email.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex flex-col gap-0">
                            <h5 className='text-sm'>{user.email}</h5>
                            <small className="opacity-40 text-xs">{user.userType}</small>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
