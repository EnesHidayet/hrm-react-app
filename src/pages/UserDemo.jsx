import { useState } from 'react';
import { RiUserSettingsLine } from "react-icons/ri";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";   

function handleClick() {
    console.log('İkon tıklandı!');
    // İkon tıklandığında yapılacak işlemleri buraya yazabilirsiniz
  }
  

function UserDemo(){

    const [selectedButton, setSelectedButton] = useState(null);

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const handleButtonHover = (buttonName) => {
        setSelectedButton(buttonName);
    };

    const handleButtonLeave = () => {
        setSelectedButton(null);
    };

    const Row = (user)=>{
        return <tr>
                  <td>{user.id.value}</td>
                  <td>{user.name.first}</td>
                  <td>{user.location.city}</td>
                  <td>{user.phone}</td>
                  <td><img src={user.picture.large}></img></td>
              </tr>;
      }

    return(
        <div className="container border border-black mt-5" style={{width: 800*1.6, height: 600}}>
            <div className="row align-items-center border border-success" style={{height: 50}}>
                <div className="column object-fit-fill" style={{width: 198*1.6, height: 50}}>
                    <img src='https://akademi.bilgeadam.com/wp-content/uploads/2021/03/akademilogo-yatay-01.png' class="rounded img-fluid" style={{height: 45}}/>
                </div>
                <div style={{width: 550*1.6, height: 50}}>
                    <h2>BILGE ADAM ACADEMY</h2>
                </div>
                <a href="/user-information-update" style={{ width: 48 * 1.6, height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', color: selectedButton === 'user' ? 'blue' : 'black' }}
                    onMouseEnter={() => handleButtonHover('user')} onMouseLeave={handleButtonLeave}>
                    <RiUserSettingsLine size={selectedButton === 'user' ? 36 : 30} onClick={handleClick} />
                </a>
                {/* <div className='container' style={{display: 'none'}}>
                    <a href='/settings'></a>
                    <a href='izinler'></a>
                    <a href='boşlar'></a>
                </div> */}
            </div>
            <div className="row align-items-center border border-success" style={{height: 200}}>
                <div className="column border rounded" style={{width: 198*1.6, height: 200}}>
                    <div className="row" style={{width: 198*1.6, height: 125}}>
                        <div class="col-3 ">
                            5
                        </div>
                        <div class="col-6 text-center">
                            <img src='https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png' className="rounded img-fluid" style={{height: 120}}/>
                        </div>
                        <div class="col-3 ">
                            7
                        </div>
                    </div>
                    <div className="row " style={{width: 198*1.6, height: 75}}>
                        <div className="row text-center" style={{width: 198*1.6, height: 35, marginLeft: 0}}>
                            <p className='mt-1'>Title</p>
                        </div>
                        <div className="row text-center" style={{width: 198*1.6, height: 40, marginLeft: 0}}>
                            <p>Name Surname</p>
                        </div>
                    </div>
                </div>
                <div className="column " style={{width: 640, height: 200}}>
                    <div className='row border rounded' style={{height: 50}}>
                        Cart
                    </div>
                    <div className='row border rounded' style={{height: 50}}>
                        Curt
                    </div>
                    <div className='row border rounded' style={{height: 50}}>
                        Zart
                    </div>
                    <div className='row border rounded' style={{height: 50}}>
                        Zurt
                    </div>
                </div>
                <div className="column " style={{width: 198*1.6, height: 200}}>
                    <div className='w-[50px] border' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div class="column " style={{width: 24, height: 25, display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', margin: '0 5px', color: selectedButton === 'beforeY' ? 'blue' : 'black'}} 
                            onMouseEnter={() => handleButtonHover('beforeY')} onMouseLeave={handleButtonLeave}>
                            <FaAnglesLeft size={selectedButton === 'beforeY' ? 25 : 20} onClick={handleClick}/>
                        </div>
                        <div class="column " style={{width: 24, height: 25, display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', margin: '0 5px', color: selectedButton === 'beforeM' ? 'blue' : 'black'}} 
                            onMouseEnter={() => handleButtonHover('beforeM')} onMouseLeave={handleButtonLeave}>
                            <FaAngleLeft size={selectedButton === 'beforeM' ? 25 : 20} onClick={handleClick}/>
                        </div>
                        <div style={{ margin: '0 10px' }}>{"Patagonya 2024"}</div>
                        <div class="column " style={{width: 24, height: 25, display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', margin: '0 5px', color: selectedButton === 'afterM' ? 'blue' : 'black'}} 
                            onMouseEnter={() => handleButtonHover('afterM')} onMouseLeave={handleButtonLeave}>
                            <FaAngleRight size={selectedButton === 'afterM' ? 25 : 20} onClick={handleClick}/>
                        </div>
                        <div class="column " style={{width: 24, height: 25, display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', margin: '0 5px', color: selectedButton === 'afterY' ? 'blue' : 'black'}} 
                            onMouseEnter={() => handleButtonHover('afterY')} onMouseLeave={handleButtonLeave}>
                            <FaAnglesRight size={selectedButton === 'afterY' ? 25 : 20} onClick={handleClick}/>
                        </div>
                        {/* <div style={{ margin: '0 10px' }}>{"<<"}</div>
                        <div style={{ margin: '0 10px' }}>{"<"}</div>
                        <div style={{ margin: '0 10px' }}>{"May 2024"}</div>
                        <div style={{ margin: '0 10px' }}>{">"}</div>
                        <div style={{ margin: '0 10px' }}>{">>"}</div> */}
                    </div>
                    <div>
                            {daysOfWeek.map((day)=>(
                            <div className='column border text-center' style={{width: 41.8, height: 25, display: 'inline-block'}}>{day}</div>
                            ))}
                    </div>
                </div>  
            </div>
            <div className="row align-items-center border border-success" style={{height: 350}}>
                <div class="column object-fit-fill border rounded" style={{width: 398*1.6, height: 350}}>
                    10
                </div>  
                <div className="column object-fit-fill border rounded" style={{width: 398*1.6, height: 350, overflowX: 'auto'}}>
                    <table className="table table-striped">
                        <thead className='table-info'>
                            <tr>
                                <th scope="col">#</th>
                                <th>Name</th>
                                <th>Product_Num</th>
                                <th>Explenation</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            {/* {isLoading ? <Loading /> : null}
                                {users.map((user)=>{  
                                    return  Row(user);
                                    })
                                } */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserDemo;
