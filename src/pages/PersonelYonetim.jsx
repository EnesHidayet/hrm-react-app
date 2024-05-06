import { useNavigate } from "react-router-dom";
import Menu from "../components/molekul/Menu";
import { Link } from "react-router-dom"; // Import Link for routing
import PersonelAra from "../components/molekul/PersonelAra";
import PersonelListesi from "../components/molekul/PersonelListesi";

function PersonelYonetim(){

    const navigate = useNavigate();
    const handleHomeClick = () => {
      navigate('/');
    };  

    return(
        <div  className="container border mt-5">
            <div style={{backgroundColor: '#5b70f3'}} className="row">
                <div style={{width: '70%'}} className="column">
                    <h2 style={{color: '#f0fbff', fontFamily: 'Merriweather,serif'}}>Personel Yönetim Platformu</h2>             
                </div>
                <div  style={{width: '30%'}} className="column text-end mt-2">
                    <PersonelAra></PersonelAra>
                </div>                           
            </div>
            <div className="row">
                <div style={{width: '20%'}} className="column border">
                    <Menu></Menu>
                   
                </div>
                <div style={{width: '80%'}} className="column border">
                    <div style={{width: '100%', height:700, marginLeft: 0, overflowX: 'auto'}} className="row border">
                        <PersonelListesi></PersonelListesi>
                    </div>
                </div>
            </div>

             
        </div>
    )
    ;
}

export default PersonelYonetim;