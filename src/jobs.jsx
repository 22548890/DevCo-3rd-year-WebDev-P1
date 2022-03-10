import React, { Component } from "react";
function Jobs() {
  return (
    <body>
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
