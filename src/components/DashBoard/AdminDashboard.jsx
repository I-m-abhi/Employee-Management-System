import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = ({setUser}) => {
  return (
    <div>
      <Header setUser={setUser} />
      <CreateTask />
      <AllTask />
    </div>
  )
};

export default AdminDashboard;
