import React from "react";
import photos3 from '../media/photos3.jpg'

const Card1 = () => {
    return (
        <div className="landingpage">

            <img src={photos3} class="video-bg"/>
            <div className="bg-overlay"></div>
            <div className="home-text">
                <h1 className="home-s h1-1">Yenilikçi Yaklaşımlarla!</h1>
                <p className="home-s">İnsan kaynakları yönetiminde yenilikçi stratejiler kullanarak çalışanların potansiyelini en iyi şekilde yönetin.</p>
            </div>


        </div>
    )
}

export default Card1;
