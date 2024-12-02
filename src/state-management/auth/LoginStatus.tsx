import useAuthStore from "./store";

const LoginStatus = () => {
  // const [user, setUser] = useState('');
  // const [user, dispatch] = useReducer(authReducer, "");
  // const { user, dispatch } = useContext(AuthContext);
  // const { user, dispatch } = useAuth();      //replace this implementation with zustand

  const { user, login, logout } = useAuthStore();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          {/* <a onClick={() => dispatch({ type: "LOGOUT" })} href="#"> */}
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      {/* <a
        onClick={() => dispatch({ type: "LOGIN", username: "mosh.hamedani" })}
        href="#"
      > */}
      <a onClick={() => login("Tesfa.G")} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
