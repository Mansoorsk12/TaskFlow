import React from 'react'
import StateCard from './StateCard'
import {useState} from 'react'

const Dashboard = () => {
  const [taskCount, setTaskCount] = useState(20);
  const [completedTasks, setCompletedTasks] = useState(15);
  const handleAddTask = () => {
    setTaskCount(taskCount + 1);
  }
  const pendingTasks = taskCount - completedTasks;
  const stats=[
    { id: 1, title: 'Total Tasks', value: taskCount }
    ,
    { id: 2, title: 'Completed Tasks', value: completedTasks }
    ,
    { id: 3, title: 'Pending Tasks', value: pendingTasks }
  ]
  return (
    <main>
        <h1>Dashboard</h1>
        <div>
          {stats.map((stat) => (
            <StateCard key={stat.id} title={stat.title} value={stat.value} />
          ))}   
          
          <button onClick={handleAddTask}>Add Task</button>
          <button onClick={() => setCompletedTasks(completedTasks + 1)}>Complete Task</button>  
          {completedTasks ===taskCount ? (<p>All tasks completed!</p>) :(<p>Keep working on your tasks.</p>) }
        </div>
    </main>
  )
}

export default Dashboard
