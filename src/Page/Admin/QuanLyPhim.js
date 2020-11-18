import React from 'react'


// khung tim kiem phim < br />
//     bang render ra danh sach phim < br />
//         coi pagination phần qua trang của table < br />
//             chỗ thêm hay hay chỗ nào cần loading thì xài  spinner

//thêm phim coi thức năng drawer của antdesign 

export default function QuanLyPhim() {
    return (
        <div className="container">

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
                            <th>ma phim</th>
                            <th>ten phim</th>
                            <th>hinh anh</th>
                            <th>mo ta</th>
                            <th>ma nhom</th>
                            <th>ngay khoi chieu</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">ma phim</td>
                            <td>ten phim</td>
                            <td>hinh anh</td>
                            <td>mo ta</td>
                            <td>ma nhom</td>
                            <td>ngay khoi chieu</td>
                            <td className="d-flex text-center justify-content-center">
                                <button className="btn mx-3 btn-outline-success">them</button>
                                <button className="btn mx-3 btn-outline-info">sửa</button>
                                <button className="btn mx-3 btn-outline-danger">xóa</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}
