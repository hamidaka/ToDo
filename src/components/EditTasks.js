

import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Bbutton from "@mui/material/Button";
import { useDispatch } from "react-redux";
import{ editTask } from '../redux/action/todoaction'





const EditTasks = ({el}) => {
    const dispatch = useDispatch()
    const [editTasks , setEditTask] = useState (el)

    const handleChange = (e) => {
        setEditTask({...editTasks , [e.target.name]:e.target.value})
    }

    const handleEdit = () => {
        dispatch(editTask(editTasks))
       
    }

    const [show, setShow] = useState(false);
    

   

  return (
    <>
     
      

      
              
             
              <Form.Control
                name="title"
                type="text"
                placeholder="title"
                autoFocus
                value={editTasks.title}
                onChange={handleChange}
              />
              <button onClick={handleEdit}>Edit</button>

              
    </>
  );
};

export default EditTasks;
