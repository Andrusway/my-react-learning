import css from "./TaskForm.module.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTasks } from "../../services/taskService";
import type { CreateTaskData } from "../../types/task";

interface TaskFormProps {
  onSuccess: () => void;
}

export default function TaskForm({ onSuccess }: TaskFormProps) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: CreateTaskData) => createTasks(data),
  });

  const handleSubmit = (data: FormData) => {
    mutate(
      {
        text: data.get("text") as string,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["tasks"] });
          onSuccess();
        },
        onError: (err) => {
          alert(`Error: ${err}`);
        },
      }
    );
  };

  return (
    <form className={css.form} action={handleSubmit}>
      <label className={css.label}>
        Task text
        <textarea name="text" className={css.input} rows={5}></textarea>
      </label>

      <button type="submit" className={css.button} disabled={isPending}>
        {isPending ? "Creating..." : "Create task"}
      </button>
    </form>
  );
}
