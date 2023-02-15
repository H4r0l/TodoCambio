require('dotenv').config();

const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors')

mongoose.set('strictQuery', false);

const PORT = 3030;
const app = express( );

const todoRoutes = require("./routes/todoRoutes");
const connectionOptions = {useUnifiedTopology:true,
useNewUrlParser:true };
// useFindAndModify: false

app.use(express.json());
app.use(cors())

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@todocambiotodolist.mc9qxv9.mongodb.net/TodoCambioTodoList`, connectionOptions)
    .then(() => console.log ("Connected successfully"))
    .catch ((err) => console.error(err));

app.use("/todos", todoRoutes);

app.listen(PORT, ( )=> {
    console.log("The server is listening on port " + PORT);
});

