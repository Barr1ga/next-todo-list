import Image from 'next/image'
import styles from './page.module.css'
import { useState } from "react"

import Board from '@/app/components/Board'
import { taskStatus } from './config/taskStatus'

export default function Home() {
  const users = [
    {
      uid: "1",
      username: "Horeb",
      token: "1",
      userType: "guest",
      workspace: "usc",
    },
    {
      uid: "1",
      username: "Horeb",
      token: "2",
      userType: "master",
      workspace: "usc",
    },
    {
      uid: "1",
      username: "Horeb",
      token: "3",
      userType: "master",
      workspace: "usc",
    }
  ]

  const tasks = [
    {
      title: "Connect Github Account",
      description: "Lorem ipsum dolor sit amit consectetur",
      status: taskStatus.BACKLOG,
      tags: [{
        name: "School",
        color: "color1",
      },
      {
        name: "BSIT",
        color: "color1",
      }],
      date: "Jan 02-23-2023",
    },
    {
      title: "3204 Assignment",
      description: "Deadline on Monday, please study as well",
      status: taskStatus.TODO,
      tags: [{
        name: "School",
        color: "color2",
      }],
      date: "Jan 02-23-2023",
    },
    {
      title: "Capstone Proposal",
      description: "Completed document including all chapters, appendix, SRS",
      status: taskStatus.TODO,
      tags: [{
        name: "School",
        color: "color3",
      }],
      date: "Jan 02-23-2023",
    },
    {
      title: "3205 Reporting - Thursday",
      description: "Report on chapter 2 - Privacy. Refer to the book (`The book of fire`)",
      status: taskStatus.IN_PROGRESS,
      tags: [{
        name: "School",
        color: "color4",
      }],
      date: "Jan 02-23-2023",
    },
    {
      title: "3205 Reporting - Thursday",
      description: "Report on chapter 2 - Privacy. Refer to the book (`The book of fire`)",
      status: taskStatus.DONE,
      tags: [{
        name: "Cousin",
        color: "color5",
      },
      {
        name: "Family",
        color: "color5",
      },
      {
        name: "Grandkids",
        color: "color5",
      }],
      date: "Jan 02-23-2023",
    },
    {
      title: "3205 Reporting - Thursday",
      description: "Report on chapter 2 - Privacy. Refer to the book (`The book of fire`)",
      status: taskStatus.CANCELLED,
      tags: [{
        name: "School",
        color: "color6",
      }],
      date: "Jan 02-23-2023",
    },
  ]

  const backLogTasks = tasks.filter((task) => task.status === taskStatus.BACKLOG);
  const toDoTasks = tasks.filter((task) => task.status === taskStatus.TODO);
  const inProgressTasks = tasks.filter((task) => task.status === taskStatus.IN_PROGRESS);
  const doneTasks = tasks.filter((task) => task.status === taskStatus.DONE);
  const cancelledTasks = tasks.filter((task) => task.status === taskStatus.CANCELLED);

  console.log(backLogTasks)
  return (
    <main className="bg-[#121216] p-24 min-h-screen flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-4xl font-semibold">Welcome back, {users[0].username}!</h1>
        <h2 className="text-xl">Workspace - {users[0].workspace}</h2>
      </div>

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
