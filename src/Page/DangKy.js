import React from 'react'

export default function DangKy() {
    return (
        <div className="container">
            <h3>ĐĂNG KÝ</h3>
            Tài khoản
            <div className="form-group">
                <input className="form-control" />
            </div>
            Mật khẩu
            <div className="form-group">
                <input className="form-control" />
            </div>
            Nhập lại mật khẩu
            <div className="form-group">
                <input className="form-control" />
            </div>
            Họ tên
            <div className="form-group">
                <input className="form-control" />
            </div>
            Email
            <div className="form-group">
                <input className="form-control" />
            </div>
            Số điện thoại
            <div className="form-group">
                <input className="form-control" />
            </div>

            <div className="form-group row">
                <button className="btn btn-outline-danger">Đăng ký</button >
                <button className="btn btn-outline-danger mx-2">Đăng nhập</button >
            </div>
        </div>
    )
}
