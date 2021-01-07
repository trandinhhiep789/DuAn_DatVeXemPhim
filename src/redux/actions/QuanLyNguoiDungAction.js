import React from 'react'
import { DOMAIN, USER_LOGIN, ACCESSTOKEN } from '../../Util/Config'
import Axios from 'axios'
import { history } from '../../Util/history'
import swal from 'sweetalert2'


export const dangNhapAction = (userLogin) => {
    return dispatch => {
        const promise = Axios({
            url: DOMAIN + '/api/quanlynguoidung/dangnhap',
            method: 'POST',
            data: userLogin,
        })

        promise.then(res => {
            //dang nhap thanh cong luu thong tin nguoi dung vao localstorage
            localStorage.setItem(USER_LOGIN, JSON.stringify(res.data));
            localStorage.setItem(ACCESSTOKEN, res.data.accessToken);

            swal.fire('Đăng nhập thành công', `Xin chào ${userLogin.taiKhoan}`, 'success')

            if (res.data.maLoaiNguoiDung == "QuanTri") {
                history.push('/admin')
                // dispatch gia tri len reducer
                // alert(res.data.maLoaiNguoiDung)
                dispatch({
                    type: 'DANG_NHAP',
                    userLogin: res.data,

                })

            }
            else {

                history.push('/personalinfo')
                // dispatch gia tri len reducer
                dispatch({
                    type: 'DANG_NHAP',
                    userLogin: res.data
                })

            }
        })

        promise.catch(err => {
            console.log(err.response.data)
            swal.fire('Thông báo', err.response.data, 'error')
        })
    }
}

export const deleteUser = (maTaiKhoan, maLoaiNguoiDung) => {



    return async (dispatch) => {
        alert('access nha')
        alert(localStorage.getItem(ACCESSTOKEN));
        if (maLoaiNguoiDung === "QuanTri") {
            alert(maTaiKhoan)

            return Axios.delete(`https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${maTaiKhoan}`,
                { data: { source: maTaiKhoan }, headers: { Authorization: 'Bearer ' + localStorage.getItem(ACCESSTOKEN) } })
                .then(() => {
                    dispatch({
                        data: maTaiKhoan,
                    })
                }).catch((err) => {
                    console.log("Lỗi API (xóa thành công)")
                })



        }
        else {
            alert("CHỈ QUẢN TRỊ MỚI XÓA ĐƯỢC");
        }
    }
}

