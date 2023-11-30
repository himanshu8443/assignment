import { Task } from "../..//interfaces";
import { useState, useEffect } from "react";
import { useAppSelector } from "../../store/hooks";

const Sort = ({
  setUpdatedTasks,
}: {
  setUpdatedTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}) => {
  const tasks: Task[] = useAppSelector((state) => state.tasks.tasks);
  const [sortType, setSortType] = useState("default");

  useEffect(() => {
    if (sortType === "Date asc") {
      const sortedTasks = [...tasks].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
      setUpdatedTasks(sortedTasks);
    }
    if (sortType === "Date desc") {
      const sortedTasks = [...tasks].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      setUpdatedTasks(sortedTasks);
    }
    if (sortType === "Title asc") {
      const sortedTasks = [...tasks].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setUpdatedTasks(sortedTasks);
    }
    if (sortType === "Title desc") {
      const sortedTasks = [...tasks].sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      setUpdatedTasks(sortedTasks);
    }
  }, [sortType]);
  return (
    <div>
      <select
        className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-md"
        onChange={(e) => setSortType(e.target.value)}
      >
        <option value="default" disabled hidden>
          Sort by
        </option>
        <option value="Date asc">Date asc</option>
        <option value="Date desc">Date desc</option>
        <option value="Title asc">Title asc</option>
        <option value="Title desc">Title desc</option>
      </select>
    </div>
  );
};

export default Sort;
