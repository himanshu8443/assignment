import { IoSearchSharp } from "react-icons/io5";
import { Task } from "../../../interfaces";
import { useAppSelector } from "../../../store/hooks";

const Search = ({
  setUpdatedTasks,
}: {
  setUpdatedTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}) => {
  const tasks: Task[] = useAppSelector((state) => state.tasks.tasks);
  return (
    <div className="flex-1 col-span-3 row-start-2 md:pr-10">
      <form className=" relative md:max-w-xs w-full" autoComplete="off">
        <label htmlFor="search" className="sr-only"></label>
        <input
          type="search"
          id="search"
          placeholder="Search task"
          className="inputStyles w-full"
          onChange={(e) => {
            const search = e.target.value.toLowerCase();
            // filter tasks by title and description
            const filteredTasks = tasks.filter(
              (task) =>
                task.title.toLowerCase().includes(search) ||
                task.description.toLowerCase().includes(search)
            );
            setUpdatedTasks(filteredTasks);
          }}
        />
        <IoSearchSharp className="absolute top-3 right-3 text-slate-500 text-3xl" />
      </form>
    </div>
  );
};

export default Search;
