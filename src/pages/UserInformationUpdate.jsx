

function UserInformationUpdate(){
    
    return(
        <div className="container border radius mt-5" style={{width: 400, height: 600, overflowX: 'auto'}}>
            <form>
                <div className="text-center mt-2">
                    <img src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png" style={{width: 60}}/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Employee Id</label>
                    <input type="text" className="form-control" disabled placeholder="31sj6931"/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Identity Number</label>
                    <input type="text" className="form-control" disabled placeholder="31sj6931"/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Full Name</label>
                    <input type="text" className="form-control" disabled placeholder="con weak"/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Email Address</label>
                    <input type="email" className="form-control" disabled placeholder="reactnefreti@gmail.com"/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Birth Date</label>
                    <input type="email" className="form-control" disabled placeholder="20.05.2000"/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Phone Number</label>
                    <input type="email" className="form-control" placeholder="05387627835"/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Address</label>
                    <input type="email" className="form-control" placeholder="Üsküdar/İstanbul"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default UserInformationUpdate;