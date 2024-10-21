import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const {employeesData} = useContext(AuthContext);

  return (
    <div className="all-task">
      <div className="container">
        <div className="user-details">
          <h2>Employees Name</h2>
          <div className="task-num">Accepted</div>
          <div className="task-num">New Task</div>
          <div className="task-num">Completed</div>
          <div className="task-num">Failed</div>
        </div>
        {employeesData.map((elem, id) => {
          const { active, newTask, completedTask, failedTask } = elem.taskCounts;
          return (
            <div key={id} className="user-details">
              <h2>{elem.firstName}</h2>
              <div className="task-num">{active}</div>
              <div className="task-num">{newTask}</div>
              <div className="task-num">{completedTask}</div>
              <div className="task-num">{failedTask}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default AllTask;
