import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TaskItem from "../src/app/components/TaskList/TaskItem";
import React from "react";
import { Provider } from "react-redux";
import store from "../src/store";

test("should render the task", () => {
  const task = {
    id: "34g",
    title: "Complete weekly report",
    description: "Gather all necessary data and finalize the report by Friday.",
    completed: false,
    tag: "work",
    date: new Date().toISOString(),
  };

  render(
    <Provider store={store}>
      <TaskItem task={task} isListInView1={false} />
    </Provider>
  );

  const taskTitleElement = screen.getByText(task.title);
  const taskDescriptionElement = screen.getByText(task.description);
  const taskTagElement = screen.getByText(task.tag);

  expect(taskTitleElement).toBeInTheDocument();
  expect(taskDescriptionElement).toBeInTheDocument();
  expect(taskTagElement).toBeInTheDocument();
});
