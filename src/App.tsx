import { useReducer } from "react";
import "./App.css";
import LoginStatus from "./state-management/LoginStatus";
import authReducer from "./state-management/reducers/authReducer";
import AuthContext from "./state-management/contexts/authContext";
import TaskContext from "./state-management/contexts/tasksContext";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import taskReducer from "./state-management/reducers/tasksReducer";
import AuthProvider from "./state-management/AuthProvider";

function App() {
  const [tasks, tasksDispatch] = useReducer(taskReducer, []);
  // const [user, authDispatch] = useReducer(authReducer, "");

  return (
    <AuthProvider>
      <TaskContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
        <NavBar />
        <HomePage />
      </TaskContext.Provider>
    </AuthProvider>
  );
}

export default App;
