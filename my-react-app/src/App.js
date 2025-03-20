import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Layout from "./common/Layout";
import PhotoList from "./photos/PhotoList";
import AddPhoto from "./photos/AddPhoto";
import DeletePhoto from "./photos/DeletePhoto";
import UpdatePhoto from "./photos/UpdatePhoto";
import PostList from "./posts/PostList";
import AddPost from "./posts/AddPost";
import DeletePost from "./posts/DeletePost"
import UpdatePost from "./posts/UpdatePost";
import TaskList from "./tasks/TaskList"
import AddTask from "./tasks/AddTask";
import DeleteTask from "./tasks/DeleteTask";
import UpdateTask from "./tasks/UpdateTask";
import UserList from "./users/UserList";
import AddUser from "./users/AddUser";
import DeleteUser from "./users/DeleteUser";
import UpdateUser from "./users/UpdateUser";

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
      {/* <Route index element={<h1>🏠 דף הבית - ברוך הבא!</h1>} /> */}
      <Route path='/' element={<Layout/>}/>
        <Route path='/tasks' element={<TaskList/>}/>
        <Route path='/tasks/add' element={<AddTask/>}/>
        <Route path='/tasks/update' element={<UpdateTask/>}/>
        <Route path='/tasks/delete' element={<DeleteTask/>}/>
        <Route path='/photos' element={<PhotoList/>}/>
        <Route path='/photos/add' element={<AddPhoto/>}/>
        <Route path='/photos/update' element={<UpdatePhoto/>}/>
        <Route path='/photos/delete' element={<DeletePhoto/>}/>
        <Route path='/posts' element={<PostList/>}/>
        <Route path='/posts/add' element={<AddPost/>}/>
        <Route path='/posts/update' element={<UpdatePost/>}/>
        <Route path='/posts/delete' element={<DeletePost/>}/>
        <Route path='/users' element={<UserList/>}/>
        <Route path='/users/add' element={<AddUser/>}/>
        <Route path='/users/update' element={<UpdateUser/>}/>
        <Route path='/users/delete' element={<DeleteUser/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;