import axios from "axios";
import type { Task, CreateTaskData, UpdateTaskData } from "../types/task";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const getTasks = async () => {
  const { data } = await axios.get<Task[]>("/tasks");
  return data;
};

export const createTasks = async (newData: CreateTaskData) => {
  const { data } = await axios.post<Task>("/tasks", newData);
  return data;
};

export const deleteTasks = async (id: Task["id"]) => {
  await axios.delete<Task>(`/tasks/${id}`);
};

export const updateTask = async (id: Task["id"], data: UpdateTaskData) => {
  const res = await axios.put<Task>(`/tasks/${id}`, data);
  return res.data;
};
