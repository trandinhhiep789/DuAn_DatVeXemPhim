import React from 'react'
import style from "../../Css/main.css";
export default function Login(props) {
    return (
        <div className='Login_content'>
            <div className='Login_loginPic'>
                <div className='Login_pic'>
                    {/* <img src='../../assets/img/men.jpg' /> */}
                </div>
                <div className='Login_login'>
                    <form>
                        <h1>Đăng nhập</h1>
                        <hr />
                        <div className='form-group'>
                            <p>Tài khoản:</p>
                            <div className='formLogin'>
                                <i class="fa fa-user-alt"></i>
                                <input className='form-control' name='taiKhoan' placeholder='Tài khoản' />
                            </div>
                        </div>
                        <div className='form-group'>
                            <p>Mật khẩu:</p>
                            <div className='formLogin'>
                                <i class="fa fa-lock"></i>
                                <input type='password' className='form-control' name='matKhau' placeholder='Mật khẩu' />
                            </div>
                        </div>
                        <div className='form-group text'>
                            <div>
                                <input type='checkbox' className='mr-1' />
                                <label style={{ margin: 0 }}>Ghi nhớ đăng nhập</label>
                            </div>
                            <div>
                                <a href='/'>Quên mật khẩu?</a>
                            </div>
                        </div>
                        <div className='form-group'>
                            <button className='btn btn-success' type='submit' >Đăng nhập</button>
                        </div>
                        <div className='form-group social-media'>
                            <a href='https://www.facebook.com/'><i class="fab fa-facebook-f social-icon"></i></a>
                            <a href='https://www.google.com/'><i class="fab fa-google-plus-g social-icon"></i></a>
                            <a href='https://twitter.com/'><i class="fab fa-twitter social-icon"></i></a>
                            <a href='https://www.linkedin.com/'><i class="fab fa-linkedin-in social-icon"></i></a>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}
