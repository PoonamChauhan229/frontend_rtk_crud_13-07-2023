import { useState } from "react";
import { useNavigate} from "react-router-dom";
import {useAddNewTaskMutation } from "../services/taskrtk";

export const AddTask = () => {
  const [addTask] = useAddNewTaskMutation();

  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  const navigate = useNavigate();
  const newTask = {
      taskName,
      description,
      status
    }
  
  return (
    <>
                <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <input
                type="text"
                className="card-title"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
              <input
                type="text"
                className="card-subtitle mb-2 text-muted"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
              <input
                type="text"
                className="card-text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button
              className="card-link"
              onClick={() => {
                addTask(newTask);
                navigate('/');
              }}
            >
                Add Task
            </button>
          </div>
    </>
  );
};
