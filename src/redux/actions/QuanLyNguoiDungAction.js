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
            localStorage.setItem(USER_LOGIN, JSON.stringify(res.userLogin));

            swal.fire('Đăng nhập thành công', `Xin chào ${userLogin.taiKhoan}`, 'success')

            // userLogin này trên API chi coi duoc tai khoan voi mat khau thoi
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

                alert(`  s   +  s${userLogin.maLoaiNguoiDung}`);

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

