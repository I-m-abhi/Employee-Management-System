import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [newTask, setNewTask] = useState(null);

  const {employeesData, setEmployeesData} = useContext(AuthContext);

  useEffect(() => {
    const updatedData = employeesData.filter((elem) => {
      if (assignTo == elem.firstName) {
        elem.tasks.push(newTask)
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1
      }
      return employeesData
    })
    setEmployeesData(updatedData);
    setTitle('');
    setDate('');
    setCategory('');
    setDescription('');
    setAssignTo('');
  }, [newTask]);

  const handleCreateTask = (e) => {
    e.preventDefault();
    setNewTask({ title, date, category, description, active: false, newTask: true, completedTask: false, failed: false });
  };

  return (
    <div className="create-task">
      <div className="container">
        <form onSubmit={handleCreateTask}>
          <div className="left-content">
            <div>
              <label htmlFor="taskTitle">Task Title</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="taskTitle"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="date">Date</label>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                id="date"
                type="date"
              />
            </div>
            <div>
              <label htmlFor="assign">Assign to</label>
              <input
                value={assignTo}
                onChange={(e) => setAssignTo(e.target.value)}
                id="assign"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="category">Category</label>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                id="category"
                type="text"
              />
            </div>
          </div>
          <div className="right-content">
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id="description"
                rows={8}
                cols={35}
              ></textarea>
            </div>
            <div>
              <button>Create Task</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTask;
