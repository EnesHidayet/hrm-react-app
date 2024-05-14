import { useState } from 'react';
import { RiUserSettingsLine } from "react-icons/ri";
import UserCard from '../components/molekul/UserCard';

function handleClick() {
    console.log('İkon tıklandı!');
    // İkon tıklandığında yapılacak işlemleri buraya yazabilirsiniz
  }

function USERDemo() {

    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonHover = (buttonName) => {
        setSelectedButton(buttonName);
    };

    const handleButtonLeave = () => {
        setSelectedButton(null);
    };

    return (
        <div className="container-fluid mt-2" style={{height: 800}}>
            <div className="row align-items-center" style={{height: "8%"}}>
                <div className="column border border-black" style={{width: "10%", height: "100%"}}>
                        <h3 className="mt-2">simpleIK</h3>
                </div>
                <div className="column border border-black" style={{width: "80%", height: "100%"}}>

                </div>
                <div className="column border border-black" style={{width: "10%", height: "100%"}}>
                    <a href="/user-information-update" style={{ width: "100%", height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', color: selectedButton === 'user' ? 'blue' : 'black' }}
                        onMouseEnter={() => handleButtonHover('user')} onMouseLeave={handleButtonLeave}>
                        <RiUserSettingsLine size={selectedButton === 'user' ? 36 : 30} onClick={handleClick} />
                    </a>
                </div>
            </div>
            <div className="row align-items-center" style={{height: "90%"}}>
                <div className="column border border-black" style={{width: "10%", height: "100%"}}>
                    <div className='row border' style={{height: '30%'}}>
                        <UserCard/>
                    </div>
                    <div className='row border' style={{height: '55%'}}>
                    <a href="/personel-yonetim">Personel Yönetim</a>


                    </div>
                    <div className='row border' style={{height: '15%'}}></div>
                </div>
                <div className="column border border-black" style={{width: "30%", height: "100%"}}>

                </div>
                <div className="column border border-black" style={{width: "30%", height: "100%"}}>

                </div>
                <div className="column border border-black" style={{width: "30%", height: "100%"}}>

                </div>
            </div>
        </div>
    )
}

export default USERDemo;