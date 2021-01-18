import React from 'react'

export const UserTimKiem = ({ user, ketQua, userLogin, onDelete }) => {

    if (ketQua == '') {
        return <h2></h2>
    }

    // const filterFilms = state.dsPhim.filter(film => film.maPhim !== action.maPhim)
    // alert('vo reducer')
    // return { ...state, films: filterFilms }
    const renderUser = () => {
        const filterUser = ketQua.filter(ketQua => user == ketQua.taiKhoan)
        return { ...ketQua, ketQua: filterUser }
    }

    return (
        //cách viết 2
        <>
            {renderUser}

            {ketQua.map(kq => (

                <tr>
                    <td scope="row">{kq.taiKhoan}</td>
                    <td>{kq.matKhau}</td>
                    <td>{kq.email}</td>
                    <td>{kq.soDt}</td>
                    <td>{kq.maLoaiNguoiDung}</td>

                    <td className="d-flex justify-content-center">
                        <button className="btn btn-outline-success">Ghi danh</button>
                        <button className="btn mx-3 btn-outline-info">sửa</button>
                        <button className="btn btn-outline-danger" onClick={() => onDelete(kq.taiKhoan, userLogin.maLoaiNguoiDung)}>X</button>
                    </td>
                </tr>

            ))
            }

        </>
    )
}

export default UserTimKiem

