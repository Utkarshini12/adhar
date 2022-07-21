import { v4 as uuid } from 'uuid';
import Print from '../assets/print.svg';


function Aadhar() {
    const unique_id = uuid();
    const small_id = unique_id.slice(0,12)
    return (
        <div className="p-5 d-flex justify-content-center">
            <div className="card p-5 m-5 bg-dark" style={{ width: 45 + 'rem', height: 50 + 'rem' }}>
                <div className="d-flex justify-content-center">
                
                    <h1 className="bi bi-brightness-alt-high-fill text-danger"></h1>

                </div>

                <div className="bg-success p-1 text-center">
                    <h4>Government Of India</h4>
                </div>

                <div>
                    <p className="lead text-white p-5 text-center">
                        {localStorage.getItem("address")}
                    </p>
                </div>

                <hr />

                <div className='text-danger text-center'>
                    <p className="lead">Your Unique ID </p>
                    <div className="bg-white">
                    <h2 className='text-uppercase'>{small_id ? small_id : "1234 " }</h2>
                    </div>
                   

                </div>

                <hr className=' my-5 text-danger dashed'/>

<div className="row">
<div className='text-white lead col-6 fw-bolder'>
                    <p>First Name: {localStorage.getItem("first")}</p>
                    <p>last Name: {localStorage.getItem("last")}</p>

                    <p>Phone Number : {localStorage.getItem("number")}</p>
                    <p>Email : {localStorage.getItem("email")}</p>
                    <p>Address : {localStorage.getItem("address")}</p>



                </div>

                <div className='p-1 text-center col-6'>
                    <img src={Print} />
                </div>


</div>
                





            </div>
        </div>
    )
}

export default Aadhar;