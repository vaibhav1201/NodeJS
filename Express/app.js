const express = require("express");
const fs = require("fs");
const app = express();
const path = require('path');
const port = 80;


//For serving static files..
app.use('/static', express.static('static'))
app.use(express.urlencoded())

// set the template engine as pug..
app.set('view engine', 'pug');

//set the views directory..
app.set('views', path.join(__dirname, 'views'))

//pug files..
app.get('/', (req, res)=>{
  const con = 'this is the content of pug/html in node js backend..'
  const head = 'Sign up fom for dynamic changes..'
  const params = {'title': 'vaibhav title', 'heading': head, 'content': con}
  res.status(200).render('index.pug', params);
});
app.post('/', (req, res)=>{
  name = req.body.name
    email = req.body.email
  phone = req.body.phone
  gender = req.body.gender

  let outputToWrite = `name of the user is ${name}, email of the user is ${email}, phone of the user is ${phone} and the gender is ${gender}.`
  fs.writeFileSync('output.txt', outputToWrite)
  const data = req.body
  console.log(data);
      const params = {'message': 'your form has been submitted'}
  res.status(200).render('index.pug')
})
app.listen(port, () => {
  console.log(`this app is running on prt ${port}`);
});