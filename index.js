const Discord = require('discord.js')
const express = require('express')
const fetch = require('node-fetch')
const app = express()
const client = new Discord.Client()
app.get('/',(req, res) => res.sendFile(__dirname+'/index.html'))
app.use("/css", express.static(__dirname + "/css"));

app.get('/invite', (req, res) => res.redirect('https://dsc.gg/flamebot')

    )
    
app.listen(3000)