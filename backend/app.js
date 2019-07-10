const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors=require("./cors");
const external_loginRoutes=require("./routes/external");
const SSOloginRoutes=require("./routes/SSO_login");
var SamlStrategy = require('passport-saml').Strategy;
const passport =require('passport');
const dotenv = require('dotenv');
const auth = require('./ssoauth');
const jwt = require('jsonwebtoken');
const rateLimit = require("express-rate-limit");
const thesisRoutes=require('./routes/thesis');
const studentRoutes=require('./routes/student');
const adminRoutes=require('./routes/admin');
const professorRoutes=require('./routes/professor');
const universityRoutes=require('./routes/university');
const secretariatRoutes=require('./routes/secretariat');

dotenv.config();
// connect with database
mongoose.connect('mongodb+srv://new_mike_first:'+process.env.MONGO_PASSWORD+'@cluster0-wyycr.mongodb.net/test?retryWrites=true'
, {useNewUrlParser: true ,   useCreateIndex: true,
})
  .catch(err => {
    console.log('error in database:'+err);
  
})

// limit request from ip
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 500 // limit each IP to 200 requests per windowMs
});

app.use(morgan("dev"));
//app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors);
app.use(limiter);


// Routes which should handle requests
app.use('/external',external_loginRoutes);
app.use('/SSO',SSOloginRoutes);
app.use('/thesis',thesisRoutes);
app.use('/student',studentRoutes);
app.use('/admin',adminRoutes);
app.use('/professor',professorRoutes);
app.use('/university',universityRoutes);
app.use('/secretariat',secretariatRoutes);



app.get("/",(req,res,next) => {
  res.render()
})

// Error handling
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});


app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
