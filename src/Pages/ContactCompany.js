import "../App.css";
import NavBarCompany from "../Components/NavBarCompany";

const ContactCompany = () => {
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
        <NavBarCompany />
      </header>

      <section class="content">
        <div class="boxes">
          <h2>Number: 0730009156</h2>
          <h2>Email: Ansar@gmail.com</h2>
          <h2>Website: www.deeznutz.com</h2>
        </div>
      </section>
    </section>
  );
};

export default ContactCompany;
