import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Film from './Film/Film'
import Pagination from './Film/Pagination'
import ThemPhimTemplate from './Film/ThemPhimMoi'
import { deleteFilm, layDanhSachPhimApiAction } from '../../redux/actions/QuanLyPhimAction'

import { useSelector, useDispatch } from 'react-redux'

// khung tim kiem phim < br />
//     bang render ra danh sach phim < br />
//         coi pagination phần qua trang của table < br />
//             chỗ thêm hay hay chỗ nào cần loading thì xài  spinner

//thêm phim coi thức năng drawer của antdesign 




export default function QuanLyPhim() {




    const dispatch = useDispatch()



    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(5)
    console.log(posts)
    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true)
            const res = await axios.get('https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim')
            setPosts(res.data)
            setLoading(false)
        }
        fetchPost()
        dispatch(layDanhSachPhimApiAction())

    }, [])


    // Get current posts
    const indexOfLastPost = currentPage * postPerPage
    const indexOfFistPost = indexOfLastPost - postPerPage
    const currentPosts = posts.slice(indexOfFistPost, indexOfLastPost)

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    const xoaPhim = (maPhim, maLoaiNguoiDung) => dispatch(deleteFilm(maPhim, maLoaiNguoiDung));
    return (
        <div className="container">
            <div className="m-3">
                <ThemPhimTemplate />
            </div>

            {/* khung tim kiếm */}
            <div className="container-1">
                <span className="icon"><i className="fa fa-search"></i></span>
                <input type="search" id="search" placeholder="Nhập vào tên bộ phim hoặc mã bộ phim cần tìm... " style={{ width: "100%" }} />
            </div>

            {/* bảng danh sách tất cả bộ phim */}
            <div className="mt-5">
                <table className="table table-active table-striped table-bordered" >
                    <thead>
                        <tr>
                            <th style={{ width: '10%' }}>Mã phim</th>
                            <th style={{ width: '10%' }}>Tên phim</th>
                            <th style={{ width: '10%' }}>Hình ảnh</th>
                            <th style={{ width: '30%' }}>Mô tả</th>
                            <th style={{ width: '5%' }}>Mã nhóm</th>
                            <th style={{ width: '10%' }}>Ngày khởi chiếu</th>
                            <th style={{ width: '30%' }}>Các chức năng</th>
                        </tr>
                    </thead>
                    <tbody className="chinhTheTd">

                        <Film posts={currentPosts} loading={loading} onDelete={xoaPhim} />

                    </tbody>

                </table>
                <Pagination postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate} />
            </div>

        </div>
    )
}

