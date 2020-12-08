import React from 'react'

export default function ThemNguoiDung() {
    return (
        // border-bottom border-primary
        <div>
            <div className="d-flex">
                <div className="">
                    <div className="mx-3 form-group ">
                        <h5 className="" style={{ padding: 0 }}>Tài khoản</h5>
                        <input type="text" className="form-control " id="taiKhoan" />
                    </div>
                    <div className="mx-3 form-group ">
                        <h5 className="" style={{ padding: 0 }}>Mật khẩu</h5>
                        <input type="text" className="form-control " id="matKhau" />
                    </div>
                    <div className="mx-3 form-group ">
                        <h5 className="" style={{ padding: 0 }}>Họ tên</h5>
                        <input type="text" className="form-control " id="hoTen" />
                    </div>
                </div>

                <div className="">

                    <div className="mx-3 form-group ">
                        <h5 className="" style={{ padding: 0 }}>Email</h5>
                        <input type="text" className="form-control " id="Email" />
                    </div>
                    <div className="mx-3 form-group ">
                        <h5 className="" style={{ padding: 0 }}>Số điện thoại</h5>
                        <input type="text" className="form-control " id="soDienThoai" />
                    </div>
                    <div className="mx-3 ">
                        <h5 className="" style={{ padding: 0 }}>Loại người dùng</h5>
                        <select name="" id="chucVu" class="form-control">
                            <option value="0">Khách hàng</option>
                            <option value="0">Admin</option>
                        </select>
                    </div>
                </div>
            </div>
            <div>
                <h5 className="mx-3" style={{ padding: 0 }}>Mô tả</h5>
                <textarea className="form-control mx-3" rows="3"></textarea>
            </div>

        </div>
    )
}
