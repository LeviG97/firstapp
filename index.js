const express = require('express') 

const app = express() 

const port = 3000 

 
 

app.get('/', (req, res) => res.send('Hello World from Levi!')) 

app.get('/bananas', (req, res) => 

  res.send('hello world, this is bananas')); 

app.get('/fruit/apples', (req, res) => 

  res.send('hello world, this is apples ')); 
 

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

