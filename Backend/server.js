require('dotenv').config()


const express= require("express")
const mongoose=require('mongoose')
const {createDoctor} = require("./controllers/doctorController")
const {createPatient} = require("./controllers/patientController")

//express app
const app = express()

app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
//routes


//connect to DB
mongoose.connect('mongodb+srv://laylathabet:iwant28.@cluster0.vv8gqjs.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    // listen for req
app.listen(4000,()=>{
    console.log('Connected to DB & listenening on port 4000')
})

})
.catch((error)=>{
    console.log(error)
})
app.use(express.json())
app.post("/addDoctor",createDoctor);
app.post("/addPatient",createPatient);
//app.get("/users", getUsers);
//app.put("/updateUser", updateUser);
//app.delete("/deleteUser", deleteUser);
