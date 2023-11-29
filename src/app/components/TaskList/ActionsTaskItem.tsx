import React from "react";
import { Task } from "../../../interfaces";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useAppDispatch } from "../../../store/hooks";
import { removeTask, toggleTask } from "../../../store/Tasks.store";
import { openModalCreateTask, setIsEditTask } from "../../../store/Modal.store";

const ActionsTaskItem: React.FC<{ task: Task; isListInView1: boolean }> = ({
  task,
  isListInView1,
}) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div
        className={`flex border-dashed border-slate-200 dark:border-slate-700/[.3] ${
          isListInView1 ? "items-center" : "border-t-2 w-full pt-4 md:mt-4"
        }`}
      >
        <div className="flex-1">
          <button onClick={() => dispatch(toggleTask(task.id))}>
            {task.completed ? (
              <span
                className="text-black p-2 md:p-3 bg-green-500 rounded-full text-xs md:text-xl "
                title="Mark as pending"
              >
                Completed
              </span>
            ) : (
              <span
                className="text-black p-2 md:p-3 bg-yellow-500 rounded-full text-xs md:text-xl"
                title="Mark as completed"
              >
                Pending
              </span>
            )}
          </button>
        </div>
        <button className=" mr-2" onClick={() => dispatch(removeTask(task.id))}>
          <MdDelete className="text-3xl text-red-500" />
        </button>
        <button
          className=" mr-2"
          onClick={() => {
            dispatch(setIsEditTask(task.id));
            dispatch(openModalCreateTask());
          }}
        >
          <FaEdit className="text-2xl text-slate-200" />
        </button>
      </div>
    </>
  );
};

export default ActionsTaskItem;
