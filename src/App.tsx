import { useReducer } from "react";
import "./App.css";
import LoginStatus from "./state-management/LoginStatus";
import authReducer from "./state-management/reducers/authReducer";
import AuthContext from "./state-management/contexts/authContext";
import TaskContext from "./state-management/contexts/tasksContext";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import taskReducer from "./state-management/reducers/tasksReducer";

function App() {
  const [tasks, tasksDispatch] = useReducer(taskReducer, []);
  const [user, authDispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
      <TaskContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
        <NavBar />
        <HomePage />
      </TaskContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
