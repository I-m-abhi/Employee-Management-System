const TaskNumbers = ({taskCounts}) => {
  return (
    <div className="task-number">
      <div className="container">
        <div className="single-task" style={{ backgroundColor: 'blue' }}>
          <p>{taskCounts.newTask}</p>
          <h2>New Task</h2>
        </div>
        <div className="single-task" style={{ backgroundColor: 'green' }}>
          <p>{taskCounts.completedTask}</p>
          <h2>Completed Task</h2>
        </div>
        <div className="single-task" style={{ backgroundColor: 'yellow' }}>
          <p>{taskCounts.active}</p>
          <h2>Accepted Task</h2>
        </div>
        <div className="single-task" style={{ backgroundColor: 'pink' }}>
          <p>{taskCounts.failedTask}</p>
          <h2>Failed Task</h2>
        </div>
      </div>
    </div>
  )
};

export default TaskNumbers;
