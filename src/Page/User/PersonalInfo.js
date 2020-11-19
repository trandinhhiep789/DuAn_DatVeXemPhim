import React from 'react'
import { useSelector } from 'react-redux'
export default function PersonalInfo(props) {
    const userLogin = useSelector(state => state.QuanLyNguoiDungReducer.userLogin);
    console.log(userLogin);
    return (
        <div className='PersonalInfo_conent'>
            <div className='personalInfo_banner'>

            </div>
            <div className='personalInfo_info container'>
                <div>
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <a className="nav-link active" id="nav-home-tab" data-toggle="tab" href="#personal-info" role="tab" aria-controls="nav-home" aria-selected="true">THÔNG TIN CÁ NHÂN</a>
                            <a className="nav-link" id="nav-profile-tab" data-toggle="tab" href="#history-booking" role="tab" aria-controls="nav-profile" aria-selected="false">LỊCH SỬ ĐẶT VÉ</a>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="personal-info" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className='personal_information'>
                                <div className='row'>
                                    <div className='col-6 personalInfo_left'>
                                        <p>Email: <span>{userLogin.email}</span></p>
                                        <p>Họ tên: <span>{userLogin.hoTen}</span></p>
                                        <p>Số điện: <span>{userLogin.soDT}</span></p>
                                    </div>
                                    <div className='col-6 personalInfo_right'>
                                        <p>Tài khoản: <span>{userLogin.taiKhoan}</span></p>
                                        <p>Mật khẩu: <span></span></p>
                                        <a href=''>Cập nhật</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="history-booking" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div className='history_booking'>
                                LỊCH SỬ ĐẶT VÉ
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
