const Header = ({userName, setUser}) => {
  const handleLogOut = ()=> {
    localStorage.setItem('loggedInUser',JSON.stringify({role : ''}));
    setUser('');
    // window.location.reload();
  };

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
