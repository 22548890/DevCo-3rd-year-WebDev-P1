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
  return (
    <section>
      <header class = "header">
          <NavBar />
        </header>

        <body>
      <section id="Jobs">
        <h1>Amassed income: R1</h1>

        
          <div class="boxes">
            <h2>Job 1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              laboriosam accusantium molestias ut architecto odit consequatur
              quos sit? Ad asperiores, consequatur qui quo maxime unde aut.
              Architecto inventore debitis deleniti?
            </p>
          </div>
          <div class="boxes">
            <h2>Job 2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              laboriosam accusantium molestias ut architecto odit consequatur
              quos sit? Ad asperiores, consequatur qui quo maxime unde aut.
              Architecto inventore debitis deleniti?
            </p>
          </div>
          <div class="boxes">
            <h2>Job 3</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              laboriosam accusantium molestias ut architecto odit consequatur
              quos sit? Ad asperiores, consequatur qui quo maxime unde aut.
              Architecto inventore debitis deleniti?
            </p>
          </div>
       

      
        
      </section>
    </body>
    </section>
    
  );
};

export default JobsDev;
