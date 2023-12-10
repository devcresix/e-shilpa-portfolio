import React from "react";

function Footer() {
  return (
    <footer className="tc-footer-style5 ">
      <div className="container">
        <div className="foot-content">
          <div className="row gx-5">
            <div className="col-lg-5">
              <div className="logo-side">
                <div className="logo th-80 mb-30">
                  <img
                    src="/home_5/assets/img/logo.png"
                    alt=""
                    className="lt_item"
                  />
                  <img
                    src="/home_5/assets/img/eshilpalogo.png"
                    alt=""
                    className="dr_item"
                  />
                </div>
                <div className="text color-666">
                  <p className="mb-2">
                    Unlocking the Future with ICT and Robotics
                  </p>
                  <p></p>
                </div>
                <div className="mail-card">
                  <span className="icon">
                    {" "}
                    <i className="fal fa-envelope-open"></i>{" "}
                  </span>
                  <div className="cont">
                    <p className="color-666"> Support Email </p>
                    <ul className="links">
                      <li>
                        <a href="mailto:prabuddha88herath@gmail.com">
                          prabuddha88herath@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="item mt-5 mt-lg-0">
                <h5 className="sub-title fsz-24 mb-40">Learn</h5>
                <ul className="links">
                  <li>
                    {" "}
                    <a href="#"> ICT </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#"> PROGRAMMING </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#"> APP DEVELOPMENT </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">ROBOTICS </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="item mt-5 mt-lg-0">
                <h5 className="sub-title fsz-24 mb-40"> Social Connect </h5>
                <ul className="links">
                  <li>
                    {" "}
                    <a href="https://www.facebook.com/ro.herath?mibextid=ZbWKwL">
                      {" "}
                      <i className="fab fa-facebook-f me-2"></i> Facebook{" "}
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="https://youtube.com/@prabuddhaherath88?si=b3xXLVXwoNaMX7Aj">
                      {" "}
                      <i className="fab fa-youtube me-2"></i> Youtube{" "}
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="https://wa.me/94705700790">
                      {" "}
                      <i className="fab fa-whatsapp me-2"></i> Whatsapp{" "}
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="foot">
          <div className="row">
            <div className="col-lg-4">
              <p>
                {" "}
                © {new Date(Date.now()).getFullYear().toString()} -{" "}
                <a
                  href="https://www.pikdev.com/"
                  className="fw-bold text-uppercase hover-orange1"
                >
                  Powered By PIKDEV{" "}
                </a>{" "}
              </p>
            </div>
            <div className="col-lg-8 text-lg-end mt-4 mt-lg-0">
              <div className="foot-links">
                <a href="/"> Home </a>
                <a href="#about"> About </a>
                <a href="#learnings">Learning </a>
                <a href="#works"> Works </a>
                <a href="#qualifications"> Qualifications </a>
                <a href="#classes"> Classes </a>
                <a href="#collaborations"> Collaborations </a>
                <a href="#news"> News </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
