import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light tc-navbar-style5"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
      }}
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/home_5/assets/img/logo.png" alt="" className="lt_item" />
          <img
            src="/home_5/assets/img/logo_lt.png"
            alt=""
            className="dr_item"
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
          <div className="button_su border-0">
            <span className="su_button_circle bg-orange1 desplode-circle"></span>
            <Link
              href="/inner_pages/page_contact"
              className="butn text-capitalize border-0 button_su_inner bg-000 py-3 px-5"
            >
              <span className="button_text_container fsz-14 text-white">
                {" "}
                Start Project <i className="ti-arrow-top-right ms-1"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
