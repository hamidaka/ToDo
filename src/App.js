import logo from './logo.svg';
import './App.css';
import AddTask from './components/addtask';
import { useDispatch, useSelector } from 'react-redux';
import Listtask from './components/Listtask';
import {filtertask} from './redux/action/todoaction'
 
function App() {
  
const dispatch= useDispatch()

  const todofiltre = useSelector(state => state.todoReducer.filtre )
  const tasks = useSelector(state => state.todoReducer.taskes )
console.log(todofiltre)
  return (
    <div className="App">
       <AddTask/>
       <div>
       <button onClick={()=>dispatch(filtertask('ALL'))}>ALL</button>
       <button onClick={()=>dispatch(filtertask(true))}>Done</button>
       <button onClick={()=>dispatch(filtertask(false))}>UnDone</button>
       </div>
       
       <Listtask tasks={todofiltre === 'ALL' ? tasks : tasks.filter(el => el.isDone === todofiltre ) }/>
      
    </div>
  );

}

export default App;
