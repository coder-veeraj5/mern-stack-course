import React from "react";

function Home() {
  return (
    <div>
      <div className="container">
        <div className="row  home-row text-center">
          <div className="  col-md-3">
            <div className="profile-img">
              <img src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" />
            </div>
          </div>
          <div className="col-md-3">
            <span>10</span>
            <br />
            <p>Posts</p>
          </div>
          <div className="col-md-3">
            <span>389</span>
            <br />
            <p>Followers</p>
          </div>
          <div className="col-md-3">
            <span>310</span>
            <br />
            <p>Following</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
