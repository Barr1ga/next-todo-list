import { useQuery } from '@/convex/_generated/react';
import { GenericId } from 'convex/values';
import React from 'react'
import useStore from '../(store)/store';
import { Tag, Task } from '../config/interfaceTypes';
import { taskStatus } from '../config/taskStatus';
import Board from './Board';

export default function Tasks() {
    const { signedInUser, searchFilter, tagFilter, selectedTagFilter, orderFilter } = useStore();
    const tasks = useQuery("tasks/getTasks", signedInUser) || [];
    const tags = useQuery("tags/getTags", signedInUser) || [];

    const selectedTagFilterTasks: GenericId<string>[] | undefined = tagFilter && selectedTagFilter !== undefined ? tags?.find((tag: Tag) => tag._id.id === selectedTagFilter.id).tasks : undefined;
    const filteredTasks = tasks && tagFilter && selectedTagFilterTasks ? tasks.filter((task: Task) => selectedTagFilterTasks.some((tagUid: GenericId<string>) => tagUid.id === task._id.id)) : tasks;
    const orderedTasks = filteredTasks && orderFilter === "None" ? filteredTasks :
        orderFilter === "Ascending" ? filteredTasks?.sort((a: Task, b: Task) => a.title.localeCompare(b.title))
            : filteredTasks?.sort((a: Task, b: Task) => b.title.localeCompare(a.title));
    const searchedFilter = orderedTasks?.filter((task: Task) => task.title.includes(searchFilter));

    const backLogTasks = searchedFilter ? searchedFilter.filter((task: Task) => task.status === taskStatus.BACKLOG) : [];
    const toDoTasks = searchedFilter ? searchedFilter.filter((task: Task) => task.status === taskStatus.TODO) : [];
    const inProgressTasks = searchedFilter ? searchedFilter.filter((task: Task) => task.status === taskStatus.IN_PROGRESS) : [];
    const doneTasks = searchedFilter ? searchedFilter.filter((task: Task) => task.status === taskStatus.DONE) : [];
    const cancelledTasks = searchedFilter ? searchedFilter.filter((task: Task) => task.status === taskStatus.CANCELLED) : [];

    return (
        <div className="flex gap-8 pl-12">
            <Board boardName={"📩 Backlog"} tasks={backLogTasks}></Board>
            <Board boardName={"🎯 Todo"} tasks={toDoTasks}></Board>
            <Board boardName={"🚚 In Progress"} tasks={inProgressTasks}></Board>
            <Board boardName={"✅ Done"} tasks={doneTasks}></Board>
            <Board boardName={"❌ Cancelled"} tasks={cancelledTasks}></Board>
        </div>
    )
}
