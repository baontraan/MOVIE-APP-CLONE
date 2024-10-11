import React, { useState } from "react";
import "./Header.css";
import logo from "../../../assets/logoMovie.svg";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const [keySearch, setkeySearch] = useState();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      navigate(`/search/${keySearch}`);
    }
  };

  const [tab, setTab] = useState("");
  const handleClick = (menuName) => {
    setTab(menuName);
  };

  const handleSideBar = () => {
    setMenu(!menu);
  };
  return (
    <div className="header">
      <Navbar expand="lg" className="py-3">
        <Container>
          <Navbar.Brand className="" href="#">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </Navbar.Brand>
          <ul className="list d-flex  m-auto gap-5 ">
            <li>
              <Link
                to={"/"}
                className={`${tab === "Home" ? "active" : ""}`}
                onClick={() => handleClick("Home")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"list-movie"}
                className={`${tab === "Movies" ? "active" : ""}`}
                onClick={() => handleClick("Movies")}
              >
                Movies
              </Link>
            </li>
          </ul>

          <div iv className="search">
            <input
              type="text"
              placeholder="Search for a movie"
              className="me-2"
              onChange={(e) => setkeySearch(e.target.value)}
              onKeyDown={handleSearch}
            />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>

          <div className="sideBar">
            <span className="iconBar">
              <i class="fa-solid fa-bars " onClick={handleSideBar}></i>
            </span>
            <ul className={`subMenu ${menu && "active"}`}>
              <li>
                <Link
                  to={"/"}
                  className={`${tab === "Home" ? "active" : ""}`}
                  onClick={() => handleClick("Home")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"list-movie"}
                  className={`${tab === "Movies" ? "active" : ""}`}
                  onClick={() => handleClick("Movies")}
                >
                  Movies
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
