import { createSlice } from "@reduxjs/toolkit";
import { Task } from "src/interfaces";

type TasksState = {
  tasks: Task[];
};
const initialState: TasksState = {
  tasks: localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks")!)
    : [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push(action.payload);
      const tasks = JSON.stringify(state.tasks);
      localStorage.setItem("tasks", tasks);
    },
    removeTask(state, action) {
      const newstate = state.tasks.filter((task) => task.id !== action.payload);
      state.tasks = newstate;
      const tasks = JSON.stringify(state.tasks);
      localStorage.setItem("tasks", tasks);
    },
    toggleTask(state, action) {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    editTask(state, action) {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) {
        task.title = action.payload.title;
        task.description = action.payload.description;
        task.date = action.payload.date;
        task.tag = action.payload.tag;
      }
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});

export const tasksActions = tasksSlice.reducer;
export const { addTask, removeTask, toggleTask, editTask } = tasksSlice.actions;
