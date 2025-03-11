import express from "express";
const app = express();

app.get("/", (req,res)=> {
        res.send("hello from sample route")

    });

app.get("/cpu", (req,res)=>{
    
    for(let i=0;i<100000000;i++){
    Math.random();
    }
    
    res.send("hello world bharat")

})

app.listen(3000)