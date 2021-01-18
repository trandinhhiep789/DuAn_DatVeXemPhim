import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import DrawerForm from './DrawerForm'

export default function ThemFilm() {

    const [phim, setPhim] = useState({
        hinhAnh: {},
        maPhim: '',
        danhGia: '',
        tenPhim: '',
        maNhom: 'GP01',
        maTa: '',
        trailer: '',
    })

    const handleChange = (e) => {
        let { value, name } = e.target;

        if (name === 'hinhAnh') {
            let newPhim = { ...phim, hinhAnh: e.target.files[0] };
            setPhim(newPhim)
        }
        else {
            // Thay đổi giá trị thuộc tính đang onChange
            let newPhim = { ...phim, [name]: value };
            // Set lại state của userLogin = giá trị mới
            setPhim(newPhim)
            console.log(newPhim);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        var form_data = new FormData()

        for (var key in phim) {
            console.log(key, phim[key])
            form_data.append(key, phim[key])
        }
        e.preventDefault()

        Axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh',
            method: 'POST',
            data: form_data
        }).then(res => {
            console.log(res)
            console.log("Thêm phim thành công")
            alert("Thêm phim thành công")
        }).catch(err => {
            console.log("Thêm phim thất bại")
            alert("Thêm phim thất bại")
            console.log(err.response.data)
        })

    }




    return (
        // border-bottom border-primary
        <form onSubmit={handleSubmit}>
            <div className="d-flex ">
                <div>
                    <div className="mx-3 form-group ">
                        <h5 className="" style={{ padding: 0 }}>Mã phim</h5>
                        <input type="text" className="form-control " name="maPhim" onChange={handleChange} />
                    </div>
                    <div className="mx-3 form-group ">
                        <h5 className="" style={{ padding: 0 }}>Tên phim</h5>
                        <input type="text" className="form-control " name="tenPhim" onChange={handleChange} />
                    </div>
                    <div className="mx-3 form-group ">
                        <h5 className="" style={{ padding: 0 }}>Trailer</h5>
                        <input type="text" className="form-control " name="trailer" onChange={handleChange} />
                    </div>
                </div>

                <div className="">

                    <div className="mx-3 form-group ">
                        <h5 className="" style={{ padding: 0 }}>Đánh giá</h5>
                        <input type="text" className="form-control " name="danhGia" onChange={handleChange} />
                    </div>
                    <div className="mx-3 form-group ">
                        <h5 className="" style={{ padding: 0 }} >Hình ảnh</h5>
                        <input type="file" name="hinhAnh" onChange={handleChange} />
                    </div>
                    <div className="mx-3 form-group ">
                        <h5 className="" style={{ padding: 0 }}>Mã nhóm</h5>
                        <input type="text" className="form-control " name="maNhom" value="GP01" onChange={handleChange} />
                    </div>
                    {/* <div className="mx-3 ">
                        <h5 className="" style={{ padding: 0 }}>Ngày khởi chiếu</h5>
                        <DrawerForm />
                    </div> */}
                </div>
            </div>
            <div>
                <h5 className="mx-3" style={{ padding: 0 }}>Mô tả</h5>
                <textarea className="form-control mx-3" rows="3" name="moTa" onChange={handleChange}></textarea>
            </div>

            <button className="btn btn-danger mt-5 ml-3 w-100" >Thêm</button>

        </form>
    )
}
