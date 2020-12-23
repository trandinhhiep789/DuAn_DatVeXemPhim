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
            data: userLogin
        })

        promise.then(res => {
            //dang nhap thanh cong luu thong tin nguoi dung vao localstorage
            localStorage.setItem(USER_LOGIN, JSON.stringify(res.data));
            localStorage.setItem(ACCESSTOKEN, res.data.accessToken);
            swal.fire('Đăng nhập thành công', `Xin chào ${userLogin.taiKhoan}`, 'success')
            if (userLogin.maLoaiNguoiDung === "QuanTri") {
                history.push('/admin')
                // dispatch gia tri len reducer
                dispatch({
                    type: 'DANG_NHAP',
                    userLogin: res.data
                })

                const loihua = Axios({
                    url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${userLogin.taiKhoan}`,
                    method: 'GET',
                    data: userLogin.taiKhoan
                })
                loihua.then(res => {
                    dispatch({
                        type: 'TIM_KIEM_NGUOI_DUNG',
                        userLogin: res.data
                    })
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

