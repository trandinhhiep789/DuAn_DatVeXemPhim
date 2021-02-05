import { combineReducers } from 'redux'
// import { QuanLyPhimReducer } from './QuanLyPhimReducer'
import QuanLyNguoiDungReducer from './QuanLyNguoiDungReducer'
import QuanLyPhimReducer from './QuanLyPhimReducer'

export const rootReducer = combineReducers({
    //khai báo các reducer
    // QuanLyPhimReducer,
    stateUser: QuanLyNguoiDungReducer,
    stateFilm: QuanLyPhimReducer,
})