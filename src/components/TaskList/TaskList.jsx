import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ tasks }) => {

  return (
    <div className="task-list">
      <div className="container">
        {tasks.map((elem, id) => {
          if(elem.newTask) {
            return <NewTask key={id} task={elem}/>
          }
          if(elem.active) {
            return <AcceptTask key={id} task={elem}/>
          }
          if(elem.completedTask) {
            return <CompleteTask key={id} task={elem}/>
          }
          if(elem.failedTask) {
            return <FailedTask key={id} task={elem}/>
          }
        })}
      </div>
    </div>
  )
};

export default TaskList;
