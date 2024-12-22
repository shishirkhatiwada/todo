import { Task } from '@prisma/client';

export const sortTasksByDate = (tasks: Task[]): Task[] => {
  return [...tasks].sort((a, b) => 
    b.createdAt.getTime() - a.createdAt.getTime()
  );
};

export const validateTaskTitle = (title: string): boolean => {
  return title.trim().length > 0;
};