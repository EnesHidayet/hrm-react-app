import React, { useState } from 'react';
import { RiUserSettingsLine } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { BiSolidCommentEdit } from "react-icons/bi";
import UserCard from '../components/molekul/UserCard';
import PersonelYonetim from './PersonelYonetim';
import AddComment from './AddComment';

function handleClick() {
    console.log('İkon tıklandı!');
    // İkon tıklandığında yapılacak işlemleri buraya yazabilirsiniz
}

function USERDemo() {
    const [openModals, setOpenModals] = useState({});
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonHover = (buttonName) => {
        setSelectedButton(buttonName);
    };

    const handleButtonLeave = () => {
        setSelectedButton(null);
    };

    const openModal = (id) => {
        setOpenModals(prevState => ({ ...prevState, [id]: true }));
    };

    const closeModal = (id) => {
        setOpenModals(prevState => ({ ...prevState, [id]: false }));
    };

    return (
        <div className="container-fluid mt-1" style={{ height: 700 }}>
            <div className="row align-items-center" style={{ height: "8%" }}>
                <div className="column border border-black" style={{ width: "10%", height: "100%" }}>
                    <h3 className="mt-2">simpleIK</h3>
                </div>
                <div className="column border border-black" style={{ width: "80%", height: "100%" }}></div>
                <div className="column border border-black" style={{ width: "10%", height: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <a href="/user-information-update" style={{ color: selectedButton === 'user' ? 'blue' : 'black' }}
                        onMouseEnter={() => handleButtonHover('user')} onMouseLeave={handleButtonLeave}>
                        <RiUserSettingsLine size={selectedButton === 'user' ? 36 : 30} onClick={handleClick} />
                    </a>
                </div>
            </div>
            <div className="row align-items-center" style={{ height: "90%" }}>
                <div className="column border border-black" style={{ width: "10%", height: "100%" }}>
                    <div className='row border' style={{ height: '30%' }}>
                        <UserCard />
                    </div>
                    <div className='row border' style={{ height: '55%' }}>
                        <a style={{ cursor: "pointer" }} onClick={() => openModal('personelYonetim')}>Personel Yönetim</a>
                        {openModals['personelYonetim'] && <PersonelYonetim id="personelYonetim" isModalOpen={openModals['personelYonetim']} closeModal={closeModal} />}
                    </div>
                    <div className='row border' style={{ height: '15%' }}>
                        <div style={{ textAlign: 'left' }}>
                            <IoIosSettings /> Settings
                            <br />
                            <BiSolidCommentEdit />
                            <a style={{ cursor: "pointer" }} onClick={() => openModal('yorumYap')}> Yorum Yap</a>
                            {openModals['yorumYap'] && <AddComment id="yorumYap" isModalOpen={openModals['yorumYap']} closeModal={closeModal} />}
                        </div>
                    </div>
                </div>
                <div className="column border border-black" style={{ width: "30%", height: "100%" }}></div>
                <div className="column border border-black" style={{ width: "30%", height: "100%" }}></div>
                <div className="column border border-black" style={{ width: "30%", height: "100%" }}></div>
            </div>
        </div>
    );
}

export default USERDemo;
