const express = require('express');

const app = express();
const path = require("path");

//midlleware
app.use(express.static(path.join(__dirname, "public")));

//Get / Routs
app.get('/',(req,res)=>{
   res.render('index.ejs')
});

app.listen(3000,()=>{
    console.log('Listening on port 3000');
});