import "./App.css";
import { AuthProvider } from "./state-management/auth";
import Counter from "./state-management/counter/Counter";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import { TasksProvider } from "./state-management/tasks";
function App() {
  // const [tasks, tasksDispatch] = useReducer(taskReducer, []);
  // const [user, authDispatch] = useReducer(authReducer, "");

  return (
    <AuthProvider>
      <TasksProvider>
        <Counter />
        <NavBar />
        <HomePage />
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
