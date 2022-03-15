import "../App.css";
import NavBarCompany from "../Components/NavBarCompany";

const ProfileCompany = () => {
  const colourOptions = [
    {
      name: "profile",
      color: "#3dbbd1",
    },
  ];
  const { color } = colourOptions.find((item) => item.name === "profile");
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
    </section>
  );
};
export default ProfileCompany;
