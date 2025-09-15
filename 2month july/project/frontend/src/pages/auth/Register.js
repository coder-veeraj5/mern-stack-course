

import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import facebook from "../../accets/facebooklogo.png";
import loginimg from "../../accets/login-img.png";
import instalogo from "../../accets/instalogo.jpg";
import dropdown from "../../accets/dropdown.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Register() {
const [password, setpassword] = useState()
const [email, setemail] = useState()
const [username, setusername] = useState()
const [mobile, setmobile] = useState()
const submitform= async()=>{
  try {
    
    console.log("username",username);
    
    console.log("email",email);
    console.log("password",password);

    const apiresponse= await axios.post("http://localhost:9090/api/auth/register",{
  userName:username,
    email:email,
    password:password,
mobileNo:mobile
    });

    console.log(apiresponse);
    

  } catch (error) {
    console.log(error);
    
  }
}

  return (
    <div>
      <div className="container con mt-5">
        <div className="row    main-row text-center ">
          
          <div className="col-md-12 mt-5">
            <div className="rinstaimg text-center">
              <img src={instalogo} className="  mb-3" />
              <p>Sign up to see photos and videos from your friends.</p>
              <button className="btn-login mb-3"> <img  src="https://www.pngall.com/wp-content/uploads/13/Facebook-White-Logo-PNG.png"/>Login with facebook</button>
            </div>

               <div className="lineor mb-3 ">
              <div className="line1"></div>
              <br />
              <div className="or">OR</div>
              <br />
              <div className="line2"></div>
            </div>

            {/* <div className="input mb-3">
              <input
                type="text"
                placeholder="Phone number,username or email"
                className=" reg-input"
              />
            </div> */}
               <div className="input mb-3">
              <input
                type="text"
                placeholder="Username"
                className="  reg-input inputpassword"
                     onChange={(e)=>setusername(e.target.value)}
              />
            </div>

<div className="input mb-3">
              <input
                type="number"
                placeholder="Enter mobile No."
                className="  reg-input inputpassword"
                     onChange={(e)=>setmobile(e.target.value)}
              />
            </div>
             <div className="input mb-3">
              <input
                type="text"
                placeholder="email"
                className="  reg-input inputpassword"
                     onChange={(e)=>setemail(e.target.value)}
              />
            </div>
           
            
          
             <div className="input mb-3">
              <input
                type="text"
                placeholder="Password"
                className="  reg-input inputpassword"
                onChange={(e)=>setpassword(e.target.value)}
              />
            </div>

            <p className="para">People who use our service may have uploaded your contact information to Instagram. Learn More </p>
            <p  className="para"> By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>  


            <div>
              <button type="submit" className="btn-login signup-btn mb-4" onClick={submitform}>  sign up </button>
            </div>
         

           
          </div>
        </div>
      </div>

       <div className="reg-text  mt-3">
              
            
              <p className="accparra mt-3">
                 have an account? </p>
                  <p className="singup"><Link to="/" > Login</Link></p>
                
              
            </div>
      <footer>
        <div className="foottext mt-5 mb-2">
          <span className="spantext">Meta</span>
          <span className="spantext">About</span>
          <span className="spantext">Blog</span>
          <span className="spantext">Jobs</span>
          <span className="spantext">Help</span>
          <span className="spantext">API</span>
          <span className="spantext">Privacy</span>
          <span className="spantext">Terms</span>
          <span className="spantext">Locations</span>
          <span className="spantext">Instagram Lite</span>
        </div>

        <div>
          <span  className="spantext">English </span>
          <span  className="spantext">© 2025 Instagram from Meta</span>
        </div>
      </footer>
    </div>
  );
}

export default Register;
