import "../App.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <header class="homePage">
      <nav>
        <NavLink to={"/profiledev"}>
          <h1> User </h1>
        </NavLink>
        <NavLink to={"/profilecompany"}>
          <h1> Company </h1>
        </NavLink>
      </nav>
    </header>
  );
};

export default Home;
