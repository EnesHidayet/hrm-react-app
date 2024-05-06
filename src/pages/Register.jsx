import React,{useState} from 'react';

function Register(){

    const [fullName,setFullName] = useState('');     
    const [email,setEmail] = useState('');     
    const [title,setTitle] = useState('');     
    const [phoneNumber,setPhoneNumber] = useState('');     
    const [password,setPassword] = useState('');

    return(
        <div className="container border border-primary mt-5 wrapper fadeInDown" style={{width: '400px', height: '620px'}}>
            <div>
                <h1 className='text-center mt-2 p-2'>Register</h1>
                <form>
                <div className="mb-3">
                    <label  className="form-label">Title</label>
                    <input onChange={(evt)=>{setTitle(evt.target.value)}} type="text" className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Full Name</label>
                    <input onChange={(evt)=>{setFullName(evt.target.value)}} type="text" className="form-control" id="fullName" />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Email Address</label>
                    <input onChange={(evt)=>{setEmail(evt.target.value)}} type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Phone Number</label>
                    <input onChange={(evt)=>{setPhoneNumber(evt.target.value)}} type="text" className="form-control" id="phoneNumber" />
                   
                </div>
                <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input onChange={(evt)=>{setPassword(evt.target.value)}} type="password" className="form-control" id="password"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" >Check me out</label>
                </div >
                <div className="text-end">
                    <button onClick={register} type="submit" className="btn btn-primary text-end">Submit</button>
                </div>
            </form>
            </div>
        </div>
    );
}
 
export default Register;