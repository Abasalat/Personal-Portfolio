import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
const Navber = () => {
  return (
    <div
      className="container-fluid  fixed-top "
      style={{ backgroundColor: "var(--dark)" }}
    >
      <nav
        className="navbar navbar-expand-lg text-white"
        aria-label="Thirteenth navbar example"
      >
        <div className="container-fluid bg-dark ">
          <div
            className="collapse navbar-collapse d-lg-flex"
            id="navbarsExample11"
          >
            <ul className="navbar-nav col-lg-5 justify-content-lg-start align-items-center ">
              <li className="nav-item mainhover">
                <a
                  className="nav-link text-white active fs-4 me-5 "
                  aria-current="page"
                  href="#"
                >
                  Profile
                </a>
              </li>
              <li className="nav-item mainhover">
                <a className="nav-link text-white fs-4 me-5" href="#">
                  Projects
                </a>
              </li>
              <li className="nav-item mainhover">
                <a className="nav-link text-white fs-4 me-5">Resume</a>
              </li>
              <li className="nav-item mainhover">
                <a
                  className="nav-link text-white fs-4 me-5 "
                  href="#"
                  aria-expanded="false"
                >
                  Skills
                </a>
              </li>
            </ul>
            <a
              className="navbar-brand col-lg-3 me-0 text-white text-start fs-1"
              href="#"
            >
              Aba Salat
            </a>
            <div
              className="d-lg-flex col-lg-4 justify-content-lg-evenly align-items-center "
              style={{
                backgroundColor: "var(--orange)",
                marginBottom: "-8px",
                marginTop: "-10px",
              }}
            >
              <a className=" mb-2 icon">
                <FaLinkedinIn />
              </a>
              <a
                className="mb-2 "
                style={{
                  fontSize: "65px",
                  color: "black",
                }}
              >
                <IoLogoGithub />
              </a>
              <a
                className="mb-2"
                style={{
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  height: "3.5rem",
                  width: "3.5rem",
                  position: "relative",
                  marginTop: "1rem",
                }}
              >
                <AiFillTwitterCircle
                  style={{
                    fontSize: "67px",
                    position: "absolute",
                    top: "-0.3rem",
                    left: "-0.2rem",
                    right: "-1rem",
                    bottom: "-1.1rem",
                  }}
                />
              </a>
              <a
                className="mb-2 icon"
                style={{
                  color: "var(--orange)",
                }}
              >
                <FaInstagramSquare />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
