import { useState, useEffect, createContext } from "react";
import { defaultAdmin, defaultEmployees, setLocalStorage, getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const userRoleValue = localStorage.getItem('loggedInUser');
  if(!userRoleValue){
    setLocalStorage(defaultEmployees, defaultAdmin);
  }
  const {employees, admin} = getLocalStorage();
  const [employeesData, setEmployeesData] = useState(employees);
  const [adminData] = useState(admin);

  useEffect(() => {
    setLocalStorage(employeesData, adminData);
  }, [employeesData]);

  return (
    <div>
      <AuthContext.Provider
        value={{
          employeesData,
          setEmployeesData,
        }}>
        {children}
      </AuthContext.Provider>
    </div>
  )
};

export default AuthProvider;
