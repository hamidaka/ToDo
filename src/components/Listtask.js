import React from 'react'
import Task from './task'


const Listtask = ({tasks}) => {
    return (
        <div className='list' >
            {tasks.map((el , i) => <Task el = {el}  key={i} /> )}
        </div>
    )
}

export default Listtask