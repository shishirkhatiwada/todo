import { useState } from 'react';
import { Trash2, Check, X } from 'lucide-react';
import { Task } from '@prisma/client';
import { trpc } from '../utils/trpc';

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  const utils = trpc.useContext();
  const toggleTask = trpc.task.toggle.useMutation({
    onSuccess: () => {
      utils.task.getAll.invalidate();
    },
  });
  const deleteTask = trpc.task.delete.useMutation({
    onSuccess: () => {
      utils.task.getAll.invalidate();
    },
  });

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow mb-2">
      <div className="flex items-center space-x-3">
        <button
          onClick={() => toggleTask.mutate({ id: task.id, completed: !task.completed })}
          className={`p-2 rounded-full transition-colors ${
            task.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
          }`}
        >
          {task.completed ? <Check size={18} /> : <X size={18} />}
        </button>
        <span className={`${task.completed ? 'line-through text-gray-400' : ''}`}>
          {task.title}
        </span>
      </div>
      <button
        onClick={() => deleteTask.mutate({ id: task.id })}
        className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}