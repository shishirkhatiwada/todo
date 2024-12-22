import { trpc } from '../utils/trpc';
import TaskItem from './TaskItem';

export default function TaskList() {
  const { data: tasks, isLoading } = trpc.task.getAll.useQuery();

  if (isLoading) {
    return <div className="text-center">Loading tasks...</div>;
  }

  if (!tasks?.length) {
    return <div className="text-center text-gray-500">No tasks yet. Add one above!</div>;
  }

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}