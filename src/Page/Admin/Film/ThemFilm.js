import React from 'react'
import DrawerForm from './DrawerForm'

export default function ThemFilm() {
    return (
        // border-bottom border-primary
        <div>
            <div className="d-flex">
                <div className="">
                    <div className="mx-3 form-group ">
                        <h5 className="" style={{ padding: 0 }}>Mã phim</h5>
                        <input type="text" className="form-control " id="maPhim" />
                    </div>
                    <div className="mx-3 form-group ">
                        <h5 className="" style={{ padding: 0 }}>Tên phim</h5>
                        <input type="text" className="form-control " id="maPhim" />
                    </div>
                    <div className="mx-3 form-group ">
                        <h5 className="" style={{ padding: 0 }}>Trailer</h5>
                        <input type="text" className="form-control " id="maPhim" />
                    </div>
                </div>

                <div className="">

                    <div className="mx-3 form-group ">
                        <h5 className="" style={{ padding: 0 }}>Đánh giá</h5>
                        <input type="text" className="form-control " id="maPhim" />
                    </div>
                    <div className="mx-3 form-group ">
                        <h5 className="" style={{ padding: 0 }}>Hình ảnh</h5>
                        <input type="file"
                            id="avatar" name="avatar"
                            accept="image/png, image/jpeg" />
                    </div>
                    <div className="mx-3 ">
                        <h5 className="" style={{ padding: 0 }}>Ngày khởi chiếu</h5>
                        <DrawerForm />
                    </div>
                </div>
            </div>
            <div>
                <h5 className="mx-3" style={{ padding: 0 }}>Mô tả</h5>
                <textarea className="form-control mx-3" rows="3"></textarea>
            </div>

        </div>
    )
}
