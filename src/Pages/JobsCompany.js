import "../App.css";
import NavBarCompany from "../Components/NavBarCompany";

const JobsCompany = () => {
  const colourOptions = [
    {
      name: "jobs",
      color: "#f13e3e",
    },
  ];

  const { color } = colourOptions.find((item) => item.name === "jobs");
  document.querySelector("body").style.background = color;
  return (
    <section>
      <header class="header">
        <div class="profile-menu">
          <p>
            <button>Edit Profile</button>
            <button>Preview</button>
          </p>
        </div>
        <NavBarCompany />
      </header>

      <section class="content">
        <h1>Expenses: R2</h1>

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

export default JobsCompany;
