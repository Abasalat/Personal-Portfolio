import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
const Navber = () => {
  return (
    <div className="container-fluid bg-dark">
      <nav
        className="navbar navbar-expand-lg text-white"
        aria-label="Thirteenth navbar example"
      >
        <div className="container-fluid bg-dark ">
          <div
            className="collapse navbar-collapse d-lg-flex"
            id="navbarsExample11"
          >
            <ul className="navbar-nav col-lg-5 justify-content-lg-evenly align-items-center ">
              <li className="nav-item mainhover">
                <a
                  className="nav-link text-white active fs-4 me-3 "
                  aria-current="page"
                  href="#"
                >
                  Profile
                </a>
              </li>
              <li className="nav-item mainhover">
                <a className="nav-link text-white fs-4 me-3" href="#">
                  Projects
                </a>
              </li>
              <li className="nav-item mainhover">
                <a className="nav-link text-white fs-4 me-3">Resume</a>
              </li>
              <li className="nav-item mainhover">
                <a
                  className="nav-link text-white fs-4 me-3 "
                  href="#"
                  aria-expanded="false"
                >
                  Skills
                </a>
              </li>
            </ul>
            <a
              className="navbar-brand col-lg-3 me-0 text-white text-center fs-1"
              href="#"
            >
              Aba Salat
            </a>
            <div
              className="d-lg-flex col-lg-4 justify-content-lg-evenly align-items-center "
              style={{
                backgroundColor: "var(--orange)",
                marginBottom: "-10px",
                marginTop: "-10px",
              }}
            >
              <a
                className=" mb-2"
                style={{
                  fontSize: "50px",
                }}
              >
                <IoLogoLinkedin
                  style={{
                    fontSize: "50px",
                    color: "white",
                  }}
                />
              </a>
              <a
                className="mb-2"
                style={{
                  fontSize: "50px",
                  color: "white",
                }}
              >
                <IoLogoGithub />
              </a>
              <a
                className="mb-2"
                style={{
                  fontSize: "50px",
                  color: "white",
                }}
              >
                <AiFillTwitterCircle />
              </a>
              <a
                className="mb-2"
                style={{
                  fontSize: "50px",
                  color: "white",
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
