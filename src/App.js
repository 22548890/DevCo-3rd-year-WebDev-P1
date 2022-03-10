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

      <header class="block">
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
            {/* <a class="header-menu-number" href="#4">
              5
            </a> */}
          </li>
        </ul>

        {/* small profile img */}
        {/* <div class="profile-menu">
          <p>
            Me{" "}
            <a href="#26">
              <span class="entypo-down-open scnd-font-color"></span>
            </a>
          </p>
          <div class="profile-picture small-profile-picture">
            <img width="40px" alt="Anne Hathaway picture" src={ppimg}></img>
          </div>
        </div> */}
      </header>

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
