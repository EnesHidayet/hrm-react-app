import React from "react";
import photos4 from '../media/photos4.jpg'
import './CommentSection'
import CommentSection from "./CommentSection";


const Card4 = () => {
    return (
        <div style={{backgroundImage: `url(${photos4})`, height: '100vh', width: '100%'
    }} className="home-text">
            
            <div style={{marginLeft: '50px'}}  className="home-text">
                <h1 className="home-s h1-1">Potansiyeli Ortaya Çıkarın, Başarıyı Yakalayın.</h1>
            </div>
            <div className="home-text">
                <CommentSection/>
            </div>
            

        </div>
    )
}

export default Card4;
