import React from 'react'
import './task.css'
import { useDispatch } from 'react-redux'
import { deletTask,viewtask} from '../redux/action/todoaction'
import Button from "@mui/material/Button";

import trash from "./trash.svg"
import EditTasks from './EditTasks';
import { Checkbox } from '@mui/material';


const Task= ({ el }) =>  {

  const dispatch = useDispatch()

  const deleteTask = () => {
    dispatch(deletTask(el.id))
  }
  const handleToggle = () => {
    dispatch(viewtask(el.id))
  }


  
  return (
<div>
<Button onClick={deleteTask} style={{position: "relative" , right: "-50px" }}> <img src={trash} width='18px' alt="delete" /> </Button>
<Checkbox onChange={handleToggle} style={{position: "relative" , left: "-50px" }} > </Checkbox>
      <h2 style={{  textDecoration: el.isDone? 'line-through':'none' }}>{el.title}</h2>
      
      <EditTasks el = {el} />
</div>

 
    


  )
}

export default Task
