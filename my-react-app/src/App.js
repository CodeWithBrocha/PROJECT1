import './App.css';
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom"
import Layout from "./common/Layout";
import Tasks from "./Tasks";
import Photos from "./Photos";
import Posts from "./Posts";
import Users from "./Users";
import {Typography } from "@mui/material";

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout עוטף את כל הדפים */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Typography variant="h6" align="center">🏡 דף הבית</Typography>}/>
          <Route path="tasks" element={<Tasks />} />
          <Route path="photos" element={<Photos />} />
          <Route path="posts" element={<Posts />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;