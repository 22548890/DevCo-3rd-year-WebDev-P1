import { Link } from "react-router-dom";
import "../App.css";
import NavBar from "../Components/NavBar";
const ContactDev = () => {
  return (
    <body id="Contact">
      <NavBar />
      <section className="boxes">
        <h2>Number: 0730009156</h2>
        <h2>Email: Ansar@gmail.com</h2>
        <h2>Website: www.deeznutz.com</h2>
      </section>
      <section className="boxes">
        <h1>References</h1>
        <h2>
          Reference: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Earum, eos.
        </h2>
        <h2>
          Reference: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Earum, eos.
        </h2>
        <h2>
          Reference: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Earum, eos.
        </h2>
      </section>
    </body>
  );
};

export default ContactDev;