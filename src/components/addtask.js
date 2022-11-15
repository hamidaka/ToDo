import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddTasks, editTask } from '../redux/action/todoaction'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from 'uuid';


const AddTask = () => {
    const dispatch = useDispatch()





    const [show, setShow] = useState(false);
    const [newTask , setnewTask] = useState({
      id:uuidv4(),
      title:''
    })


    

    const handleChange = (e) => {
        setnewTask({...newTask,[e.target.name] : e.target.value })
    }

    const handleAdd = () => {
        dispatch(AddTasks(newTask))
       
    }
  return (
  <>

      

   
     
      
          
              
          
              <Form.Control
                name="title"
                type="text"
                placeholder=""
                autoFocus
                onChange={handleChange} 
              />
       
          <Button variant="primary" onClick={handleAdd}>
           ADD TASK
          </Button>
       
  
    </>
  );
};

export default AddTask
