import { ADD_TASK, DELETE_TASK, EDIT_TASK,TOGGLE_VIEW ,FILTER_TASK} from "./type";
import { v4 as uuidv4 } from 'uuid';

export const AddTasks = (newTask) => {
  return {
    type: ADD_TASK,
    payload: { ...newTask, id:uuidv4(),isDone:false },
  };
  
};
export const deletTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};
export const editTask = (task) => {
  return {
    type: EDIT_TASK,
    payload: task ,
  };
};
export const viewtask = (id) => {
  return {
    type: TOGGLE_VIEW,
    payload: id,
  };
};
export const filtertask = (filtre) => {
  return {
    type: FILTER_TASK,
    payload: filtre,
  };
};




