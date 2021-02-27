import React from 'react'
import {GiCancel} from 'react-icons/gi'

const Task = ({task, onDelete,onToggle}) => {
    return (
        <div className={`task ${task.remainder ? 'remainder': ''}`}
         onDoubleClick={() =>onToggle(task.id)}>
            <h3>{task.text}
                <GiCancel style={{color:'#EB7474', cursor:'pointer'}}
                 onClick={()=> onDelete(task.id)}/>
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
