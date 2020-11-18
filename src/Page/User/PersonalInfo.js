import React from 'react'
export default function PersonalInfo(props) {
    return (
        <div className='PersonalInfo_conent'>
            <div className='personalInfo_carousel'>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://kenhcine.cgv.vn/media/catalog/product/t/t/ttm_1920x1080px.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/28/1468512306-final-four-jaegers.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://wallpaperaccess.com/full/1076811.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
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
                                        <p>Email: <span></span></p>
                                        <p>Họ tên: <span></span></p>
                                        <p>Số điện: <span></span></p>
                                    </div>
                                    <div className='col-6 personalInfo_right'>
                                        <p>Tài khoản: <span></span></p>
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
