

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



const UserList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortOption, setSortOption] = useState<string>('All');
  
  const [users, setUsers] = useState<UserData[]>([]);

  const getAllUsers = async() =>{
    try {
      const userResponse = await getUsers({})
      console.log("USER RESPONSE", userResponse);
      const result = userResponse.data.data
        console.log("MYUSERRESULT", result);
        
      setUsers(result)
    } catch (error) {
      console.log(error);
      
    }
  }
  
  useEffect(()=> {
    getAllUsers()
  },[])


  // const filteredUsers = users
  //   .filter((user) => user.role === 'user' && (sortOption === 'All' || sortOption === user.status))
  //   .filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div style={{ backgroundColor: "#f4f4f4", height: "100vh", paddingTop: "10px" }}>
      <div className="card" style={{ background: 'white', height: "auto", width: "90rem" }}>
        <div style={{ background: '#008f8f8f', display: "flex", justifyContent: "space-between" }}>
          <input
            style={{ width: "30rem", margin: '10px 20px' }}
            type="text"
            placeholder="Search for User"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            style={{ marginRight: "10rem", margin: '10px 20px', }}
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="All">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <h3 style={{ marginTop: "20px", marginLeft: "20px" }}>User's Name</h3>
        <table>
          <tbody>
            {users
            .filter((user) => user.role === 'user')
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .map((user, index) => (
              <React.Fragment key={user.id}>
                <tr>
                  <td style={{ padding: "20px" }}>
                    <img src={user.image} alt={user.firstName} style={{ width: '50px', height: '50px' }} />
                  </td>
                  <td>{`${user.firstName} ${user.lastName}`}</td>
                  <td>
                    <button style={{ marginLeft: "60rem", backgroundColor: "#51ffff", color: "black", marginBottom: "30px", width: "10rem" }}>View Details</button>
                  </td>
                </tr>
                <tr>
                  <td colSpan={3}><hr style={{ border: "1px light black", width: "90rem", margin: "-18px", }} /></td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
