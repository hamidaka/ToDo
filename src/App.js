import logo from './logo.svg';
import './App.css';
import AddTask from './components/addtask';
import { useSelector } from 'react-redux';
import Listtask from './components/Listtask';
 
function App() {
  



  const tasks = useSelector(state => state.todoReducer.taskes )

  return (
    <div className="App">
       <AddTask/>
       <Listtask tasks={tasks}/>
      
    </div>
  );

}

export default App;
