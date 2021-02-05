import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { ACCESSTOKEN } from '../../../Util/Config'

import { useSelector, useDispatch } from 'react-redux'

import { useForm } from "react-hook-form";





export default function SuaNguoiDung() {


    const [user, setUser] = useState({
        taiKhoan: "",
        email: "",
        matKhau: "",
        hoTen: "",
        maNhom: 'GP01',
        soDt: "",
        maLoaiNguoiDung: "",
    })


    let taiKhoan = useSelector(state => state.stateUser.userUpdate.taiKhoan)
    let matKhau = useSelector(state => state.stateUser.userUpdate.matKhau)
    let email = useSelector(state => state.stateUser.userUpdate.email)
    let hoTen = useSelector(state => state.stateUser.userUpdate.hoTen)
    let soDt = useSelector(state => state.stateUser.userUpdate.soDt)
    let maLoaiNguoiDung = useSelector(state => state.stateUser.userUpdate.maLoaiNguoiDung)


    // setUser({
    //     taiKhoan: taiKhoan,
    //     email: email,
    //     matKhau: matKhau,
    //     hoTen: hoTen,
    //     maNhom: 'GP01',
    //     soDt: soDt,
    //     maLoaiNguoiDung: maLoaiNguoiDung,
    // })

    console.log(taiKhoan, hoTen, matKhau, maLoaiNguoiDung, email, soDt)

    const handleChange = (e) => {
        let { value, name } = e.target;
        e.preventDefault()

        // Thay đổi giá trị thuộc tính đang onChange
        if (user.taiKhoan == "" && user.matKhau == "" && user.soDt == "" && user.hoTen == "" && user.maLoaiNguoiDung == "") {

            setUser({
                taiKhoan: taiKhoan,
                email: email,
                matKhau: matKhau,
                hoTen: hoTen,
                maNhom: 'GP01',
                soDt: soDt,
                maLoaiNguoiDung: maLoaiNguoiDung,
            })

            console.log("Thong tin tai khoan can sua: ")
            console.log(user);

        }

        else {
            if (user.taiKhoan == "") {
                setUser({
                    taiKhoan: taiKhoan,
                    maNhom: 'GP01',
                })
            }
            if (user.matKhau == "") {
                setUser({
                    matKhau: matKhau,
                    maNhom: 'GP01',
                })
            }
            if (user.soDt == "") {
                setUser({
                    maNhom: 'GP01',
                    soDt: soDt,
                })
            }
            if (user.hoTen == "") {
                setUser({
                    hoTen: hoTen,
                    maNhom: 'GP01',
                })
            }
            if (user.maLoaiNguoiDung == "") {
                setUser({
                    maNhom: 'GP01',
                    maLoaiNguoiDung: maLoaiNguoiDung,
                })
            }
            else {
                let newUser = { ...user, [name]: value };
                // Set lại state của userLogin = giá trị mới
                setUser(newUser)
                console.log("Thong tin tai khoan can sua: ")
                console.log(newUser);
            }


        }


    }


    const handleSubmit = (e) => {
        // chặn sự kiện load lại
        e.preventDefault()

        var form_data = new FormData()

        for (var key in user) {
            console.log(key, user[key])
            form_data.append(key, user[key])
        }
        e.preventDefault()

        Axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
            // data: form_data,
            headers: { Authorization: 'Bearer ' + localStorage.getItem(ACCESSTOKEN) },
            data: { taiKhoan: `${user.taiKhoan}`, matKhau: `${user.matKhau}`, email: `${user.email}`, soDt: `${user.soDt}`, maNhom: `${user.maNhom}`, maLoaiNguoiDung: `${user.maLoaiNguoiDung}`, hoTen: `${user.hoTen}` },
            method: 'PUT',
        }).then(res => {
            console.log(res)
            alert("Cập nhật người dùng thành công")

        }).catch(err => {
            console.log(err.response.data)
            alert(err.response.data)
            alert("Cập người dùng thất bại")


            console.log("Cập nhật người dùng thất bại")
        })

    }

    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button type="button" className="btn btn-info align-center p-5" data-toggle="modal" data-target="#modelId_Sua">
                    Sửa
                </button>

                <div className="modal fade" id="modelId_Sua" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId_Sua" aria-hidden="true">
                    <div className="modal-dialog" role="">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title"><i className="fa fa-user-cog mr-3"></i> Sửa người dùng</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="container-fluid">
                                    <form className="" id="form_update_user" onSubmit={handleSubmit}>
                                        <div className="d-flex">
                                            <div className="">
                                                <div className="mx-3 form-group fw-bold ">
                                                    <h6 className="font-weight-light" style={{ padding: 0 }}>Tài khoản</h6>

                                                    <input type="text" className="form-control " placeholder={taiKhoan} name="taiKhoan" id="taiKhoan" onChange={handleChange} disabled />
                                                </div>
                                                <div className="mx-3 form-group ">
                                                    <h6 className="font-weight-light" style={{ padding: 0 }}>Mật khẩu</h6>
                                                    <input type="text" className="form-control " placeholder={matKhau} name="matKhau" onChange={handleChange} />
                                                </div>
                                                <div className="mx-3 form-group ">
                                                    <h6 className="font-weight-light" style={{ padding: 0 }}>Họ tên</h6>
                                                    <input type="text" className="form-control " placeholder={hoTen} name="hoTen" onChange={handleChange} />
                                                </div>
                                            </div>

                                            <div className="">

                                                <div className="mx-3 form-group ">
                                                    <h6 className="font-weight-light" style={{ padding: 0 }}>Email</h6>
                                                    <input type="text" className="form-control " placeholder={email} name="email" onChange={handleChange} />
                                                </div>
                                                <div className="mx-3 form-group ">
                                                    <h6 className="font-weight-light" style={{ padding: 0 }}>Số điện thoại</h6>
                                                    <input type="text" className="form-control " placeholder={soDt} name="soDt" onChange={handleChange} />
                                                </div>
                                                <div className="mx-3">
                                                    <h6 className="font-weight-light" style={{ padding: 0 }}>Loại người dùng</h6>
                                                    <select name="maLoaiNguoiDung" class="form-control" onChange={handleChange} >
                                                        <option selected>{maLoaiNguoiDung}</option>
                                                        <option value="KhachHang">Khách hàng</option>
                                                        <option value="QuanTri">Quản trị</option>
                                                    </select>

                                                </div>
                                            </div>

                                        </div>

                                        <button className="btn btn-secondary ml-3" type="reset"><i className="fa fa-sync"></i></button>

                                        <button className="btn btn-outline-info mt-5 w-100 text-center" type="submit" >Sửa</button>



                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="reset" className="btn btn-secondary" data-dismiss="modal" onClick={() => {
                                    let action = {
                                        type: 'DONG_MO'
                                    }
                                    dispatch(action)
                                }}>
                                    Thoát
                                </button>
                                {/* <button type="button" className="btn btn-primary">Save</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

