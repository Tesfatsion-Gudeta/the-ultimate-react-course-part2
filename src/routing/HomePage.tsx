import { Link } from "react-router-dom";

const HomePage = () => {
  // throw new Error("something failed");
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
        mollitia!
      </p>
      {/* <a href="/users">Users</a> */}
      <Link to="/users">Users</Link>
    </>
  );
};

export default HomePage;
