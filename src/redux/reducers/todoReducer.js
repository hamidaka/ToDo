import { v4 as uuidv4 } from 'uuid';
import { ADD_TASK,DELETE_TASK, EDIT_TASK, TOGGLE_VIEW } from '../action/type';
const initState ={
    taskes :
 [
    { id: 1, title: "go to school", isDone: false },
    { id:2, title: "go to work", isDone: false },
]}

const todoReducer =  (state = initState , {type , payload}) => {
switch (type) {
    case ADD_TASK:
        return {
            ...state ,
            taskes : [...state.taskes , payload ]
        }
        case DELETE_TASK : 
        return {
            ...state , 
            taskes : state.taskes.filter(elm => elm.id !== payload)
        }
        case EDIT_TASK :
            return {
                ...state ,
                taskes : state.taskes.map(el => el.id === payload.id ? payload : el)
            }
            case TOGGLE_VIEW :
            return {
                ...state ,
                taskes : state.taskes.map(el=> el.id === payload ? {...el , isDone : !el.isDone} : el)
            }
    

    

    default:
        return state
}
}

export default todoReducer