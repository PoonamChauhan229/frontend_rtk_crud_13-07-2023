import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetTaskByIdQuery, useUpdateTaskByIdMutation } from "../services/taskrtk";

export const EditTask = () => {
  const { id } = useParams();
  console.log(id);

  const { data, error, isLoading } = useGetTaskByIdQuery(id);
  console.log(data);
  
  // update and save
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (id) {
      if (data) {
        setTaskName(data.taskName || ''); // Set the default value for taskName
        setDescription(data.description || ''); // Set the default value for description
        setStatus(data.status || ''); // Set the default value for status
      }
    }
  }, [id, data]);

  const navigate = useNavigate();

  
  const [updateTask ]= useUpdateTaskByIdMutation(id);

  const changedTask = {
      _id:id,
      taskName,
      description,
      status
    }
  
  return (
    <>
      <h1>{id}</h1>
      {
        data ?
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
              class="card-link"
              onClick={() => {
                updateTask(changedTask);
                navigate('/');
              }}
            >
              Update and save
            </button>
          </div>
          : "Loading...."
      }
    </>
  );
};
