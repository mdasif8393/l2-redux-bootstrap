import TaskCard from "@/components/module/tasks/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);

  return (
    <div className="mx-auto max-w-7xl px-5 mt-10">
      <div>
        <h1>Tasks</h1>
      </div>
      <div>
        {tasks.map((task) => (
          <TaskCard task={task} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
