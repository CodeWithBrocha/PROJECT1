import { useEffect, useState } from "react";
import Axios from "axios";
import {  Box,
  Fab,
  TextField,
  Container,
  Typography,
  Checkbox,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { Add as AddIcon, Edit as EditIcon, Save as SaveIcon, Delete as DeleteIcon } from "@mui/icons-material";
const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
    const [editId, setEditId] = useState(null);
      const [editText, setEditText] = useState("");
const[search,setSearch]=useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
      try {
        const res = await Axios.get("http://localhost:2001/api/tasks");
        console.log("Tasks fetched:", res.data); 
        setTasks(res.data);
        console.log("Tasks fetched:", res.data);
      } catch (err) {
        console.error("❌ Error fetching tasks:", err);
      }
    };
     // 📌 הוספת משימה חדשה
  const addTask = async () => {
    if (!newTask.trim()) return;
  try {
    const res = await Axios.post("http://localhost:2001/api/tasks", { title: newTask, completed: false });
    setTasks([...tasks, res.data]); // מוסיף ל-state מיידית
      setNewTask("");
  } 
 catch (err) {
  console.error("❌ Error adding task:", err);
}};
   

   //הגדרת משימה כהושלמה
     const toggleComplete = async (id, completed) => {
       
       try {
         await Axios.put(`http://localhost:2001/api/tasks/complete/${id}`, { completed: !completed });
         
         setTasks((prevTasks) =>
           prevTasks.map(task =>
             task._id === id ? { ...task, completed: !completed } : task
           )
         );
   
       } catch (err) {
         console.error(" Error updating task:", err);
       }
     };
      // 📌 מחיקת משימה
      const deleteTask = async (id) => {
        try {
          await Axios.delete(`http://localhost:2001/api/tasks/${id}`);
          setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id)); // מסנן את המשימה שנמחקה
        } catch (err) {
          console.error("❌ Error deleting task:", err);
        }
      };

  // 📌 עריכת משימה
  // const editTask = async (id) => {
  //   if (!editText.trim()) return;
  //   try {
  //     const res = await Axios.put(`http://localhost:2001/api/tasks/${id}`, { title: editText });
  //     setTasks((prevTasks) =>
  //       prevTasks.map((task) => (task._id === id ? { ...task, title: res.data.title } : task))
  //     );
  //     setEditId(null);
  //     setEditText("");
  //   } catch (err) {
  //     console.error("❌ Error updating task:", err);
  //   }
  // };

  const editTask = async (_id) => {
  if (!editText.trim()) return;
  console.log("📌 שולח בקשה לעריכת משימה עם ID:", _id);
  try {
    const res = await Axios.put(`http://localhost:2001/api/tasks/${_id}`, { title: editText });
    console.log("📌 תגובה מהשרת:", res.data); // בדיקה אם השרת מחזיר נתונים תקינים
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task._id === _id ? { ...task, title: editText } : task))
    );
    setEditId(null);
    setEditText("");
    //return(res)
  } catch (err) {
    console.error("❌ Error updating task:", err);
  }
};

 
   return (
       <Container maxWidth="sm">
         <Typography variant="h4" align="center" gutterBottom>
           ✅ רשימת משימות
         </Typography>
   
         <Box display="flex" gap={2} mb={3}>
           <TextField
             label="  חיפוש משימה... "
             variant="outlined"
             fullWidth
              onChange={(e) => setSearch(e.target.value)}
           />
   
         </Box>
   
         {/* הוספת משימה חדשה */}
         <Box display="flex" gap={2} mb={2}>
           <TextField label="הוסף משימה חדשה" variant="outlined" fullWidth value={newTask} onChange={(e) => setNewTask(e.target.value)} />
           <Fab color="primary" aria-label="add" onClick={addTask}>
             <AddIcon />
           </Fab>
         </Box>
   
         {/* טעינה או הצגת המשימות */}
         {tasks.length === 0 ? (
           <Typography variant="h6" align="center">🔄 טוען משימות...</Typography>
         ) : (
           tasks.map((task) => (
             <Card key={task._id} sx={{ mb: 2, backgroundColor: task.completed ? "#d3f9d8" : "#fff" }}>
               <CardContent>
                 {editId === task._id ? (
                   <TextField fullWidth value={editText} onChange={(e) => setEditText(e.target.value)} />
                 ) : (
                   <Typography variant="body1" sx={{ textDecoration: task.completed ? "line-through" : "none" }}>
                     {task.title}
                   </Typography>
                 )}
               </CardContent>
               <CardActions>
                 {/* כפתור עריכה / שמירה*/}
                 {editId === task._id ? (
                   <Fab size="small" color="success" onClick={() => editTask(task._id)}>
                     <SaveIcon />
                   </Fab>
                 ) : (
                   <Fab  size="small" color="secondary" onClick={() => { setEditId(task._id); setEditText(task.title); }}>
                     <EditIcon />
                   </Fab>
                 )} 
   
                 {/* כפתור מחיקה*/}
                 <Fab size="small" color="error" onClick={() => deleteTask(task._id)}>
                   <DeleteIcon />
                 </Fab> 
   
                 {/* כפתור השלמה */}
                 <Checkbox checked={task.completed} onChange={() => toggleComplete(task._id, task.completed)} />
               </CardActions>
             </Card>
           ))
         )}
       </Container>
     );
   }
   
   export default Tasks;