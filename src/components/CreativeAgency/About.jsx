import React from "react";

function About() {
  return (
    <section className="tc-about-style5" id="about">
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-6">
            <div className="img">
              <img
                src="/home_5/assets/img/person1.jpg"
                alt=""
                className="main-img wow zoomIn slow"
              />
              <div className="rotate-box" data-speed="1" data-lag="0.7">
                <a
                  href="#"
                  className="rotate-circle fsz-30 rotate-text d-inline-block text-uppercase"
                >
                  <svg className="textcircle" viewBox="0 0 500 500">
                    <defs>
                      <path
                        id="textcircle"
                        d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                      ></path>
                    </defs>
                    <text>
                      <textPath xlinkHref="#textcircle" textLength="900">
                        Tech Adventures for Little Explorers.{" "}
                      </textPath>
                    </text>
                  </svg>
                </a>
                <i className="ti-arrow-top-right icon fsz-45"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="info ps-lg-5 js-splittext-lines">
              <p className="fsz-14 text-uppercase color-666 mb-20">
                {" "}
                About Me{" "}
              </p>
              <h2 className="fsz-50 mb-40">
                {" "}
                Unlocking the Future with ICT and Robotics
              </h2>
              <div className="text fsz-16 color-666 mb-50">
                Cultivate innovation with our ICT and robotics education
                services. We empower students to embrace technology, fostering
                creativity and problem-solving for tomorrow's leaders.
              </div>
              <a
                href="#"
                className="numb-card d-block pb-30 mb-30 border-1 border-bottom"
              >
                <div className="row">
                  <div className="col-10">
                    <div className="cont d-flex">
                      <h3 className="color-orange1 fsz-45 me-20 flex-shrink-0 fw-500">
                        {" "}
                        95%{" "}
                      </h3>
                      <p>
                        {" "}
                        O/L ICT <br /> Results{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-2">
                    <span className="arrow fsz-27 color-999">
                      {" "}
                      <i className="ti-arrow-top-right"></i>{" "}
                    </span>
                  </div>
                </div>
              </a>
              <a href="#" className="numb-card d-block">
                <div className="row">
                  <div className="col-10">
                    <div className="cont d-flex">
                      <h3 className="color-orange1 fsz-45 me-20 flex-shrink-0 fw-500">
                        {" "}
                        1000+{" "}
                      </h3>
                      <p>
                        {" "}
                        Students<br /> Over 6 years{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-2">
                    <span className="arrow fsz-27 color-999">
                      {" "}
                      <i className="ti-arrow-top-right"></i>{" "}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
