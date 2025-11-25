import css from "./TaskList.module.css";
import { deleteTasks, updateTask } from "../../services/taskService";
import type { Task, UpdateTaskData } from "../../types/task";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  const queryClient = useQueryClient();

  const { mutate: deleteTaskM, isPending } = useMutation({
    mutationFn: (id: Task["id"]) => deleteTasks(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      alert("Task deleted successfully");
    },
    onError: () => {
      alert("Failed to delete task");
    },
  });
  const { mutate: updateTaskM } = useMutation({
    mutationFn: ([id, data]: [Task["id"], UpdateTaskData]) =>
      updateTask(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li key={task.id} className={css.item}>
          <input
            type="checkbox"
            defaultChecked={task.completed}
            onChange={() =>
              updateTaskM([task.id, { completed: !task.completed }])
            }
            className={css.checkbox}
          />
          <span className={css.text}>{task.text}</span>
          <button
            type="button"
            className={css.button}
            disabled={isPending}
            onClick={() => deleteTaskM(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
