import axios from "axios";



console.log(URL);
const tasksApi = axios.create({
  baseURL: `https://tasksapi.up.railway.app/tasks/api/v1/tasks`,
});

export const getAllTasks = () => tasksApi.get("/");

export const getTask = (id) => tasksApi.get(`/${id}`);

export const createTask = (task) => tasksApi.post(`/${task}`);

export const updateTask = (id, task) => tasksApi.put(`/${id}/`, task);

export const deleteTask = (id) => tasksApi.delete(`/${id}`);
 