import React from "react";
import logo from "../../../assets/logoMovie.svg";
import "./Footer.css";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="">
        <Container className="py-5">
          <div className="d-flex justify-content-between mb-4 align-items-center ">
            <a href="" className="logo ">
              <img src={logo} alt="" />
            </a>
            <ul className="list-menu d-flex gap-4 align-item-center   ">
              <li className="mt-3">
                <Link style={{ color: "#fff" }} to={"/"} href="#">
                  HOME
                </Link>
              </li>
              <li className=" mt-3 ">
                <Link style={{ color: "#fff" }} to={"/list-movie"} href="#">
                  MOVIES
                </Link>
              </li>
            </ul>
          </div>
          <p className="desc text-light pt-5">
            &#169; 2023 <span className="filmName text-warning">Filmlane</span>.
            All Rights Reserved by{" "}
            <span className="name text-warning">Thien Bao</span>
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
