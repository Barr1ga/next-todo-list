import React from 'react'
import AccountSelector from './AccountSelector'
import TagsList from './TagsList'

export default function SidePanel() {
    return (
        <div className="py-4 pl-8 pr-2 flex flex-col gap-8">
            <div className="text-2xl font-bold">
                NK
            </div>

            <div className='flex flex-col justify-between h-full'>
                <div className='flex flex-col gap-4'>
                    <hr className='opacity-10'></hr>
                    <TagsList></TagsList>
                </div>
                <div className='flex flex-col gap-4'>
                    <hr className='opacity-10'></hr>
                    <AccountSelector></AccountSelector>
                </div>
            </div>
        </div>
    )
}
