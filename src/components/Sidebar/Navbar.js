import React, { useEffect, useState } from "react";
import brand from '../../Assets/img/Logo.svg'
import "./Navbar.css";
import M from "moment";
import { IoMdExit } from "react-icons/io";
const NavBar = ({ menu, setL, lang }) => {
  const [clock, setClock] = useState(M().format("H:mm"));
  useEffect(() => {
    setInterval(() => {
      setClock(M().format("H:mm"));
    }, 1000);
  }, []);


  const leave = () => {
    window.localStorage.removeItem("user");
    window.location.href = "/login";
  };


  return (
    <nav className="navbar">
      
      <div className="header__wrapper">
        <img className="header__img" src={brand} alt="logo" />
        <p className="header__text" >Электрон архив</p>
        </div>
      <div className="navbar_items">
        <div className="clock">
          <p
            style={{
              color: "#fff",
              margin: "0",
              marginRight: "10px",
              fontSize: "18px",
            }}>
            {M().format("DD.MM.YYYY")}
          </p>
          <h2 style={{ marginBottom: "0px", color: "#fff", fontSize: "18px",marginRight: "10px", }}>{clock}</h2>
        </div>
        <h3 style={{
            margin: "0px",
            color: "#fff",
            fontSize: "18px",
          }}>
        Модератор
        </h3>
        <h3
          style={{
            margin: "0px",
            color: "#2c3e50",
            display: "flex",
            cursor: "pointer",
            alignItems: "center",
          }}
          onClick={leave}>
          <IoMdExit className='exit'></IoMdExit>
        </h3>
      </div>
    </nav>
  );
};
export default NavBar;
