//3rd party module

const express = require('express') // 3rd party mod
const app = express();
const uuid = require('uuid');

// body-parser
app.use(express.json());


// middleware
app.use((req, res, next)=>{
    console.log("i am midle ware");
    next();
});  // o/p shown in the terminal as i am midleware.

// morgan is a 3rd mdleware
// for db connecting use mongdb as mangoose
//const mongoose = require("mangoose")
// DB server creation:
// mangoose.connect('mongodb://') // install mongodb 
// mongodb and mangoose is not same
//refer it.

// static array
const myPersons = 
[
    {
        id:uuid.v4(),
        name:"john",
        age:23
    },
    {
        id:uuid.v4(),
        name:"man",
        age:32
    },
    {
        id:uuid.v4(),
        name:"qwert",
        age:23
    }, 
]

//get
app.get('/',(req, res)=>{
    res.status(200).json(myPersons); // use res.send as html file and res.json file gives as string("khvk")like
});

//get about or help or get by id
// app.get('/:id', (req,res)=>{
//     res.json(req.params.id);
// });

// one persons id. 
app.get('/:id',async(req,res) =>{
    const getOne = await myPersons.filter(e => e.id === req.params.id);
    res.status(200).json(getOne)
});

//post persons
//body parser
app.post('/',async(req,res) =>{
    myPersons.push(req.body);
    res.status(200).json(req.body);
    //console.log(req.body);
    
    //res.status(200).json(getOne)
});













// need port to local host
//listen hardcode setup
app.listen(2000, ()=>{
    console.log("server is running");
});