const express = require('express');
const app = express();

app.set("Views", "./Views");         //set the folder and folder directory
app.set("view engine", "ejs");     // set the type of the engine we want to use

app.get("/", (req, res)=>{
    console.log("Hello World");
    res.render("index.ejs")
})

const port = 2020;

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});