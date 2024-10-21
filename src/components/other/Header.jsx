import { useState } from "react";

const Header = ({userName}) => {
  const handleLogOut = ()=> {
    localStorage.setItem('loggedInUser','');
    window.location.reload();
  };
  // const [pannel, setPannel] = useState('Admin');
  // if(userName){
  //   setPannel(userName);
  //   console.log(userName)
  // };

  return (
    <div className="header">
      <div className="container">
        <h1>Hello <br /> <span>{userName ? userName : 'Admin'} 👋</span></h1>
        <button onClick={handleLogOut}>Log Out</button>
        </div>
    </div>
  )
};

export default Header;
