import Image from 'next/image'
import styles from './page.module.css'
import { useState } from "react"

import Board from '@/app/components/Board'
import { taskStatus } from './config/taskStatus'
import Filters from './components/Filters'

export default function Home() {
  const workspace = "3206 - Integrative Programming Workspace";

  const users = [
    {
      uid: "1",
      username: "Horeb",
      token: "1",
      userType: "guest",
    },
    {
      uid: "1",
      username: "Horeb",
      token: "2",
      userType: "Administrator",
    },
    {
      uid: "1",
      username: "Horeb",
      token: "3",
      userType: "master",
    }
  ]

  const tasks = [
    {
      uid: "1",
      title: "Connect Github Account via google meet and my account from your house",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      status: taskStatus.BACKLOG,
      tags: ["1", "2"],
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

  return (
    <main className="bg-background pt-24 pl-24 pr-24 min-h-screen flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-semibold">
            Kanban Board
          </h1>

          {/* accounts */}
          <div className="flex gap-3 items-center border border-gray/20 rounded-full pt-1 pr-8 pb-1 pl-2 hover:bg-gray/10 ease-out duration-200 cursor-pointer">
            <div className="bg-primary h-[30px] w-[30px] rounded-full text-[#fff] flex items-center justify-center">{"H"}</div>
            <div className="flex flex-col gap-0">
              <h5 className='text-sm font-semibold'>{"Barriga, Horeb"}</h5>
              <small className="opacity-40 text-xs">{"Administrator"}</small>
            </div>
          </div>
        </div>

        {/* workspace */}
        <div className="flex items-center gap-8">
          <div className="text-sm flex gap-4">
            <span className="opacity-40">Workspace</span>
            <p className="bg-primary/20 px-2 rounded-full text-primary">{workspace}</p>
            <p className="bg-admin/20 px-2 rounded-full text-admin">{"admin-view"}</p>
          </div>

          <Filters></Filters>
        </div>

        <hr className='text-gray/20'></hr>
      </div>


      {/* kanban */}
      <div className="flex gap-8 w-full flex-1">
        <Board boardName={"📩 Backlog"} tasks={backLogTasks}></Board>
        <Board boardName={"🎯 Todo"} tasks={toDoTasks}></Board>
        <Board boardName={"🚚 In Progress"} tasks={inProgressTasks}></Board>
        <Board boardName={"✅ Done"} tasks={doneTasks}></Board>
        <Board boardName={"❌ Cancelled"} tasks={cancelledTasks}></Board>
      </div>
    </main>
  )
}
