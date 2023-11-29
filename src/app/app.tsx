import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { Task } from "../interfaces";
import Modal from "./components/Modal/Modal";
import TaskItem from "./components/TaskList/TaskItem";
import { FiGrid } from "react-icons/fi";
import { FaList } from "react-icons/fa";
import Nav from "./components/Nav/Nav";
import { openModalCreateTask } from "../store/Modal.store";
import Sort from "./components/Sort";

const app = () => {
  const dispatch = useAppDispatch();
  const tasks: Task[] = useAppSelector((state) => state.tasks.tasks);
  const [updatedTasks, setUpdatedTasks] = useState<Task[]>(tasks);

  const [isListInView1, setIsListInView1] = useState(false);

  useEffect(() => {
    setUpdatedTasks(tasks);
  }, [tasks]);

  return (
    <>
      <Nav setUpdatedTasks={setUpdatedTasks} />
      <Modal tasks={tasks} />
      <div className="flex justify-between items-center">
        <h1 className="font-medium my-5 text-center sm:text-left sm:my-8 md:text-2xl text-lg dark:text-slate-200 ml-5">
          Tasks ({updatedTasks.length})
        </h1>
        <Sort setUpdatedTasks={setUpdatedTasks} />
        <div className="flex items-center gap-2 mr-5">
          <button
            onClick={() => setIsListInView1(!isListInView1)}
            className="bg-white text-black px-4 py-2 rounded-md"
          >
            {isListInView1 ? (
              <FaList className="text-xl" />
            ) : (
              <FiGrid className="text-xl" />
            )}
          </button>
        </div>
      </div>
      <div className=" px-3  w-full">
        <ul
          className={`tasksList mt-4 grid gap-2 sm:gap-4 xl:gap-6 ${
            isListInView1
              ? "grid-cols-1"
              : "2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 items-end"
          }`}
        >
          {updatedTasks.map((task) => (
            <TaskItem key={task.id} isListInView1={isListInView1} task={task} />
          ))}
          <li>
            <button
              onClick={() => dispatch(openModalCreateTask())}
              className={`border-2 border-slate-300
             text-slate-400 w-full rounded-lg
              border-dashed transition hover:bg-slate-300
               hover:text-slate-500
               dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-300 ${
                 isListInView1 ? "h-20 sm:h-32" : "h-52 sm:h-64"
               }`}
            >
              Add new task
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default app;
