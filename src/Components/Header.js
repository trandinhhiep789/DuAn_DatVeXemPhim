import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import DangKy from '../Page/DangKy'
import DangKyDangNhapModal from '../Page/DangKyDangNhapModal'
import DangNhap from '../Page/DangNhap'

// import './Header.module.scss'

//HOC
const DangKyModal = new DangKyDangNhapModal("Đăng ký", DangKy)
const DangNhapModal = new DangKyDangNhapModal("Đăng nhập", DangNhap)

export default function Header() {

    const [state, setState] = useState('DK')
    const renderModal = () => {
        if (state === 'DK') {
            return DangKyModal
        }
        else {
            return DangNhapModal
        }
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div>
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
            </div>
            <div className="collapse navbar-collapse d-flex text-center justify-content-center" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <NavLink className="nav-link chuTrang" to='/trangchu'>Trang chủ<span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to='/lienhe'>Liên hệ</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to='/tintuc'>Tin tức</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to='/ungdung'>Ứng dụng</NavLink>
                    </li>

                </ul>
            </div>
            <div>

                <button className="btn btn-outline-danger" data-toggle="modal" data-target="#modelId" onClick={() => {
                    setState('DK')
                }}>Đăng ký</button>
                <button className="btn btn-outline-danger" data-toggle="modal" data-target="#modelId" onClick={() => {
                    setState('DN')
                }}>Đăng nhập</button>
                {renderModal()}

            </div>
        </nav>

    )
}
