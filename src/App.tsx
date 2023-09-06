import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from './Components/Signup';
import Login from './Components/Login';
import Layout from './Components/Layout';
import Overview from './Components/Dashboard/Overview/Overview';
import UserList from './Components/Dashboard/User/User';
import AdminList from './Components/Dashboard/Admin/Admin';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {

  return (
    <div className='App' id='app' >
      <BrowserRouter>
       
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<ProtectedRoute><Overview /></ProtectedRoute>} />
            <Route path="user" element={<ProtectedRoute><UserList /></ProtectedRoute>} />
            <Route path="admin" element={<ProtectedRoute><AdminList /></ProtectedRoute>} />
            {/* <Route index element={<Overview />} />
            <Route path="user" element={<UserList />} />
            <Route path="admin" element={<AdminList />} /> */}
          </Route>
          <Route path="*" element={<Navigate to="/login" />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
