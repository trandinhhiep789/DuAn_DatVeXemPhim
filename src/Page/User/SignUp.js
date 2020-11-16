import React, { useState } from 'react'
// import './SignUp.scss'
export default function SignUp(props) {
    const [error, setError] = useState({
        hoTen: "",
        phoneNumber: "",
        email: "",
    })
    const handleChangeInput = (e) => {
        let { name, value } = e.target;
        let types = e.target.getAttribute("types");
        let newErrors = { ...error };
        newErrors[name] = value.trim() === "" ? "Không được bỏ trống" : "";
        setError(newErrors)
        if (types === "phoneNumber") {
            const regexNumber = /^[0-9]+$/;
            if (!regexNumber.test(value.trim())) {
                newErrors[name] = "* Dữ liệu phải là số !";
            }
        }
        if (types === "email") {
            const regexNumber = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regexNumber.test(value.trim())) {
                newErrors[name] = "* Email không hợp lệ !";
            }
        }
        if (types === "hoTen") {
            const regexNumber = /^[A-Za-z ]+$/;
            if (!regexNumber.test(value.trim())) {
                newErrors[name] = "* Dữ liệu phải là chữ !";
            }
        }
    }
    return (
        <div className='SignUp_content'>
            <div className='SignUp_loginPic'>
                <div className='SignUp_pic'>

                </div>
                <div className='SignUp_login'>
                    <form>
                        <h1>Đăng ký</h1>
                        <hr />
                        <div className='form-group'>
                            <p className='title'>Tài khoản:</p>
                            <div className='formSigup'>
                                <i class="fa fa-user-alt"></i>
                                <input className='form-control' name='taiKhoan' placeholder='Tài khoản' />
                            </div>

                        </div>
                        <div className='form-group'>
                            <p className='title'>Mật khẩu:</p>
                            <div className='formSigup'>
                                <i class="fa fa-lock"></i>
                                <input type='password' className='form-control' name='matKhau' placeholder='Mật khẩu' />
                            </div>

                        </div>
                        <div className='form-group'>
                            <p className='title'>Họ tên:</p>
                            <div className='formSigup'>
                                <i class="fa fa-address-card"></i>
                                <input types='hoTen' name='hoTen' className='form-control' placeholder='Họ tên' onChange={handleChangeInput} />
                            </div>
                            <p className="text-danger error">{error.hoTen}</p>
                        </div>
                        <div className='form-group'>
                            <p className='title'>Email:</p>
                            <div className='formSigup'>
                                <i class="fa fa-envelope"></i>
                                <input types='email' name='email' className='form-control' placeholder='Email' onChange={handleChangeInput} />
                            </div>
                            <p className="text-danger error">{error.email}</p>
                        </div>
                        <div className='form-group'>
                            <p className='title'>Số điện thoại:</p>
                            <div className='formSigup'>
                                <i class="fa fa-mobile-alt"></i>
                                <input types='phoneNumber' name='phoneNumber' className='form-control' placeholder='Số điện thoại' onChange={handleChangeInput} />
                            </div>
                            <p className="text-danger error">{error.phoneNumber}</p>
                        </div>
                        <div className='form-group'>
                            <button className='btn btn-success'>Đăng ký</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}