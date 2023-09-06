

import React, { useState, useEffect } from 'react';
import { useLocation, } from "react-router-dom";
import './Navbar.css'; // Import your CSS file

const Navbar: React.FC = () => {
  const [page, setpage] = useState("overview")
  const location = useLocation()

  useEffect(() => {
    const pathString = location.pathname.split("/")[2]
    setpage(pathString || "Overview")
  },[location.pathname])

  const data = localStorage.getItem("userData") || `{}`
    const parsedData= JSON.parse(data)
    // console.log("PARSE",parsedData);

  return (
    <nav className="navbar">
      <div className="dashboard-name">{page}</div>

      {/* User Circle Icon */}
      <div className="user-info">
        <div className="user-details">
          <span className="user-name">{parsedData?.data?.firstName?.[0]?.toUpperCase() + parsedData?.data?.firstName?.slice(1)}
           {""} {parsedData?.data?.lastName?.[0]?.toUpperCase() + parsedData?.data?.lastName?.slice(1)}</span>
          <span className="user-role">{parsedData?.data?.role?.[0]?.toUpperCase() + parsedData?.data?.role?.slice(1)}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

