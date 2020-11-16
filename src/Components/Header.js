import React from "react";
import style from "../Css/main.css";

export default function Header() {
  return (





    // HEADER
    <header>

{/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
</nav> */}


      <nav className="navbar navbar-expand-md navbar-light">
        <a className="navbar-brand" href="#"><img className="weblogo" src="./img/web-logo.png" /></a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>       
        {/* <button className="" type="button" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onclick="openNav()">
          <span className="navbar-toggler-icon" />
        </button>   */}

        {/* <div className="collapse navbar-collapse" id="navbarNav"></div> */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="header__menu">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
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
                <button className="btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Hồ Chí Minh
                </button>
                <div className="dropdown-menu selectScroll" aria-labelledby="dropdownMenu2">
                  <a className="dropdown-item" href="#">Hồ Chí Minh</a>
                  <a className="dropdown-item" href="#">Hà Nội</a>
                  <a className="dropdown-item" href="#">Đà Nẵng</a>
                  <a className="dropdown-item" href="#">Buôn Mê Thuộc</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="rightMenu" id="mySidenav">
            <a href="javascript:void(0)" className="closebtn" onClick="closeNav()">
              <span>X</span>
            </a>
            <div className="account">
              <img src="./img/avatar.png" />
              <span>Đăng nhập</span>
            </div>
            <a className="nav-link" href="#">Lịch Chiếu</a>
            <a className="nav-link" href="#">Cụm Rạp</a>
            <a className="nav-link" href="#">Tin tức</a>
            <a className="nav-link" href="#">Ứng dụng</a>
            <a className="nav-link" href="#">Hồ Chí Minh</a>
          </div> */}
      </nav>



    </header>

  );
}
