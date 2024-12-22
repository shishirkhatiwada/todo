"use client";

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { trpc } from '@/lib/utils/trpc-client';
import { validateTaskTitle } from '@/lib/utils/task';

export default function AddTask() {
  const [title, setTitle] = useState('');
  const utils = trpc.useContext();
  
  const addTask = trpc.task.create.useMutation({
    onSuccess: () => {
      setTitle('');
      utils.task.getAll.invalidate();
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateTaskTitle(title)) return;
    addTask.mutate({ title: title.trim() });
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-8">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
      >
        <Plus size={20} />
        Add Task
      </button>
    </form>
  );
}