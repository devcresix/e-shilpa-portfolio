import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark tc-navbar-style5">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="/home_5/assets/img/eshilpalogo.png"
            alt=""
            className="dr_item mobile-logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse mt-4 mt-lg-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#about" scroll={true}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#learnings">
                learnings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#works">
                works
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#qualifications">
                qualifications
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#classes">
                classes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#collaborations">
                collaborations
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#news">
                news
              </Link>
            </li>
          </ul>
          {/* <div className="button_su border-0">
            <span className="su_button_circle bg-orange1 desplode-circle"></span>
            <Link
              href="/inner_pages/page_contact"
              className="butn text-capitalize border-0 button_su_inner bg-000 py-2 px-5 d-flex justify-content-center align-items-center "
            >
              <span className="button_text_container fsz-14 text-white">
                {" "}
                <h>Start Project</h>
              </span>
            </Link>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
