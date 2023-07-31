import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate} from "react-router-dom";
import Task from './Task';
import { useDeleteTaskByIdMutation, useGetAllTaskQuery} from '../services/taskrtk';
const TaskAll = () => {
  const { data: taskList, isError, isLoading } = useGetAllTaskQuery();
  const [deleteTask] = useDeleteTaskByIdMutation();


  const Navigate = useNavigate();

  //  if(isLoading) return <div>Loading....</div> 
  // else if(isError) return <div>Error</div>
  
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
            onClick={
              ()=>{Navigate(`/task/${element._id}`)}}
            >
              <EditIcon/>
            </IconButton>

          }
          
          />
        );
      })}
    </div>
  );
};
export default TaskAll;
