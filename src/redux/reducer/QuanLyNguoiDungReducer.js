import React from 'react'

const { USER_LOGIN } = require("../../Util/Config")

let userLogin = {}

if (localStorage.getItem(USER_LOGIN)) {
    // lay userLogin trong storage gan cho state


    // khúc này ko hiểu sao phải cmt mới chạy được
    // userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}


const stateDefault = {
    userLogin: userLogin,
}

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DANG_NHAP': {
            state.userLogin = action.userLogin
            return { ...state }
        }

        case 'TIM_KIEM_NGUOI_DUNG': {
            if (state.userLogin.maLoaiNguoiDung == "QuanTri")
                return { ...state }
        }

        default: return { ...state }
    }
}
