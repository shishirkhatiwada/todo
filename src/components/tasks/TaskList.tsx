"use client";

import { trpc } from '@/lib/utils/trpc-client';
import TaskItem from './TaskItem';
import { sortTasksByDate } from '@/lib/utils/task';

export default function TaskList() {
  const { data: tasks, isLoading } = trpc.task.getAll.useQuery();

  if (isLoading) {
    return <div className="text-center">Loading tasks...</div>;
  }

  if (!tasks?.length) {
    return <div className="text-center text-gray-500">No tasks yet. Add one above!</div>;
  }

  const sortedTasks = sortTasksByDate(tasks);

  return (
    <div className="space-y-2">
      {sortedTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}