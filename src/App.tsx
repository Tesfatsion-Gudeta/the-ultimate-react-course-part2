import "./App.css";
import Counter from "./state-management/counter/Counter";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import { TasksProvider } from "./state-management/tasks";
function App() {
  // const [tasks, tasksDispatch] = useReducer(taskReducer, []);
  // const [user, authDispatch] = useReducer(authReducer, "");

  return (
    <TasksProvider>
      <Counter />
      <NavBar />
      <HomePage />
    </TasksProvider>
  );
}

export default App;
