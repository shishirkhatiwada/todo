import AddTask from "@/components/tasks/AddTask";
import TaskList from "@/components/tasks/TaskList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto max-w-2xl px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Todo List</h1>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <AddTask />
          <TaskList />
        </div>
      </div>
    </main>
  );
}