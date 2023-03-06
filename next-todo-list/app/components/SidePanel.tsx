import useStore from '../(store)/store'
import AccountSelector from './AccountSelector'
import TagsList from './TagsList'

export default function SidePanel() {
    const { signedInUser } = useStore();
    
    return (
        <div className="py-4 pl-8 pr-2 flex flex-col gap-8">
            <div className="text-2xl font-bold">
                <span className='font-bold'>Next </span>
                <span className='font-light opacity-40'>Kanban.</span>
            </div>

            <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-4'>
                    <hr className='opacity-10'></hr>
                    <AccountSelector></AccountSelector>
                </div>
                {signedInUser && <div className='flex flex-col gap-4'>
                    <hr className='opacity-10'></hr>
                    <TagsList></TagsList>
                </div>}
            </div>
        </div>
    )
}
