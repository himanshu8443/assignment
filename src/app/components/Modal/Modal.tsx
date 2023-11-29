import { Task } from "src/interfaces";
import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import {
  closeModalCreateTask,
  setIsEditTask,
} from "../../../store/Modal.store";
import { addTask, editTask } from "../../../store/Tasks.store";
import { nanoid } from "nanoid";
const Modal = ({ tasks }: { tasks: Task[] }) => {
  const showModal = useAppSelector((state) => state.modal.modalCreateTaskOpen);
  const isEditTask = useAppSelector((state) => state.modal.isEditTask);
  const dispatch = useAppDispatch();

  const [formState, setFormState] = useState<Task>({
    id: "",
    title: "",
    description: "",
    date: "",
    tag: "Important",
    completed: false,
  });
  useEffect(() => {
    if (isEditTask) {
      setFormState(tasks.find((task) => task.id === isEditTask)!);
    }
  }, [isEditTask]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("formState: ", formState);
    if (isEditTask) {
      dispatch(
        editTask({
          ...formState,
        })
      );
      dispatch(closeModalCreateTask());
      dispatch(setIsEditTask(false));
      setFormState({
        id: "",
        title: "",
        description: "",
        date: "",
        tag: "Important",
        completed: false,
      });
      return;
    }
    setFormState((prevState) => ({ ...prevState, id: nanoid() }));
    dispatch(
      addTask({
        ...formState,
        id: nanoid(),
      })
    );
    dispatch(closeModalCreateTask());
  };
  return (
    showModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
        <section className="relative bg-slate-200 max-w-lg w-full rounded-lg p-3 sm:p-5 flex flex-col justify-start dark:bg-slate-900">
          <button
            aria-label="close alert"
            className="absolute right-3 sm:right-4"
            onClick={() => {
              dispatch(closeModalCreateTask());
              dispatch(setIsEditTask(false));
            }}
          >
            X
          </button>
          <h2 className="font-medium mb-5 text-lg md:text-2xl">Add Task</h2>
          <form
            className="flex flex-col stylesInputsField"
            onSubmit={handleSubmit}
          >
            <label>
              Title
              <input
                type="text"
                placeholder="e.g, study for the test"
                required
                value={formState.title}
                onChange={({ target }) =>
                  setFormState({ ...formState, title: target.value })
                }
                className="w-full"
              />
            </label>
            <label>
              Date
              <input
                type="date"
                className="w-full"
                value={formState.date}
                required
                onChange={({ target }) =>
                  setFormState({ ...formState, date: target.value })
                }
                min={new Date().toISOString().split("T")[0]}
              />
            </label>
            <label>
              Description (optional)
              <textarea
                placeholder="e.g, study for the test"
                className="w-full"
                value={formState.description}
                onChange={({ target }) =>
                  setFormState({ ...formState, description: target.value })
                }
              ></textarea>
            </label>
            <label>
              Select a Tag
              <select
                className="block w-full"
                value={formState.tag}
                onChange={({ target }) =>
                  setFormState({ ...formState, tag: target.value })
                }
              >
                {["Important", "Home", "Work", "Reminder"].map(
                  (dir: string) => (
                    <option
                      key={dir}
                      value={dir}
                      className="bg-slate-100 dark:bg-slate-800"
                    >
                      {dir}
                    </option>
                  )
                )}
              </select>
            </label>
            <button type="submit" className="btn mt-5">
              {isEditTask ? "Edit Task" : "Add Task"}
            </button>
          </form>
        </section>
      </div>
    )
  );
};

export default Modal;
