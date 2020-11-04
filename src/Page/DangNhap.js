import React from 'react'

export default function DangNhap() {
    return (
        <div className="container">
            <h3>Đăng nhập</h3>
            Tài khoản
            <div className="form-group">
                <input className="form-control" />
            </div>
            Mật khẩu
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
