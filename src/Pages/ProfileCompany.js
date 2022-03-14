import { Link } from "react-router-dom";
import "../App.css";
import NavBar from "../Components/NavBarCompany";

const ProfileCompany = () => {
  return (
    <body>
      <h1>Company</h1>
      <NavBar />
      <section id="Home">
        <div class="boxes">
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            laboriosam accusantium molestias ut architecto odit consequatur quos
            sit? Ad asperiores, consequatur qui quo maxime unde aut. Architecto
            inventore debitis deleniti?
          </p>
        </div>
      </section>
    </body>
  );
};

export default ProfileCompany;
