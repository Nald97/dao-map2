import { useState, useEffect, useRef } from "react";
import "./Infographic.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMeteor,
  faCookieBite,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";
import circle from "./components/charts/circle.png";

const Infographic = () => {
  const steps = [
    "Lorem Ipsum dolor sit Amet",
    "Lorem Ipsum dolor sit Amet",
    "Lorem Ipsum dolor sit Amet",
    "Lorem Ipsum dolor sit Amet",
    "Lorem Ipsum dolor sit Amet",
  ];

  useEffect(() => {
    const handleClick = (event) => {
      const articles = document.querySelectorAll("#infographic article");
      articles.forEach((article) => {
        if (article.contains(event.target)) return;
        if (article === event.target) return;
        article.classList.remove("active");
      });
    };

    const handleArticleClick = (event) => {
      const article = event.currentTarget;
      article.classList.toggle("active");
    };

    const handleButtonClick = (event) => {
      event.preventDefault();
      const isPrev =
        event.target === event.target.parentElement.firstElementChild;
      const article = event.target.closest("article");
      const step = parseInt(article.getAttribute("data-step"));
      const next = document.querySelector(
        `[data-step="${isPrev ? step - 1 : step + 1}"]`
      );
      next.classList.add("active");
      next.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    };

    document.addEventListener("mouseup", handleClick);

    document.querySelectorAll("#infographic article").forEach((article) => {
      article.addEventListener("click", handleArticleClick);
    });

    document.querySelectorAll("#infographic article .btn").forEach((btn) => {
      btn.addEventListener("click", handleButtonClick);
    });

    return () => {
      document.removeEventListener("mouseup", handleClick);
      document.querySelectorAll("#infographic article").forEach((article) => {
        article.removeEventListener("click", handleArticleClick);
      });
      document.querySelectorAll("#infographic article .btn").forEach((btn) => {
        btn.removeEventListener("click", handleButtonClick);
      });
    };
  }, []);
  return (
    <div className=" h-100 w-100 py-4">
      <div className="d-flex justify-content-center align-items-center flex-column mb-4">
        <h1 className="mb-2 text-white text-center">Infographic Roadmap</h1>
        <p className="w-75 text-white text-center"></p>
        <p className="w-75 text-white text-center"></p>
        <br />
      </div>

      <main
        id="infographic"
        className="d-flex flex-column align-items-center py-5"
      >
        <section className="step one text-secondary">
          <div className="circle">
            <img
              src={circle}
              style={{
                width: "470px",
                height: "470px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "cente",
                textAlign: "center",
                padding: "40px",
                position: "absolute",
                left: " 50%",
                margin: "40px 0",
                transform: "translateX(-50%)",
              }}
            />
            <FontAwesomeIcon
              icon={faBuildingColumns}
              style={{ scale: "2.5" }}
            />
            <br />

            <h4>Management</h4>
          </div>

          {/* {steps.map((step, index) => (
            <article data-step={index + 1}>
              <header className="d-flex align-items-center text-secondary bg-primary bg-opacity-10">
               
                <img
                  src="/imgs/agora.png"
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  className="fa-solid fa-meteor bg-primary"
                ></img>
                <h6 className="text-uppercase my-3 ps-4">{step}</h6>
              </header>

              <div className="body">
                <small>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </small>

                <div className="d-flex justify-content-between mt-3 controls">
                  <a
                    className={`btn btn-outline-danger ${
                      index === 0 ? "invisible" : ""
                    }`}
                    href="#"
                  >
                    Prev
                  </a>
                  <a className="btn btn-outline-danger" href="#">
                    Next
                  </a>
                </div>
              </div>
            </article>
          ))} */}
          <article data-step={"1"}>
            <header className="d-flex align-items-center text-secondary bg-secondary bg-opacity-50">
              <i className="fa-solid  bg-secondary">
                <img
                  src="/imgs/agora.png"
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  className="fa-solid bg-primary"
                ></img>
              </i>
              <h6 className="text-uppercase my-3 ps-4">
                Lorem Ipsum dolor sit Amet
              </h6>
            </header>

            <div className="body">
              <small>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </small>

              <div className="d-flex justify-content-between mt-3 controls">
                <a
                  className={`btn btn-outline-secondary ${
                    1 === 0 ? "invisible" : ""
                  }`}
                  href="#"
                >
                  Prev
                </a>
                <a className="btn btn-outline-secondary" href="#">
                  Next
                </a>
              </div>
            </div>
          </article>
          <article data-step={"2"}>
            <header className="d-flex align-items-center text-secondary bg-secondary bg-opacity-50">
              <i className="fa-solid  bg-secondary">
                <img
                  src="/imgs/clarity.png"
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  className="fa-solid fa-meteor bg-primary"
                ></img>
              </i>
              <h6 className="text-uppercase my-3 ps-4">
                Lorem Ipsum dolor sit Amet
              </h6>
            </header>

            <div className="body">
              <small>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </small>

              <div className="d-flex justify-content-between mt-3 controls">
                <a
                  className={`btn btn-outline-secondary ${
                    2 === 0 ? "invisible" : ""
                  }`}
                  href="#"
                >
                  Prev
                </a>
                <a className="btn btn-outline-secondary" href="#">
                  Next
                </a>
              </div>
            </div>
          </article>
          <article data-step={"3"}>
            <header className="d-flex align-items-center text-secondary bg-secondary bg-opacity-50">
              <i className="fa-solid  bg-secondary">
                <img
                  src="/imgs/swae.png"
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  className="fa-solid fa-meteor bg-primary"
                ></img>
              </i>
              <h6 className="text-uppercase my-3 ps-4">
                Lorem Ipsum dolor sit Amet
              </h6>
            </header>

            <div className="body">
              <small>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </small>

              <div className="d-flex justify-content-between mt-3 controls">
                <a
                  className={`btn btn-outline-secondary ${
                    2 === 0 ? "invisible" : ""
                  }`}
                  href="#"
                >
                  Prev
                </a>
                <a className="btn btn-outline-secondary" href="#">
                  Next
                </a>
              </div>
            </div>
          </article>
          <article data-step={"4"}>
            <header className="d-flex align-items-center text-secondary bg-secondary bg-opacity-50">
              {/* <FontAwesomeIcon
                  icon={faMeteor}
                  className="fa-solid bg-danger text-danger"
                /> */}{" "}
              <i className="fa-solid  bg-secondary">
                <img
                  src="/imgs/summon.png"
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  className="fa-solid fa-meteor bg-primary"
                ></img>
              </i>
              <h6 className="text-uppercase my-3 ps-4">
                Lorem Ipsum dolor sit Amet
              </h6>
            </header>

            <div className="body">
              <small>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </small>

              <div className="d-flex justify-content-between mt-3 controls">
                <a
                  className={`btn btn-outline-secondary ${
                    2 === 0 ? "invisible" : ""
                  }`}
                  href="#"
                >
                  Prev
                </a>
                <a className="btn btn-outline-secondary" href="#">
                  Next
                </a>
              </div>
            </div>
          </article>
          <article data-step={"5"}>
            <header className="d-flex align-items-center text-secondary bg-secondary bg-opacity-50">
              {/* <FontAwesomeIcon
                  icon={faMeteor}
                  className="fa-solid bg-danger text-danger"
                /> */}
              <i className="fa-solid  bg-secondary">
                <img
                  src="/imgs/roundtable.png"
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  className="fa-solid fa-meteor bg-primary"
                ></img>
              </i>
              <h6 className="text-uppercase my-3 ps-4">
                Lorem Ipsum dolor sit Amet
              </h6>
            </header>

            <div className="body">
              <small>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </small>

              <div className="d-flex justify-content-between mt-3 controls">
                <a
                  className={`btn btn-outline-secondary ${
                    5 === 0 ? "invisible" : ""
                  }`}
                  href="#"
                >
                  Prev
                </a>
                <a className="btn btn-outline-secondary" href="#">
                  Next
                </a>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Infographic;
