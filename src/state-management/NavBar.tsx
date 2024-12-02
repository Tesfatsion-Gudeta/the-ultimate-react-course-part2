import { useContext } from "react";
import LoginStatus from "./auth/LoginStatus";
import TaskContext from "./tasks/tasksContext";
import useCounterStore from "./counter/store";

const NavBar = () => {
  const { tasks } = useContext(TaskContext);
  const counter = useCounterStore((s) => s.counter); //preventing unnecessary renders using selectors
  console.log("render navbar"); //will only render if the counter changes
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <span className="badge text-bg-primary">{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
