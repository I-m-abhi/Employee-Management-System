const CompleteTask = ({task}) => {
  return (
    <div className="task-item">
      <div className="item-details">
        <p>{task.category}</p>
        <p>{task.date}</p>
      </div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  )
}

export default CompleteTask;
