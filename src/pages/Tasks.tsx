import TaskCard from "@/components/module/tasks/TaskCard";
import AddTaskModal from "@/redux/features/task/AddTaskModal";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);

  return (
    <div className="mx-auto max-w-7xl px-5 mt-10">
      <div className="flex justify-between items-center mb-2">
        <h1>Tasks</h1>
        <AddTaskModal />
      </div>
      <div>
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
