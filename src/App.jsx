import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/DashBoard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";
import AdminDashboard from "./components/DashBoard/AdminDashboard";

const App = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const authData = useContext(AuthContext);

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
    } else if (authData) {
      const employee = authData.employees.find((e) => email == e.email && password == e.password)
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
      {(user == 'admin') ? <AdminDashboard /> : (user == 'employee' ? <EmployeeDashboard userData={userData} /> : '')}
    </div>
  )
};

export default App;