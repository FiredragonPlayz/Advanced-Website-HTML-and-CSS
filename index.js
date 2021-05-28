const express = require('express')
const app = express()
app.get('/',(req, res) => res.sendFile(__dirname+'/index.html'))
app.use("/css", express.static(__dirname + "/css"));

app.get('/invite', (req, res) => res.redirect('https://dsc.gg/flamebot')

    )
    
app.listen(3000)