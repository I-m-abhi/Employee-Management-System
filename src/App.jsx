import { useState, useEffect, useContext } from "react";
import { AuthContext } from "./context/AuthProvider";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/DashBoard/EmployeeDashboard";
import AdminDashboard from "./components/DashBoard/AdminDashboard";

const App = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const {employeesData} = useContext(AuthContext);

  useEffect(function () {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if(loggedInUser){
      const userRole = JSON.parse(loggedInUser);
      setUser(userRole.role);
      setUserData(userRole.employee);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (employeesData) {
      const employee = employeesData.find((e) => email == e.email && password == e.password)
      if (employee) {
        setUser('employee');
        setUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', employee }));
      }
    } else {
      alert('Wrong Credentials');
    }
  };

  return (
    <div className="app">
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {(user == 'admin') ? <AdminDashboard setUser={setUser} /> : ''}
      {(user == 'employee' ? <EmployeeDashboard setUser={setUser} userData={userData} /> : '')}
    </div>
  )
};

export default App;