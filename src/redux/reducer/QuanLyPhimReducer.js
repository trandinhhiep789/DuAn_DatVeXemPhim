import { DELETE_FILM_ERROR, DELETE_FILM_SUCCESS, LAY_DANH_SACH_PHIM_ACTION } from "../const/QuanLyPhimConst"
import swal from 'sweetalert2'


const stateDefault = {
    dsPhim: [],
    chiTietPhim: {},
    thongTinPhongVe: {},
}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case LAY_DANH_SACH_PHIM_ACTION: {
            state.dsPhim = action.dsPhim;
            return { ...state }
        }
        case 'LAY_CHI_TIET_PHIM': {
            state.chiTietPhim = action.chiTietPhim;
            return { ...state }
        }
        case 'THONG_TIN_PHONG_VE': {
            state.thongTinPhongVe = action.thongTinPhongVe
            return { ...state }
        }

        case DELETE_FILM_SUCCESS: {

            swal.fire('Xóa thành công', ``, 'success')
            const filterFilms = state.dsPhim.filter(film => film.maPhim !== action.maPhim)
            alert('vo reducer')
            return { ...state, films: filterFilms }
        }

        case DELETE_FILM_ERROR: {
            return { ...state, err: action.payload }
        }

        default: return { ...state }
    }
}