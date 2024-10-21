import Header from "../other/Header";
import TaskNumbers from "../other/TaskNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({userData, setUser}) => {
  const {firstName, taskCounts, tasks} = userData;

  return (
    <div className="employee-dashboard">
      <Header setUser={setUser} userName={firstName}/>
      <TaskNumbers taskCounts={taskCounts}/>
      <TaskList tasks={tasks}/>
    </div>
  )
};

export default EmployeeDashboard;
