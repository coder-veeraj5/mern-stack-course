import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
function Home() {

const navigate=useNavigate();
  const [userData, setUserData] = useState();

  const getUserInfo=async()=>{
    try {
      
const token =localStorage.getItem("usertoken");
if(!token){
navigate('/')
return;
}

 const apiResponse = await axios.get(
        "http://localhost:9090/api/user/getuserprofile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("API response:", apiResponse.data);
        console.log(apiResponse.data.userdata);
     setUserData(apiResponse.data.userdata);
   


  
    } catch (error) {
         console.error("Error fetching user info:", error);
      navigate("/");
    }
  }


 
  useEffect(() => {
    getUserInfo();
  }, []);


  const handellogout=()=>{

    localStorage.removeItem("usertoken");
    navigate("/")
  }

  return (
  
  <div className="home-container py-5">
    <div className="container">
      {/* Profile Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img
            src="https://i1.rgstatic.net/ii/profile.image/1054505286258688-1628425060244_Q512/William-Blakeney.jpg"
            alt="Profile"
            className="profile-img rounded-circle"
          />
        </div>
        <div className="col-md-4 text-center">
          <h2 className="mb-3">Harish Palsande</h2>
          <ul className="list-unstyled">
            <li>
              <strong>Username:</strong> {userData?.userName}
            </li>
            <li>
              <strong>Email:</strong> {userData?.email}
            </li>
            <li>
              <strong>Mobile:</strong> 1234567890
            </li>
          </ul>
        </div>
        <div className="col-md-4 text-center text-md-end">
          <button className="btn btn-danger my-1 w-100 " onClick={handellogout}>
            Log Out
          </button>
          <button className="btn btn-primary my-1 w-100">
            Edit Profile
          </button>
          <button className="btn btn-warning my-1 w-100">
            Delete Profile
          </button>
          <button className="btn btn-success my-1 w-100">
            Create Post
          </button>
        </div>
      </div>
    </div>
  </div>
);

 
}

export default Home;
