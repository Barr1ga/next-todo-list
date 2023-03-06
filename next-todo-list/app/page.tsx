"use client";

import { useQuery } from "@/convex/_generated/react";
import Board from '@/app/components/Board'
import { taskStatus } from './config/taskStatus'
import Filters from './components/Filters'
import SidePanel from './components/SidePanel';
import { format } from "date-fns"
import { HiClock } from 'react-icons/hi';
import useStore from "./(store)/store";
import { Tag, Task } from "./config/interfaceTypes";
import { GenericId } from "convex/values";
import { ChangeEvent } from "react";

export default function App() {
  const workspace = "3206 - Integrative Programming Workspace";
  const tasks = useQuery("tasks/getTasks") || [];
  const tags = useQuery("tags/getTags") || [];

  const { signedInUser, searchFilter, updateSearchFilter, tagFilter, selectedTagFilter, orderFilter } = useStore();

  const selectedTagFilterTasks: GenericId<string>[] | undefined = tagFilter && selectedTagFilter !== undefined ? tags.find((tag: Tag) => tag._id.id === selectedTagFilter.id).tasks : undefined;
  const filteredTasks = tagFilter && selectedTagFilterTasks ? tasks.filter((task: Task) => selectedTagFilterTasks.some((tagUid: GenericId<string>) => tagUid.id === task._id.id)) : tasks;
  const orderedTasks = orderFilter === "None" ? filteredTasks :
    orderFilter === "Ascending" ? filteredTasks.sort((a: Task, b: Task) => a.title.localeCompare(b.title))
      : filteredTasks.sort((a: Task, b: Task) => b.title.localeCompare(a.title));
  const searchedFilter = orderedTasks.filter((task: Task) => task.title.includes(searchFilter));

  const backLogTasks = searchedFilter.filter((task: Task) => task.status === taskStatus.BACKLOG);
  const toDoTasks = searchedFilter.filter((task: Task) => task.status === taskStatus.TODO);
  const inProgressTasks = searchedFilter.filter((task: Task) => task.status === taskStatus.IN_PROGRESS);
  const doneTasks = searchedFilter.filter((task: Task) => task.status === taskStatus.DONE);
  const cancelledTasks = searchedFilter.filter((task: Task) => task.status === taskStatus.CANCELLED);

  const dateToday = format(new Date(), "PPpp");

  return (
    <main className="flex min-h-screen bg-background">

      <SidePanel></SidePanel>

      <div className="bg-dark mt-4 w-full rounded-lg pl-2 pt-2 pr-8 flex flex-col gap-8">
        {/* date today */}
        <small className="opacity-40 flex gap-2 items-center">
          <div className="bg-primary h-[15px] w-[15px] rounded-full text-[#fff] pt-[2px] pl-[1px] flex items-center justify-center text-[7px] align-middle">
            H
          </div>
          <HiClock></HiClock>
          {dateToday}
        </small>
        
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
              <p className="bg-primary/20 px-2 rounded-full text-[#9470ff]">{workspace}</p>

              {/* view mode */}
              {signedInUser?.userType === "Administrator" && <p className="bg-admin/20 px-2 rounded-full text-admin">{"admin-view"}</p>}
              {signedInUser?.userType === "Collaborator" && <p className="bg-collaborator/20 px-2 rounded-full text-collaborator">{"collaborator-view"}</p>}
              {signedInUser?.userType === "Guest" && <p className="bg-guest px-2 rounded-full text-gray">{"guest-view"}</p>}
            </div>

            <Filters></Filters>
          </div>

          {/* <hr className='text-gray/10'></hr> */}

          <input onChange={(e: ChangeEvent<HTMLInputElement>) => updateSearchFilter(e.target.value)} placeholder="Search task" className='bg-background min-h-[44px] w-full py-2 px-4 rounded outline-none focus:shadow-xl focus:shadow-[#000]/30 ease-out duration-200 resize-none text-sm placeholder:text-[#fff]/40'></input>
        </div>


        {/* kanban */}
        <div className="flex gap-8 pl-12">
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
