import React from 'react'
import AccountSelector from './AccountSelector'
import TagsList from './TagsList'

export default function SidePanel() {
    return (
        <div className="pt-4 pl-8 pr-8 flex flex-col gap-8">
            <div className="text-2xl font-bold">
                Next Kanban
            </div>

            <AccountSelector></AccountSelector>

            <TagsList></TagsList>
        </div>
    )
}
