import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const AddTask = () => {
  const [toDo, setToDo] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = () => {
    if (newTask) {
      const num = toDo.length + 1;
      const newEntry = { index: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask('');
    }
  };

  const markDone = (index) => {
    const newTasks = toDo.map((task) => {
      if (task.index === index) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTasks);
  };

  const handleClearCompletedTask = () => {
    const newTodo = toDo.filter((task) => !task.status);
    setToDo(newTodo);
  };

  const deleteTask = (index) => {
    const newTasks = toDo.filter((task) => task.index !== index);
    setToDo(newTasks);
  };

  const filterTasks = (status) => {
    setFilter(status);
  };

  const updateToDo = (updatedTask) => {
    const updatedTasks = toDo.map((task) => {
      if (task.index === updatedTask.index) {
        return updatedTask;
      }
      return task;
    });
    setToDo(updatedTasks);
    setUpdateData('');
  };

  const filteredTasks = toDo.filter((task) => {
    if (filter === 'completed') {
      return task.status;
    } else if (filter === 'incomplete') {
      return !task.status;
    } else {
      return true;
    }
  });

  return (
    <div className="container App">
      <br />
      <br />
      <h2>To Do List App</h2>
      <br />
      <br />
      {updateData && updateData.index ? (
        <div className="row">
          <div className="col">
            <input
              value={updateData.title}
              onChange={(e) => setUpdateData({ ...updateData, title: e.target.value })}
              className="form-control form-control-lg"
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-lg btn-success mr-20" onClick={() => updateToDo(updateData)}>
              Update
            </button>
            <button className="btn btn-lg btn-warning" onClick={() => setUpdateData('')}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="row">
            <div className="col">
              <input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="form-control form-control-lg"
              />
            </div>
            <div className="col-auto">
              <button className="btn btn-lg btn-success" onClick={addTask}>
                Add Task
              </button>
            </div>
          </div>
          <br />
        </>
      )}

      {filteredTasks.map((task, index) => (
        <React.Fragment key={task.index}>
          <div className="col taskBg">
            <div className={task.status ? 'done' : ''}>
              <span className="taskNumber">{index + 1}</span>
              <span className="taskText">{task.title}</span>
            </div>
            <div className="iconsWrap">
              <span onClick={() => markDone(task.index)} title="Completed / Not Completed">
                <FontAwesomeIcon icon={faCircleCheck} />
              </span>
              {!task.status && (
                <span
                  title="Edit"
                  onClick={() => setUpdateData({ index: task.index, title: task.title, status: task.status })}
                >
                  <FontAwesomeIcon icon={faPen} />
                </span>
              )}
              <span onClick={() => deleteTask(task.index)} title="Delete">
                <FontAwesomeIcon icon={faTrashCan} />
              </span>
            </div>
          </div>
        </React.Fragment>
      ))}

      {filteredTasks.length === 0 ? (
        'No tasks...'
      ) : (
        <div className="filter-buttons">
          <button onClick={() => filterTasks('completed')} className="btn btn-xs btn-info">
            Show Completed Tasks
          </button>
          <button onClick={() => filterTasks('incomplete')} className="btn btn-xs btn-warning">
            Show Incomplete Tasks
          </button>
          <button onClick={() => filterTasks('all')} className="btn btn-xs btn-primary">
            Show All Tasks
          </button>
          <button onClick={handleClearCompletedTask} className="btn btn-xs btn-danger">
            Clear Completed Tasks
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTask;
