import React, {useState, useEffect} from 'react'
import "../Card.css"
import { FiUsers } from "react-icons/fi";
import { MdAdminPanelSettings } from 'react-icons/md';
import OverviewList from './OverviewTable';
import { getUsers } from '../../../api/api';
import OverviewListAdmin from './OverviewTableAdmin';


function Overview() {
    

    interface UserData {
        id: number;
        image: string;
        firstName: string;
        lastName: string;
        role: string;
        status: string;
      }
      
      
    const [users, setUsers] = useState<UserData[]>([]); 

  const getAllUsers = async() =>{
    try {
      const userResponse = await getUsers({})
      console.log("USER RESPONSE", userResponse);
      const result: UserData[] = userResponse.data.data; 
      console.log("RESULT", result);
        
      setUsers(result)
    } catch (error) {
      console.log(error);
      
    }
  }
  
  useEffect(()=> {
    getAllUsers()
  },[])

  const totalUsers = users.filter(user => user.role === 'user').length;
  const totalAdmins = users.filter(user => user.role === 'admin').length;
    return (
        <div className='overview-body'>
            <div className='overviewcard'>
                <div className="card">
                    <div className="content">
                        <div className="left">
                            <p>TOTAL NUMBER OF USERS</p>
                            <h2>{totalUsers}</h2>
                        </div>
                        <div className="right">
                            <div className='icon-div'>
                                <div className="box">
                                    <div className="group">
                                        <FiUsers />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <div className="left">
                            <p>TOTAL NUMBER OF ADMINS</p>
                            <h2>{totalAdmins}</h2>
                        </div>
                        <div className="right">
                            <div>
                                <div className="box">
                                    <div className="group">
                                        <MdAdminPanelSettings />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='view-list'>
                <div>
                    <h2 className='view-word'>List of Users</h2>
                    <OverviewList />
                </div>
                <div>
                    <h2 className='view-word'>List of Admins</h2>
                    <OverviewListAdmin />
                </div>
            </div>
        </div>
    )
}

export default Overview