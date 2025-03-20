import { useEffect, useState } from "react";
import Axios from "axios";

const AddTask=()=>{
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const { data } = await Axios.get("http://localhost:3000/api/tasks");
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  if (tasks.length === 0) return <h1>Loading</h1>;

  return (
    <div>
      <h1>Tasks list component</h1>
      <ul>
        {tasks.add((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};
    export default AddTask