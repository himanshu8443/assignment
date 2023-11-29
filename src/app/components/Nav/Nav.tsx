import { useAppDispatch } from "../../../store/hooks";
import { openModalCreateTask } from "../../../store/Modal.store";
import Search from "./Search";
import { CiSquarePlus } from "react-icons/ci";
import { Task } from "../../../interfaces";

const Nav = ({
  setUpdatedTasks,
}: {
  setUpdatedTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}) => {
  const dispatch = useAppDispatch();
  return (
    <nav className=" w-full bg-Primary-900 text-white flex justify-center items-center">
      <div className="flex justify-between items-center p-4 max-w-[1100px] w-full">
        <div className="w-72">
          <Search setUpdatedTasks={setUpdatedTasks} />
        </div>
        <div className="flex items-center">
          <button
            onClick={() => dispatch(openModalCreateTask())}
            className="bg-white text-black px-4 py-2 rounded-md  items-center gap-2 hidden md:flex"
          >
            <CiSquarePlus className="text-xl" />
            Add Task
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
