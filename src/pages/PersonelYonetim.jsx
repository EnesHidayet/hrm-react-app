import { useNavigate } from "react-router-dom";
import Menu from "../components/molekul/Menu";
import PersonelListesi from "../components/molekul/PersonelListesi";

function PersonelYonetim(){

    return(
        <div  className="container border mt-5">
         <Menu></Menu>
            <div className="row">            
                <PersonelListesi></PersonelListesi>
            </div>
            <a style={{backgroundColor: '#f1f1f1', color: 'black', borderRadius: '50%', textDecoration: 'none', display: "inline-block", padding: '8px 16px', marginBottom: 10}} href="/user-Demo" >&#8249;</a>
        </div>
    )
    ;
}

export default PersonelYonetim;