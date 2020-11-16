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
        </div>
    )
}
