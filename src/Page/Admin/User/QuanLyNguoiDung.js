import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pagination from '../Film/Pagination'
import User from '../User/User'
import UserTimKiem from './UserTimKiem';
import ThemNguoiDungMoi from '../User/ThemNguoiDungMoi'
import { deleteUser } from '../../../redux/actions/QuanLyNguoiDungAction'
import Axios from 'axios'

import ThemNguoiDung from './ThemNguoiDung';

import { useSelector, useDispatch } from 'react-redux'

export default function QuanLyNguoiDung() {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(50)
    console.log(posts)
    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true)
            const res = await axios.get('https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung')
            setPosts(res.data)
            setLoading(false)
        }
        fetchPost()
    }, [])

    // Get current posts
    const indexOfLastPost = currentPage * postPerPage
    const indexOfFistPost = indexOfLastPost - postPerPage
    const currentPosts = posts.slice(indexOfFistPost, indexOfLastPost)

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const dispatch = useDispatch()
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)


    const xoaNguoiDung = (taiKhoan, maLoaiNguoiDung) => dispatch(deleteUser(taiKhoan, maLoaiNguoiDung));



    const [user, setUser] = useState({
        MaNhom: 'GP01',
        tuKhoa: ''
    })

    const handleChange = (e) => {
        let { value, name } = e.target;
        // Thay đổi giá trị thuộc tính đang onChange
        let newTimKiem = { ...user, [name]: value };
        // Set lại state của userLogin = giá trị mới
        setUser(newTimKiem)
        console.log(newTimKiem);
    }

    const [ketQua, setketQua] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        var form_data = new FormData()

        for (var key in user) {
            console.log(key, user[key])
            form_data.append(key, user[key])
        }
        e.preventDefault()
        Axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${user.tuKhoa}`,
            method: 'GET',
            // data: form_data
        }).then(res => {
            // console.log(res)
            // if (res.data != '') {
            console.log(res)
            setketQua(res.data)

            console.log(res.maLoaiNguoiDung)
            console.log("Tìm kiếm thành công")
            // }
        }).catch(err => {
            console.log("Tìm kiếm thất bại")
            console.log(err.response.data)
        })

    }



    return (
        <div className="container">
            <div className="m-3">
                {/* <ThemNguoiDungMoi /> */}
                <ThemNguoiDung />
            </div>

            {/* khung tim kiếm */}
            <div className="container-1">
                {/* <span className="icon"><i className="fa fa-search"></i></span> */}
                <form onSubmit={handleSubmit}>
                    <span className="icon"><i className="fa fa-search"></i></span>
                    <input name="tuKhoa" id="search" placeholder="Nhập vào tài khoản hoặc họ tên người dùng... " style={{ width: "100%" }} onChange={handleChange} />
                </form>

            </div>
            <div className="mt-">
                <table className="table table-active table-striped table-bordered" >
                    <thead>
                        <tr>
                            <th style={{ width: '15%' }}>Tài khoản</th>
                            <th style={{ width: '15%' }}>Mật khẩu</th>
                            <th style={{ width: '15%' }}>Email</th>
                            <th style={{ width: '15%' }}>Số điện thoại</th>
                            <th style={{ width: '15%' }}>Loại người dùng</th>
                            <th style={{ width: '25%' }}>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody className="ketQuaTimKiem">
                        <UserTimKiem user={user.tuKhoa} ketQua={ketQua} userLogin={userLogin} onDelete={xoaNguoiDung} />
                    </tbody>
                </table>
            </div>

            {/* bảng danh sách tất cả bộ phim */}
            <div className="mt-5">
                <table className="table table-active table-striped table-bordered" >
                    <thead>
                        <tr>
                            {/* <th style={{ width: '10%' }}>STT</th> */}
                            <th style={{ width: '15%' }}>Tài khoản</th>
                            <th style={{ width: '15%' }}>Mật khẩu</th>
                            <th style={{ width: '15%' }}>Email</th>
                            <th style={{ width: '15%' }}>Số điện thoại</th>
                            <th style={{ width: '15%' }}>Loại người dùng</th>
                            <th style={{ width: '25%' }}>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody className="chinhTheTd">
                        <User posts={currentPosts} loading={loading} userLogin={userLogin} onDelete={xoaNguoiDung} />

                    </tbody>

                </table>
                <Pagination postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate} />
            </div>

        </div>
    )
}

