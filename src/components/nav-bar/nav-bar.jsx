import React from "react";
import "./nav-bar.css";
import logo from "../../assets/logo.png";
import eng from "../../assets/icons/eng.png";
import ru from "../../assets/icons/ru.png";
import zn from "../../assets/icons/zn.png";
import { NavLink } from "react-router-dom";
import { ReactComponent as Menu } from "../../assets/icons/burger-menu.svg";

function NavBar() {
  return (
    <nav>
      <div className="container nav_wrapper">
        <div className="nav_wrapper_icon">
          <img src={logo} alt="" />
          <h2>Bonus Return</h2>
          <p>настоящий кэшбэк</p>
        </div>
        <div className="nav_wrapper_menu">
          <NavLink to="">
            <p>Селлерам</p>
          </NavLink>
          <NavLink to="">
            <p>Магазинам</p>
          </NavLink>
        </div>
        <div className="nav_wrapper_right">
          <div className="nav_wrapper_login">
            <button>Вход</button>
            <button>Регистрация</button>
            <div className="nav_burger">
            <Menu />
          </div>
          </div>
          <div className="nav_lang_toggler">
            <div>
              <img src={eng} alt="" />
              <p>EN</p>
            </div>
            <div>
              <img src={ru} alt="" />
              <p>RU</p>
            </div>
            <div>
              <img src={zn} alt="" />
              <p>ZN</p>
            </div>
          </div>
        
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
