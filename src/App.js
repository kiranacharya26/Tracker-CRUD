import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import React,{useState,useEffect} from 'react' 
import {BrowserRouter as Router, Route} from 'react-router-dom' 
import AddForm from './components/Addform'
import About from './components/About'
import Footer from './components/Footer';

const App = () => {
  const [showTask, setShowTask] = useState(false)
  const [tasks, setTasks] = useState([

      {
        text: "AOT-e11",
        day: "monday 7:00 am",
        remainder: true,
        id: 1
      },
      {
        text: "Outingt with friends",
        day: "sunday 5:00 PM",
        remainder: false,
        id: 2
      },
      {
        text: "interview",
        day: "Wednesday 11:00 AM",
        remainder: true,
        id: 3
      }
    
  ])

  //fetch from local data
  // useEffect(()=>{
  //   const getTasks = async () =>{
  //     const fromServer = await fetchdatas()
  //     setTasks(fromServer)
  //   }
  //   getTasks()
  // },[])

  // const fetchdatas = async () =>{
  //   const res = await fetch('http://localhost:5000/tasks')
  //   const data = await res.json()

  //   return data
  // }
  const addTask =  (task) =>{
    const id= Math.floor(Math.random()*10000)+1
    const newTask ={id,...task}

    setTasks([...tasks,newTask])
  }

  //delete task
const deleteTask = (id) =>{
  // await fetch(`http://localhost:5000/tasks/${id}`,{
  //   method:'Delete'
  // })

  // setTasks(tasks.filter((task)=> task.id !== id))
  setTasks(tasks.filter((task) =>task.id !== id))
}
//toggle function
// const fetchdata = async (id) =>{
//   setTasks(tasks.map((task) =>
//   tasks.map === id ? {...task , remainder: !task.remainder} : task))
// //   const res = await fetch(`http://localhost:5000/tasks/${id}`)
// //   const data = await res.json()

// //   return data
// // }

const toggle= (id) =>{
  // const tasktoggle = await fetchdata(id)
  // const updatetoggle = {...tasktoggle,
  // remainder: !tasktoggle.remainder}

  // const res = await fetch(`http://localhost:5000/tasks/${id}`,{
  //   'method': 'PUT',
  //   headers:{
  //     'Content-type':'applictaion/json'
  //   },
   
  //   body: JSON.stringify(updatetoggle)
  // })
  // const data = await res.json()


  setTasks(tasks.map(task =>
    task.id === id ? {
      ...task, remainder: !task.remainder
    }: task
    ))
}

//add task
// const addTask = async(task) =>{
//   const res = await fetch('http://localhost:5000/tasks',{
//     method:'POST',
//     headers:{
//       'content-type':'application/json',
//     },
//     body: JSON.stringify(task)
//   })
//   const data = await res.json()
//   setTasks([...tasks, data])
//   // const id = Math.floor(Math.random()*10000) +1
//   // const newTask = {id, ...task}
//   // setTasks([...tasks,newTask])
// }
  return (
    <Router>
       <div className="container">
      <Header onAdd={()=>setShowTask(!showTask)} showTask={showTask}/>
      

    <Route path='/' exact render={(props)=>(
      <>
        {showTask && <AddForm onAdd={addTask}/>}
     {tasks.length > 0 ?
      <Tasks tasks={tasks} onToggle={toggle} onDelete={deleteTask}/>
    :<h3 style={noTasks} >No task found</h3>}
      </>
    )}/>
    <Route path='/about' component={About}/>
    <Footer />
    </div>
    </Router>
   
  );
}


const noTasks={
  textAlign:'center', 
  backgroundColor:'#273049',
  color:'#fff',
  margin:'0.5em 2rem',
  padding:'0.5em 0.5em'
}
export default App;
