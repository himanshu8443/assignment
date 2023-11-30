import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../src/app/app";
import React from "react";
import { Provider } from "react-redux";
import store from "../src/store";

test("should add task", () => {
  const task = {
    id: "34g",
    title: "Complete weekly report",
    description: "Gather all necessary data and finalize the report by Friday.",
    completed: false,
    tag: "Work",
    date: "2044-10-04",
  };

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const taskTitleElement = screen.getByTestId("add-task-button");
  expect(taskTitleElement).toBeInTheDocument();
  fireEvent.click(taskTitleElement);
  const modalElement = screen.getByText("Add New Task");
  expect(modalElement).toBeInTheDocument();
  const titleInput = screen.getByTestId("title-input");
  const descriptionInput = screen.getByTestId("description-input");
  const tagInput = screen.getByTestId("tag-input");
  const dateInput = screen.getByTestId("date-input");
  const submitButton = screen.getByTestId("submit");
  fireEvent.change(titleInput, { target: { value: task.title } });
  expect(titleInput).toHaveValue(task.title);
  fireEvent.change(descriptionInput, { target: { value: task.description } });
  expect(descriptionInput).toHaveValue(task.description);
  fireEvent.change(tagInput, { target: { value: task.tag } });
  expect(tagInput).toHaveValue(task.tag);
  fireEvent.change(dateInput, { target: { value: task.date } });
  expect(dateInput).toHaveValue(task.date);
  fireEvent.click(submitButton);
  const taskTitle = screen.getByText(task.title);
  expect(taskTitle).toBeInTheDocument();
  const taskDescription = screen.getByText(task.description);
  expect(taskDescription).toBeInTheDocument();
});
