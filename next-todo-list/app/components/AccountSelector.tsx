"use client";

import { useState } from 'react'
import { useQuery } from "@/convex/_generated/react";
import { HiChevronDown, HiChevronRight } from "react-icons/hi"
import useStore from "@/app/(store)/store";
import { User } from '../config/interfaceTypes';

export default function AccountSelector() {
    const [show, setShow] = useState<boolean>(true);
    const users = useQuery("users/getUsers") || [];
    const { signedInUser, logInUser, updateSearchFilter, updateTagFilter, selectTagFilter } = useStore();

    function changeAccount(user: User) {
        updateTagFilter(false);
        selectTagFilter(undefined);
        updateSearchFilter("");
        logInUser(user);
    }

    return (
        <div className="flex flex-col gap-2">
            {/* accounts */}
            <div className='flex gap-2 items-center justify-between cursor-pointer'>
                <div onClick={() => setShow((prev) => !prev)} className='flex gap-2 items-center w-full opacity-40 hover:opacity-100 ease-out duration-200'>
                    {show && <HiChevronDown></HiChevronDown>}
                    {!show && <HiChevronRight></HiChevronRight>}
                    <small>Accounts</small>
                </div>
            </div>

            <div className={`${show ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} ease-in-out duration-200 flex flex-col z-0`}>
                {users.map((user, idx) => (
                    <button onClick={() => changeAccount(user)} type="button" key={idx} className={`${show ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} ease-in-out duration-200`}>
                        <div className={`${signedInUser?.email === user.email ? "bg-dark" : ""} flex gap-3 items-center rounded px-2 py-1 hover:bg-dark ease-out duration-200 cursor-pointer`}>
                            <div className="bg-primary h-[25px] w-[25px] rounded-full text-sm text-[#fff] flex items-center justify-center">
                                {user.email.charAt(0).toUpperCase()}
                            </div>
                            <div className="flex flex-col items-start gap-0">
                                <h5 className='text-sm'>{user.email}</h5>
                                <small className="opacity-40 text-xs">{user.userType}</small>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}
