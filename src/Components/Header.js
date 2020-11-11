import React from "react";
import style from "../Css/main.css";

export default function Header() {
  return (
    <header>
      <div className="row align-items-center">
        <div className="col-3">
          <img className="weblogo" src="./img/web-logo.png" />
        </div>
        <div className="col-6 header__menu">
          <ul>
            <li>
              <a href="#">Lịch chiếu</a>
            </li>
            <li>
              <a href="#">Cụm rạp</a>
            </li>
            <li>
              <a href="#">Tin tức</a>
            </li>
            <li>
              <a href="#">Ứng dụng</a>
            </li>
          </ul>
        </div>
        <div className="col-3 d-flex header__right">
          <div className="account">
            <img src="./img/avatar.png" />
            <p>Đăng nhập</p>
          </div>
          <div>|</div>
          <div className="location">
            <img src="./img/location-header.png" />
            <p>Hồ Chí Minh</p>
          </div>
        </div>
      </div>
    </header>
  );
}
