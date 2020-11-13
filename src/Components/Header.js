import React from "react";
import style from "../Css/main.css";

export default function Header() {
  return (
    // HEADER
    <header>
      <nav className="navbar navbar-expand-md navbar-light">
        <a className="navbar-brand" href="#"><img className="weblogo" src="./img/web-logo.png" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <div id="header__menu">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">Lịch Chiếu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Cụm Rạp</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Tin tức</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Ứng dụng</a>
              </li>
            </ul>
          </div>
          <div className="header__user">

            <div className="account">
              <img src="./img/avatar.png" />
              <span>Đăng nhập</span>
            </div>

            <div className="location">
              <div className="location__logo"><img src="./img/location-header.png" /></div>
              <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Hồ Chí Minh
                </button>
                <div className="dropdown-menu selectScroll" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Hồ Chí Minh</a>
                  <a className="dropdown-item" href="#">Hà Nội</a>
                  <a className="dropdown-item" href="#">Đà Nẵng</a>
                  <a className="dropdown-item" href="#">Buôn Mê Thuộc</a>
                </div>
              </div>
            </div>



          </div>

        </div>
      </nav>

    </header>

  );
}
