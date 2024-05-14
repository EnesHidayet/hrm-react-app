import { useState } from 'react';
import { RiUserSettingsLine } from "react-icons/ri";

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
        <div className="container container-xxl mt-5" style={{height: 600}}>
            <div className="row align-items-center" style={{height: "10%"}}>
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
