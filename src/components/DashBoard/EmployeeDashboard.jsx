import Header from "../other/Header";
import TaskNumbers from "../other/TaskNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
  return (
    <div className="employee-dashboard">
      <Header />
      <TaskNumbers />
      <TaskList />
    </div>
  )
};

export default EmployeeDashboard;
