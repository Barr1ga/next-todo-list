import Board from '@/app/components/Board'
import { taskStatus } from './config/taskStatus'
import Filters from './components/Filters'
import SidePanel from './components/SidePanel';
import { format } from "date-fns"
import { HiClock } from 'react-icons/hi';

export default function Home() {
  const workspace = "3206 - Integrative Programming Workspace";

  const tasks = [
    {
      uid: "1",
      title: "Connect Github Account via google meet and my account from your house",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      status: taskStatus.BACKLOG,
      tags: ["1", "2", "3", "4"],
      isPrivate: false,
      date: new Date().toISOString(),
    },
    {
      uid: "2",
      title: "3204 Assignment",
      description: "Deadline on Monday, please study as well",
      status: taskStatus.TODO,
      tags: ["1"],
      isPrivate: false,
      date: new Date().toISOString(),
    },
    {
      uid: "3",
      title: "Capstone Proposal",
      description: "Completed document including all chapters, appendix, SRS",
      status: taskStatus.TODO,
      tags: ["1"],
      isPrivate: true,
      date: new Date().toISOString(),
    },
    {
      uid: "4",
      title: "3205 Reporting - Thursday",
      description: "Report on chapter 2 - Privacy. Refer to the book (`The book of fire`)",
      status: taskStatus.IN_PROGRESS,
      tags: ["2"],
      isPrivate: false,
      date: new Date().toISOString(),
    },
    {
      uid: "5",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      description: "Report on chapter 2 - Privacy. Refer to the book (`The book of fire`)",
      status: taskStatus.DONE,
      tags: ["3"],
      isPrivate: true,
      date: new Date().toISOString(),
    },
    {
      uid: "6",
      title: "3205 Reporting - ThurLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.sday",
      description: "Report on chapter 2 - Privacy. Refer to the book (`The book of fire`)",
      status: taskStatus.CANCELLED,
      tags: ["4"],
      isPrivate: false,
      date: new Date().toISOString(),
    },
  ]

  const backLogTasks = tasks.filter((task) => task.status === taskStatus.BACKLOG);
  const toDoTasks = tasks.filter((task) => task.status === taskStatus.TODO);
  const inProgressTasks = tasks.filter((task) => task.status === taskStatus.IN_PROGRESS);
  const doneTasks = tasks.filter((task) => task.status === taskStatus.DONE);
  const cancelledTasks = tasks.filter((task) => task.status === taskStatus.CANCELLED);

  const dateToday = format(new Date(), "PPpp");

  return (
    <main className="flex min-h-screen bg-background">

      <SidePanel></SidePanel>

      <div className="bg-dark mt-4 rounded-lg pl-2 pt-2 pr-8 flex flex-col gap-8">
        {/* date today */}
        <small className="opacity-40 flex gap-2 items-center"><HiClock></HiClock> {dateToday}</small>

        {/* headers */}
        <div className="flex pt-8 pl-12 flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-semibold">
              Kanban Board
            </h1>
          </div>


          {/* workspace */}
          <div className="flex items-center gap-8">
            <div className="text-sm flex gap-1">
              <span className="opacity-40">Workspace</span>
              <p className="bg-primary/20 px-2 rounded-full text-primary">{workspace}</p>
              <p className="bg-admin/20 px-2 rounded-full text-admin">{"admin-view"}</p>
            </div>

            <Filters></Filters>
          </div>

          <hr className='text-gray/20'></hr>
        </div>


        {/* kanban */}
        <div className="flex gap-8 pl-12 w-full flex-1">
          <Board boardName={"📩 Backlog"} tasks={backLogTasks}></Board>
          <Board boardName={"🎯 Todo"} tasks={toDoTasks}></Board>
          <Board boardName={"🚚 In Progress"} tasks={inProgressTasks}></Board>
          <Board boardName={"✅ Done"} tasks={doneTasks}></Board>
          <Board boardName={"❌ Cancelled"} tasks={cancelledTasks}></Board>
        </div>
      </div>
    </main>
  )
}
