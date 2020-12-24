import React from 'react'

const { USER_LOGIN } = require("../../Util/Config")
const { ACCESSTOKEN } = require("../../Util/Config")

let userLogin = {}
let accessToken = {}

if (localStorage.getItem(USER_LOGIN)) {
    // lay userLogin trong storage gan cho state
    userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}

if (localStorage.getItem(ACCESSTOKEN)) {
    // lay accessToken trong storage gan cho state
    accessToken = JSON.parse(localStorage.getItem(ACCESSTOKEN));
}

const stateDefault = {
    userLogin: userLogin,
    accessToken: accessToken,
}

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DANG_NHAP': {
            alert("dang nhap")
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
