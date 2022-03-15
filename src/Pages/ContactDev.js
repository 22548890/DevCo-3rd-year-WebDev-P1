import { Link } from "react-router-dom";
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
      <header class = "header">
          <NavBar />
        </header>

        <body>
        {/* <section id="Jobs">
      <div class="boxes">
        <h2>Number: 0730009156</h2>
        <h2>Email: Ansar@gmail.com</h2>
        <h2>Website: www.deeznutz.com</h2>
      </div>
      <div class="boxes">
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
      </div>
    </section> */}

<section id="Jobs">
        <div class="boxes">
          <p>
            <h2>Number: 0730009156</h2>
            <h2>Email: Ansar@gmail.com</h2>
            <h2>Website: www.deeznutz.com</h2>
          </p>
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

        </body>
        </section>
        

    
  );
};

export default ContactDev;
