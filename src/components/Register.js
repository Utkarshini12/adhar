import { useState } from 'react';
import { Link } from 'react-router-dom';



export default function Register() {
  const [signUpData, setSignupData] = useState({});
  const [show, setShow] = useState(false); 

  const signupFn = (e) => {
    e.preventDefault(); 

    const data = {
      first: e.target.first.value,
      last: e.target.last.value,
      number: e.target.number.value,
      email: e.target.email.value,
      password: e.target.password.value,
      address: e.target.address.value

    }
    setSignupData(data); 

    localStorage.setItem("first", data.first);
    localStorage.setItem("last", data.last);
    localStorage.setItem("number", data.number);
    localStorage.setItem("email", data.email);
    localStorage.setItem("address", data.address);


    window.location.href = '/home'

    console.log(signUpData);

    

  }

 

  return (
    <form onSubmit={signupFn}>

 <div className="text-danger">
      <p className="lead text-muted">START FOR FREE</p>
      <h1 className='my-3 text-white'>  {show ? "Register Yourself" : "Login "} for Aadhar</h1>
      <hr />

      {show ? (<div>
        <div className="d-flex mt-4">
        <div className="input-group input-group-lg me-1">
          <span className='input-group-text'><i className="bi bi-person"></i></span>
          <input type="text" placeholder="First Name" className='form-control' name="first" />
        </div>
        <div className="input-group input-group-lg ms-1">
          <span className='input-group-text'><i className="bi bi-person"></i></span>
          <input type="text" placeholder="Last Name" className='form-control' name="last" />
        </div>
      </div>
      <div className="input-group input-group-lg my-2">
        <span className='input-group-text'><i className="bi bi-phone"></i></span>
        <input type="tel" placeholder=" Phone Number" className='form-control' name="number" />
      </div>

      <div className="input-group input-group-lg my-2">
        <span className='input-group-text'><i className="bi bi-envelope"></i></span>
        <input type="email" placeholder="Email" className='form-control' name="email" />
      </div>

      <div className="input-group input-group-lg my-2">
        <span className='input-group-text'><i className="bi bi-incognito"></i></span>
        <input type="password" placeholder="Password" className='form-control' name="password" />
      </div>

      <div className="input-group input-group-lg my-2">
        <span className='input-group-text'><i className="bi bi-house"></i></span>
        <textarea type="text" placeholder="Address" className='form-control' name="address" />
      </div>

      </div>) : (
        <div>
            <div className="input-group input-group-lg my-2">
        <span className='input-group-text'><i className="bi bi-envelope"></i></span>
        <input type="email" placeholder="Email" className='form-control' name="email" />
      </div>

      <div className="input-group input-group-lg my-2">
        <span className='input-group-text'><i className="bi bi-incognito"></i></span>
        <input type="password" placeholder="Password" className='form-control' name="password" />
      </div>


        </div>
      ) }
      

      <div className="text-center my-5 ">
     
        <button type="submit" className='btn btn-danger p-3 form-control'>SUBMIT</button>
    
      </div>
     
      <h4 className="m-4 text-white text-center shadow-lg" onClick={()=> setShow(!show)}>{show ? "Already have an Account? Login" : "Don't have an account? Signup"}</h4>
    </div>
    </form>
   
  )
}