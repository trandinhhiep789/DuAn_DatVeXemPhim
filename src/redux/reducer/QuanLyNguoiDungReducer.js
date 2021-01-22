import React from 'react'

const { USER_LOGIN } = require("../../Util/Config")

let userLogin = {}
let userUpdate = {}

if (localStorage.getItem(USER_LOGIN)) {
    // lay userLogin trong storage gan cho state


    // khúc này ko hiểu sao phải cmt mới chạy được
    // userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}


const stateDefault = {
    userLogin: userLogin,
    userUpdate: userUpdate,
}

const QuanLyNguoiDungReducer = (state = stateDefault, action,) => {
    switch (action.type) {
        case 'DANG_NHAP': {
            state.userLogin = action.userLogin
            return { ...state }
        }

        case 'UpdateUser': {
            // alert("vo reducer")
            console.log(action.data);
            state.userUpdate = { ...action.data };
            // alert(state.userUpdate);
            // console.log(state.userUpdate);
            return { ...state };
        }

        default: return { ...state }
    }
}

export default QuanLyNguoiDungReducer;