import "../App.css";
import NavBar from "../Components/NavBar";
const ContactDev = () => {
  const colourOptions = [
    {
      name: "contact",
      color: "#713faa",
    },
  ];
  const { color } = colourOptions.find((item) => item.name === "contact");
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
        <NavBar />
      </header>

      <section class="content">
        <div class="boxes">
          <h2>Number: 0730009156</h2>
          <h2>Email: Ansar@gmail.com</h2>
          <h2>Website: www.deeznutz.com</h2>
        </div>
        <div class="boxes">
          <h2>References</h2>
          <p>
            Reference: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Earum, eos.
          </p>
          <p>
            Reference: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Earum, eos.
          </p>
          <p>
            Reference: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Earum, eos.
          </p>
        </div>
      </section>
    </section>
  );
};

export default ContactDev;
