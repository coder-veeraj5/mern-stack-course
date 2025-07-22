import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import facebook from "../../accets/facebooklogo.png";
import loginimg from "../../accets/login-img.png";
import instalogo from "../../accets/instalogo.jpg";
import dropdown from "../../accets/dropdown.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="container main-con mt-5">
        <div className="row    main-row text-center ">
          <div className="col-md-6">
            <img src={loginimg} alt="login-img" className="w-100 mt-3" />
          </div>
          <div className="col-md-6 mt-5">
            <div className="instaimg text-center">
              <img src={instalogo} className="  mb-4" />
            </div>
            <div className="input mb-3">
              <input
                type="text"
                placeholder="Phone number,username or email"
                className="w-50 inputnum"
              />
            </div>
            <div className="input mb-3">
              <input
                type="text"
                placeholder="Password"
                className="w-50 inputpassword"
              />
            </div>
            <div>
              <button className="w-50 loginbtn">Log in</button>
            </div>
            <div className="lineor mt-4">
              <div className="line1"></div>
              <br />
              <div className="or">OR</div>
              <br />
              <div className="line2"></div>
            </div>

            <div className="text mt-4">
              <p className="facebookpara">
                <img src={facebook} className="facebookimg" />
                Login with facebook
              </p>
              <span>
                <b>forget password?</b>
              </span>
              <p className="accparra mt-5">
                Don't have an account? <span className="singup"><Link to="/register" > Sing up</Link></span>
              </p>
            </div>
          </div>
        </div>
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

export default Login;
