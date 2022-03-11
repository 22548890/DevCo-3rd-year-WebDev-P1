import "./App.css";

import React, { Component } from "react";

import ppimg from "./images/face.jpg";

function App() {
  function hideContent(fragment) {
    var contact = document.getElementById("Contact");
    var jobs = document.getElementById("Jobs");
    var home = document.getElementById("Home");

    if (fragment === "Home") {
      home.style.display = "block";
      contact.style.display = "none";
      jobs.style.display = "none";
    } else if (fragment === "Contact") {
      home.style.display = "none";
      contact.style.display = "block";
      jobs.style.display = "none";
    } else {
      home.style.display = "none";
      contact.style.display = "none";
      jobs.style.display = "block";
    }
  }

  // array describing the options of the navigation elements
      // specifying the lower case option and the matching color
      const navigationOptions = [
        {
          name: "profile",
          color: "#3dbbd1",
        },
        {
          name: "contacts",
          color: "#713faa",
        },
        {
          name: "jobs",
          color: "#f13e3e",
        },
      ];

      // target all anchor link elements
      const links = document.querySelectorAll("nav a");

      // function called in response to a click event on the anchor link
      function handleClick(e) {
        // prevent the default behavior, but most importantly remove the class of .active from those elements with it
        e.preventDefault();
        links.forEach((link) => {
          if (link.classList.contains("active")) {
            link.classList.remove("active");
          }
        });

        // retrieve the option described the link element
        const name = this.textContent.trim().toLowerCase();
        // find in the array the object with the matching name
        // store a reference to its color
        const { color } = navigationOptions.find((item) => item.name === name);

        // retrieve the custom property for the --hover-c property, to make it so that the properties are updated only when necessary
        const style = window.getComputedStyle(this);
        const hoverColor = style.getPropertyValue("--hover-c");
        // if the two don't match, update the custom property to show the hue with the text and the semi transparent background
        if (color !== hoverColor) {
          this.style.setProperty("--hover-bg", `${color}20`);
          this.style.setProperty("--hover-c", color);
        }

        // apply the class of active to animate the svg an show the span element
        this.classList.add("active");
        // change the color of the background of the application to match
        document.querySelector("body").style.background = color;
      }

      // listen for a click event on each and every anchor link
      links.forEach((link) => link.addEventListener("click", handleClick));

  return (
    <body>
      <a class="edit-button" href="#28">
        <span class="icon entypo-plus scnd-font-color"></span>
      </a>
      <div class="profile-picture big-profile-picture clear">
        <img width="150px" alt="Anne Hathaway picture" src={ppimg}></img>
      </div>
      <h1 class="user-name">Anne Hathaway</h1>
      <div class="profile-description">
        <p class="scnd-font-color">
          Lorem ipsum dolor sit amet consectetuer adipiscing
        </p>
      </div>

      {/* Tabs */}
      {/* Nav Bar */}
      <header>
      <nav>
      <a class="active" href="#">
        <svg class="svg-icon" viewBox="0 0 19 19">
          <path
            fill="none"
            d="M12.443,9.672c0.203-0.496,0.329-1.052,0.329-1.652c0-1.969-1.241-3.565-2.772-3.565S7.228,6.051,7.228,8.02c0,0.599,0.126,1.156,0.33,1.652c-1.379,0.555-2.31,1.553-2.31,2.704c0,1.75,2.128,3.169,4.753,3.169c2.624,0,4.753-1.419,4.753-3.169C14.753,11.225,13.821,10.227,12.443,9.672z M10,5.247c1.094,0,1.98,1.242,1.98,2.773c0,1.531-0.887,2.772-1.98,2.772S8.02,9.551,8.02,8.02C8.02,6.489,8.906,5.247,10,5.247z M10,14.753c-2.187,0-3.96-1.063-3.96-2.377c0-0.854,0.757-1.596,1.885-2.015c0.508,0.745,1.245,1.224,2.076,1.224s1.567-0.479,2.076-1.224c1.127,0.418,1.885,1.162,1.885,2.015C13.961,13.689,12.188,14.753,10,14.753z M10,0.891c-5.031,0-9.109,4.079-9.109,9.109c0,5.031,4.079,9.109,9.109,9.109c5.031,0,9.109-4.078,9.109-9.109C19.109,4.969,15.031,0.891,10,0.891z M10,18.317c-4.593,0-8.317-3.725-8.317-8.317c0-4.593,3.724-8.317,8.317-8.317c4.593,0,8.317,3.724,8.317,8.317C18.317,14.593,14.593,18.317,10,18.317z"
          ></path>
        </svg>
        <span> Profile </span>
      </a>

      <a href="#">
        <svg class="svg-icon" viewBox="0 0 19 19">
          <path
            fill="none"
            d="M10,15.654c-0.417,0-0.754,0.338-0.754,0.754S9.583,17.162,10,17.162s0.754-0.338,0.754-0.754S10.417,15.654,10,15.654z M14.523,1.33H5.477c-0.833,0-1.508,0.675-1.508,1.508v14.324c0,0.833,0.675,1.508,1.508,1.508h9.047c0.833,0,1.508-0.675,1.508-1.508V2.838C16.031,2.005,15.356,1.33,14.523,1.33z M15.277,17.162c0,0.416-0.338,0.754-0.754,0.754H5.477c-0.417,0-0.754-0.338-0.754-0.754V2.838c0-0.417,0.337-0.754,0.754-0.754h9.047c0.416,0,0.754,0.337,0.754,0.754V17.162zM13.77,2.838H6.23c-0.417,0-0.754,0.337-0.754,0.754v10.555c0,0.416,0.337,0.754,0.754,0.754h7.539c0.416,0,0.754-0.338,0.754-0.754V3.592C14.523,3.175,14.186,2.838,13.77,2.838z M13.77,13.77c0,0.208-0.169,0.377-0.377,0.377H6.607c-0.208,0-0.377-0.169-0.377-0.377V3.969c0-0.208,0.169-0.377,0.377-0.377h6.785c0.208,0,0.377,0.169,0.377,0.377V13.77z"
          ></path>
        </svg>
        <span> Contacts </span>
      </a>

      <a href="#">
        <svg class="svg-icon" viewBox="0 0 19 19">
          <path
            fill="none"
            d="M16.852,5.051h-4.018c0.131-0.225,0.211-0.482,0.211-0.761V3.528c0-0.841-0.682-1.522-1.521-1.522H8.478c-0.841,0-1.523,0.682-1.523,1.522V4.29c0,0.279,0.081,0.537,0.211,0.761H3.148c-0.841,0-1.522,0.682-1.522,1.523v9.897c0,0.842,0.682,1.523,1.522,1.523h13.704c0.842,0,1.523-0.682,1.523-1.523V6.574C18.375,5.733,17.693,5.051,16.852,5.051zM7.716,3.528c0-0.42,0.341-0.761,0.762-0.761h3.045c0.42,0,0.762,0.341,0.762,0.761V4.29c0,0.421-0.342,0.761-0.762,0.761H8.478c-0.42,0-0.762-0.34-0.762-0.761V3.528z M17.615,16.471c0,0.422-0.342,0.762-0.764,0.762H3.148c-0.42,0-0.761-0.34-0.761-0.762V9.62h15.228V16.471z M17.615,8.858H2.387V6.574c0-0.421,0.341-0.761,0.761-0.761h13.704c0.422,0,0.764,0.34,0.764,0.761V8.858z"
          ></path>
        </svg>
        <span> Jobs </span>
      </a>
    </nav>
      </header>

      {/* <header class="block">
        <ul class="header-menu horizontal-list">
          <li>
            <a class="header-menu-tab" onClick={() => hideContent("Home")}>
              <span class="icon entypo-cog scnd-font-color"></span>
              Home
            </a>
          </li>
          <li>
            <a class="header-menu-tab" onClick={() => hideContent("Contact")}>
              <span class="icon fontawesome-user scnd-font-color"></span>
              Contact
            </a>
          </li>
          <li>
            <a class="header-menu-tab" onClick={() => hideContent("Jobs")}>
              <span class="icon fontawesome-envelope scnd-font-color"></span>
              Jobs
            </a>
            <a class="header-menu-number" href="#4">
              5
            </a>
          </li>
        </ul>

        small profile img
        <div class="profile-menu">
          <p>
            Me{" "}
            <a href="#26">
              <span class="entypo-down-open scnd-font-color"></span>
            </a>
          </p>
          <div class="profile-picture small-profile-picture">
            <img width="40px" alt="Anne Hathaway picture" src={ppimg}></img>
          </div>
        </div>
      </header> */}

      <header>
        <div id="Home">
          <div class="boxes">
            <h2>About</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              laboriosam accusantium molestias ut architecto odit consequatur
              quos sit? Ad asperiores, consequatur qui quo maxime unde aut.
              Architecto inventore debitis deleniti?
            </p>
          </div>
          <div class="boxes">
            <h2>Skills</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              laboriosam accusantium molestias ut architecto odit consequatur
              quos sit? Ad asperiores, consequatur qui quo maxime unde aut.
              Architecto inventore debitis deleniti?
            </p>
          </div>

          <div class="boxes">
            <h2>Experience</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              laboriosam accusantium molestias ut architecto odit consequatur
              quos sit? Ad asperiores, consequatur qui quo maxime unde aut.
              Architecto inventore debitis deleniti?
            </p>
          </div>

          <div class="boxes">
            <h2>Education</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              laboriosam accusantium molestias ut architecto odit consequatur
              quos sit? Ad asperiores, consequatur qui quo maxime unde aut.
              Architecto inventore debitis deleniti?
            </p>
          </div>
          <div class="boxes">
            <h2>Languages</h2>
            <li>English</li>
          </div>
        </div>
      </header>

      <header>
        <div id="Contact">
          <h2>Number: 0730009156</h2>
          <h2>Email: Ansar@gmail.com</h2>
          <h2>Website: www.deeznutz.com</h2>
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
      </header>
      <div class="containerJobs">
        <div id="Jobs" class="jobContainer">
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
        </div>
        <div class="rhsContainer">
          <div class="donut-chart-block block">
            <h2 class="titular">WORK STATS</h2>
            <div class="donut-chart">
              {/*
          <!-- DONUT-CHART by @kseso https://codepen.io/Kseso/pen/phiyL -->
          */}
              <div id="porcion1" class="recorte">
                <div class="quesito ios" data-rel="21"></div>
              </div>
              <div id="porcion2" class="recorte">
                <div class="quesito mac" data-rel="39"></div>
              </div>
              <div id="porcion3" class="recorte">
                <div class="quesito win" data-rel="31"></div>
              </div>
              <div id="porcionFin" class="recorte">
                <div class="quesito linux" data-rel="9"></div>
              </div>
              {/*
          <!-- END DONUT-CHART by @kseso https://codepen.io/Kseso/pen/phiyL -->
          */}
              <p class="center-date">R6969</p>
            </div>
            <ul class="os-percentages horizontal-list">
              <li>
                <p class="ios os scnd-font-color">Python</p>
                <p class="os-percentage">
                  21<sup>%</sup>
                </p>
              </li>
              <li>
                <p class="mac os scnd-font-color">Java</p>
                <p class="os-percentage">
                  48<sup>%</sup>
                </p>
              </li>
              <li>
                <p class="linux os scnd-font-color">C</p>
                <p class="os-percentage">
                  9<sup>%</sup>
                </p>
              </li>
              <li>
                <p class="win os scnd-font-color">C++</p>
                <p class="os-percentage">
                  32<sup>%</sup>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
