import React from 'react'

const TaskCards = ({task}) => {
    console.log
  return (
    <div key={task.id}>
        <div>Título:  {task.title}</div>
        <div>Descripción: {task.description}</div>
        <div>{task.done ? "Completada" : "Incompleta"}</div>
    </div>
  )
}

export default TaskCards