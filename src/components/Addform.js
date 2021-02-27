
import React,{useState} from 'react'

const Addform = ({onAdd}) => {

    const[text,setText] = useState('')
    const[day,setDay] = useState('')
    const[remainder,setRemainder] = useState(false)

    const onSubmit =(e) =>{
        e.preventDefault()

        if(!text){
            alert('Add a task')
            return
        }
        onAdd({text,day,remainder})

        setText('')
        setRemainder(false)
        setDay('')

    }

    return (
        <form className="form"  onSubmit={onSubmit}>
            <div className="form-control">
                <label><h3>Task</h3></label>
                <input type="text" placeholder="Add Task" 
                value={text} onChange={(e) => setText(e.target.value)}/>
            </div>

            <div className="form-control">
                <label><h3>Day and Time</h3></label>
                <input type="text" placeholder="Add Day and Time"
                value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>

            <div className="form-control form-control-check">
                <label><h3>Set Reminder</h3></label>
                <input className="" type="checkbox"
                value={remainder} checked={remainder} onChange={(e) => setRemainder(e.currentTarget.checked)}/>
            </div>
            <input type="submit" value='save' className="buton buton-block"/>
        </form>
        
    )
}

export default Addform
