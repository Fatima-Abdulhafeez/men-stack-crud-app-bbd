const dotenv = require("dotenv"); 
dotenv.config();
const express = require('express');
const { connect } = require("http2");
const mongoose = require("mongoose");
const app = express();
const path = require("path");

//controllers
const businessesController = require("./controllers/businessController");


//database connection
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});// log connection status to terminal on start

//midlleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

//Get / Routs
app.get('/',(req,res)=>{
   res.render('index.ejs')
});

//routes
app.use("/businesses", businessesController);// use business controller

app.listen(3000);