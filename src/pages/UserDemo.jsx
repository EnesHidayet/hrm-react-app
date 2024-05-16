import React, { useState } from 'react';
import { RiUserSettingsLine } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { BiSolidCommentEdit } from "react-icons/bi";
import UserCard from '../components/molekul/UserCard';
import PersonelYonetim from './PersonelYonetim';
import AddComment from './AddComment';
import ExpensesYonetim from './ExpensesPage';

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
        <div className="container-fluid container-box" style={{ height: '100vh' }}>
            <div className="row align-items-center  user-menu" style={{ height: "8%" }}>
                <div className="column border border-black " style={{ width: "13%", height: "100%" }}>
                    <h3 className="mt-2 text-center">simpleIK</h3>
                </div>
                <div className="column border border-black" style={{ width: "77%", height: "100%" }}></div>
                <div className="column border border-black" style={{ width: "10%", height: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <a href="/user-information-update" style={{ color: selectedButton === 'user' ? '#B4FEE7' : 'white' }}
                        onMouseEnter={() => handleButtonHover('user')} onMouseLeave={handleButtonLeave}>
                        <RiUserSettingsLine size={selectedButton === 'user' ? 36 : 30} onClick={handleClick} />
                    </a>
                </div>
            </div>
            <div className="row align-items-center" style={{ height: "92%" }}>
                <div className="column border border-black user-menu " style={{ width: "13%", height: "100%"}}>
                    <div className='row' style={{ height: '35%' }}>
                        <UserCard />
                    </div>
                    <div className='row' style={{ height: '55%' }}>
                        <a style={{ cursor: "pointer" }} onClick={() => openModal('personelYonetim')}>Personel Yönetim</a>
                        {openModals['personelYonetim'] && <PersonelYonetim id="personelYonetim" isModalOpen={openModals['personelYonetim']} closeModal={closeModal} />}
                        <a style={{ cursor: "pointer" }} onClick={() => openModal('expensesYonetim')}>Harcama Yönetim</a>
                        {openModals['expensesYonetim'] && <ExpensesYonetim id="expensesYonetim" isModalOpen={openModals['expensesYonetim']} closeModal={closeModal} />}
                    </div>
                    <div className='row' style={{ height: '15%' }}>
                        <div style={{ textAlign: 'left' }}>
                            <IoIosSettings /> Settings
                            <br />
                            <BiSolidCommentEdit />
                            <a style={{ cursor: "pointer" }} onClick={() => openModal('yorumYap')}> Yorum Yap</a>
                            {openModals['yorumYap'] && <AddComment id="yorumYap" isModalOpen={openModals['yorumYap']} closeModal={closeModal} />}
                        </div>
                    </div>
                </div>
                <div className="column border border-black" style={{ width: "29%", height: "100%" }}></div>
                <div className="column border border-black" style={{ width: "29%", height: "100%" }}></div>
                <div className="column border border-black" style={{ width: "29%", height: "100%" }}></div>
            </div>
        </div>
    );
}

export default USERDemo;
