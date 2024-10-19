const TaskNumbers = () => {
  return (
    <div className="task-number">
      <div className="container">
        <div className="single-task" style={{ backgroundColor: 'blue' }}>
          <p>1</p>
          <h2>New Task</h2>
        </div>
        <div className="single-task" style={{ backgroundColor: 'green' }}>
          <p>3</p>
          <h2>Completed Task</h2>
        </div>
        <div className="single-task" style={{ backgroundColor: 'yellow' }}>
          <p>2</p>
          <h2>Accepted Task</h2>
        </div>
        <div className="single-task" style={{ backgroundColor: 'pink' }}>
          <p>1</p>
          <h2>Failed Task</h2>
        </div>
      </div>
    </div>
  )
};

export default TaskNumbers;
