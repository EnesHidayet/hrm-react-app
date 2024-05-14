import React from "react";
import photos2 from '../media/photos2.jpeg'

const Card1 = () => {
    return (
        <div className="landingpage">

            <img src={photos2} class="video-bg"/>
            <div className="bg-overlay"></div>
            <div className="home-text">
                <h1 className="home-s h1-1">Her Şey Burada</h1>
                <p className="home-s">Başarılı bir işletme için insan kaynakları yönetimine gereken önemi verin, çünkü her şey burada başlar.</p>
            </div>


        </div>
    )
}

export default Card1;
