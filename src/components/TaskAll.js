import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import Task from './Task';
import { useDeleteTaskByIdMutation, useGetAllTaskQuery } from '../services/taskrtk';
import { useEffect } from 'react';





const TaskAll = () => {
  const navigate = useNavigate();
  const [deleteTask] = useDeleteTaskByIdMutation();
  const tokenId = sessionStorage.getItem('token');

  useEffect(() => {
    if (!tokenId) {
      navigate('/users/login');
    }
  }, [tokenId, navigate]);

  // Fetch tasks here (you can modify this based on your requirement)
  const { data: taskList, isError, isLoading } = useGetAllTaskQuery();

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "auto",
        width: "89%",
        padding: "10px",
      }}
    >
      {taskList?.map((element, index) => {
        //console.log(element)
        return (
          <Task {...element} key={element._id}
            deleteButton={
              <IconButton color="error" aria-label="add an alarm"
                onClick={() => {
                  deleteTask(element._id);
                }}
              >
                <DeleteIcon />
              </IconButton>
            }

            editButton={
              <IconButton color="error" aria-label="add an alarm"
                onClick={() => {navigate(`/task/${element._id}`); }}
              >
                <EditIcon />
              </IconButton>
            }
          />
        );
      })}
    </div>
  );
};

export default TaskAll;
