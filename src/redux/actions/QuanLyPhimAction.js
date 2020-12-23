import { DELETE_FILM_ERROR, DELETE_FILM_SUCCESS, LAY_DANH_SACH_PHIM_ACTION } from "../const/QuanLyPhimConst"
import Axios from 'axios'
import { configure } from "@testing-library/react"

//------------------action gọi API  (khong dispatch dữ liệu trực tiếp lên reducer)------------------

export const layDanhSachPhimApiAction = () => {
    return dispatch => {
        //action trả về hàm có tham số dispatch
        var promise = Axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            method: 'GET'
        })

        //thành công
        promise.then((res) => {
            dispatch(layDanhSachPhimApi(res.data))
            // setDSPhim(res.data)
        })

        //Thất bại
        promise.catch((error) => {
            console.log(error.response.data)
        })

    }
}

//viết api lấy chi tiết phim về
//async chạy tuần tự, dễ quản lý code cách 2 của các viết promise
export const layChiTietPhimApiAction = async (maPhim) => {

    return async (dispatch) => {

        try {
            //gọi API lấy dữ liệu về
            let result = await Axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
                method: 'GET',
            })
            console.log(result.data)
            dispatch({
                type: 'LAY_CHI_TIET_PHIM',
                chiTietPhim: result.data
            })
        } catch (err) {
            console.log(err)
        }

    }

    //sau khi lấy dữ liệu dispatch lên reducer rồi cập nhật cho chi tiết phim

}


export const layThongTinPhongVeAPIAction = async (maLichChieu) => {
    return async (dispatch) => {
        try {
            //gọi API lấy dữ liệu về
            const { data, status } = await Axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
                method: 'GET',
            })

            console.log(data)

            //thành công lấy dữ liệu cập nhật thông tin phòng vé
            if (status === 200) {

                dispatch({
                    type: 'THONG_TIN_PHONG_VE',
                    thongTinPhongVe: data
                })
            }

        } catch (err) {
            console.log(err)
        }
    }
}



//------------------action dispatch reducer------------------
export const layDanhSachPhimApi = (dataphim) => {
    return {
        type: LAY_DANH_SACH_PHIM_ACTION,
        dsPhim: dataphim
    }
}


//DELETE---------------------------------------------------------

export const deleteFilmSuccess = (maPhim) => {
    return {
        type: DELETE_FILM_SUCCESS,
        maPhim,
    }
}

export const deleteFilmError = (data) => {
    return {
        type: DELETE_FILM_ERROR,
        payload: data,
    }
}



export const deleteFilm = (maPhim, maLoaiNguoiDung) => {




    return (dispatch) => {
        if (maLoaiNguoiDung === "QuanTri") {
            console.log('huhuhhuhuhuhuhuhuhuhuhhuhuhuhuhuhuhuhuhuh')

            console.log(maPhim)
            return Axios.delete(`
        https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`)
                .then(() => {
                    dispatch(deleteFilmSuccess(maPhim))
                }).catch((err) => {
                    const errorPayLoad = {}

                    errorPayLoad['message'] = err.response.data.message
                    errorPayLoad['status'] = err.response.status

                    dispatch(deleteFilmError(errorPayLoad))
                })
        }
        else {
            alert("CHỈ QUẢN TRỊ MỚI XÓA ĐƯỢC");
        }
    }
}



// vd: mình chỉ cần dispatch 1 lần bên trang chủ, còn lại mình dispatch bên đây

// export const getHome = () =>{
//     return dispatch => {
//         
//         // dispatch(carousel())
//         // dispatch(getFilm())
//     }
// }