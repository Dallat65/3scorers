
import React, { useEffect, useState } from 'react';
import { getUsers } from '../../../api/api';

interface UserData {
    id: number;
    image: string;
    firstName: string;
    lastName: string;
    role: string;
    status: string;
  }
const OverviewListAdmin: React.FC = () => {

    const [users, setUsers] = useState<UserData[]>([]);

  const getAllUsers = async() =>{
    try {
      const userResponse = await getUsers({})
      console.log("USER RESPONSE", userResponse);
      const result = userResponse.data.data
        console.log("RESULT", result);
        
      setUsers(result)
    } catch (error) {
      console.log(error);
      
    }
  }
  
  useEffect(()=> {
    getAllUsers()
  },[])
  return (
    <div className="card" style={{ background: 'white', overflow:"scroll", padding: '20px', height:"35rem", width:"43rem"}}>
      <table>
        <tbody>
          {users
          .filter((user) => user.role === 'admin')
          .map((user) => (
            <tr style={{height:"7rem"}} key={user.id}>
              <td>
                <img src={user.image} alt={user.firstName} style={{ width: '50px', height: '50px' }} />
              </td>
              <td>{`${user.firstName} ${user.lastName}`}</td>
              <td>
                <a style={{marginLeft:"200px", color:"#008f8f"}}>View Details</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OverviewListAdmin;
