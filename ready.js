const app =  require('express')()

app.get("/test", (req, res)=>{
    res.send("hey there");
})