import React, { useState, useEffect } from 'react'
import TaoLichChieu from './TaoLichChieu'


import { useSelector, useDispatch } from 'react-redux'

export const Film = ({ posts, loading, onDelete }) => {

    if (loading) {
        return <h2>loading...</h2>
    }


    // const dispatch = useDispatch()

    // useEffect((maPhim) => {
    //     dispatch(deleteFilm(maPhim))
    // }, [])


    return (

        //cách viết 2
        <>
            {posts.map(post => (
                <tr>
                    <td scope="row">{post.maPhim}</td>
                    <td>{post.tenPhim}</td>
                    <td><img src={post.hinhAnh} style={{ width: 50, height: 50 }} /></td>
                    <td><div className="text-overflow">{post.moTa}</div></td>
                    <td>{post.maNhom}</td>
                    <td>{post.ngayKhoiChieu}</td>
                    <td className="d-flex justify-content-center">
                        <TaoLichChieu />
                        <button className="btn mx-3 btn-outline-info">sửa</button>
                        <button className="btn btn-outline-danger" onClick={() => onDelete(post.maPhim, post.maLoaiNguoiDung)} >X</button>
                    </td>
                </tr>

            ))
            }

        </>
    )
}

export default Film

