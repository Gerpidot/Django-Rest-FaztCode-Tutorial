import React, { useEffect, useState } from "react";
import { getAllTask } from "../api/taskApi";
import TaskCards from "../components/TaskCards";

const TaskPage = () => {
  const [task, setTask] = useState([]);

  const getTaskList = async () => {
    const data = await getAllTask();
    setTask(data.data);
    console.log(data.data);
  };

  useEffect(() => {
    getTaskList();
  }, []);

  return (
    <div>
      <div>Task List</div>

      {task.length == 0
        ? "No hay tareas para mostrar"
        : task.map((tk,index) => {
            return <TaskCards key={index} task={tk} />;
          })}
    </div>
  );
};

export default TaskPage;
