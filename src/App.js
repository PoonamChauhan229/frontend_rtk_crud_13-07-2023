import Navbar from './components/Navbar'
import {EditTask} from './components/EditTask'
import {
  Route,
  Routes,
} from "react-router-dom";
import TaskAll from './components/TaskAll';
import { AddTask } from './components/AddTask';


function App() {

  
 
  return (    
   
        <div>          
            <Navbar/>
            <Routes>
              <Route exact path='/' element={<TaskAll/>}/>
              <Route exact path='/task/:id' element={<EditTask/>}/>
              <Route exact path='/addTask' element={<AddTask/>}/>
            </Routes>
        </div>
  );
}

export default App;

