import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Homepage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const validUser = typeof window !== "undefined" && JSON.parse(localStorage.getItem("validUser"));
        if(validUser?.email !== "task@gmail.com") navigate("/login");
    })

    const logoutHandler = () => {
        localStorage.removeItem("validUser");
        navigate("/login");
    }

  return (
    <div className="main">
        <nav className="navbar  navbar-expand-lg navbar-dark bg-transparent" style={{fontFamily: 'Luckiest Guy'}}>
            <span className="navbar-brand" style={{paddingLeft: "150px", fontSize: "40px"}}>Lionel Messi</span>
            <div className="collapse navbar-collapse">
                <div className="navbar-nav" style={{marginLeft: "35%", fontSize: "20px"}}>
                    <span className="nav-item nav-link active" id="navicon">Home <span className="sr-only">(current)</span></span>
                    <span className="nav-item nav-link cur-pointer" id="navicon" onClick={() => logoutHandler()}>Logout</span>
                </div>
            </div>
      </nav>
        <div className="lefttext">
            <div className="textwrap">
                <h1>Lionel Messi</h1>
                <p>Lionel Andrés Messi (born 24 June 1987), also known as Leo Messi, is an Argentine professional footballer who captains the Argentina national team and plays for Ligue 1 club Paris Saint-Germain.</p>
                <button>World Cup 2022</button>
            </div>
        </div>
        <div className="rightimage">
            <img src="https://www.ixpaper.com/wp-content/uploads/2021/06/lionel-messi-hd-wallpaper-ixpaper.jpg" alt="" />
        </div>
    </div>
  );
};

export default Homepage;
