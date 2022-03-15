import { Link } from "react-router-dom";
import "../App.css";
import NavBar from "../Components/NavBar";

const JobsDev = () => {
  const colourOptions = [
    {
      name: "jobs",
      color: "#f13e3e",
    },
  ];
  // this.classList.add("active");
  const { color } = colourOptions.find((item) => item.name === "jobs");
  document.querySelector("body").style.background = color;

  // const style = window.getComputedStyle(this);
  // const hoverColor = style.getPropertyValue("--hover-c");
  // if the two don't match, update the custom property to show the hue with the text and the semi transparent background

  return (
    <section>
      <header class="header">
        <div class="profile-menu">
          <p>
            <button>Edit Profile</button>
            <button>Preview</button>
          </p>
        </div>
        <NavBar />
      </header>

      <section class="content">
        <h1>Amassed income: R1</h1>

        <div class="boxes">
          <h2>Job 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            laboriosam accusantium molestias ut architecto odit consequatur quos
            sit? Ad asperiores, consequatur qui quo maxime unde aut. Architecto
            inventore debitis deleniti?
          </p>
        </div>
        <div class="boxes">
          <h2>Job 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            laboriosam accusantium molestias ut architecto odit consequatur quos
            sit? Ad asperiores, consequatur qui quo maxime unde aut. Architecto
            inventore debitis deleniti?
          </p>
        </div>
        <div class="boxes">
          <h2>Job 3</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            laboriosam accusantium molestias ut architecto odit consequatur quos
            sit? Ad asperiores, consequatur qui quo maxime unde aut. Architecto
            inventore debitis deleniti?
          </p>
        </div>
      </section>
    </section>
  );
};

export default JobsDev;
