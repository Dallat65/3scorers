import React from 'react'
import '../../App.css'
import { SidebarData } from './SidebarData'
import { useNavigate } from 'react-router-dom'
import '../Sidebar.css'
import "../../assets/Dashboard-image.svg"

function Sidebar() {
  const navigate = useNavigate()

  const LogOut = (title: string) => {
    if (title === "Logout") {
      localStorage.clear();   
    }
  };
  return (
    <>
  

    <div className="Sidebar-div">
      <img style={{marginTop:"50px",marginLeft:"30px"}} src='../src/assets/IMG-3scorersLogo.png'/>

        <div className='sidebar-top-image'></div>
        <ul className="Sidebar-List" style={{marginTop:"20px"}}>{SidebarData.map((val, key)=>{
        return(
            <li className='row' id={window.location.pathname == val.link ? "active" : ""}  
            key={key} 
            onClick={() => {
              if (val.title === "Logout") {
                LogOut(val.title);
                navigate(val.link);
              } else {
                navigate(val.link);
              }
            }}
            >
                <div className='Sidebar_icon'>{val.icon}</div>
                <div className='Sidebar_title'>{val.title}</div>
            </li>
        )
    })} </ul>
    </div>
    </>
  )
}

export default Sidebar

