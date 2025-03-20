require("dotenv").config();
const express = require("express");
const cors = require("cors");

const corsOptions = require("./config/corsOptions");
const connectDB = require("./config/dbConn");
const PORT = process.env.PORT || 2000;
const app = express();

connectDB();
app.use(cors(corsOptions));
app.use(express.json()); // חובה כדי לקרוא body בבקשות POST/PUT
app.use(express.urlencoded({ extended: true })); // לטיפול בנתונים מקודדים בטופס

const userRout = require("./routes/userRout");
const todosRout = require("./routes/todosRout");
const postRout = require("./routes/postRout");
const photoRout = require("./routes/photoRout");

app.use("/api/users", userRout);
app.use("/api/tasks", taskRout);
app.use("/api/posts", postRout);
app.use("/api/photos", photoRout);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));