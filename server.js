
/* Author: Jayesh Pise (#301337727)
   Date:   Oct 02, 2023
   Filename: Assignment 01 - Personal Portfolio Website (Using ExpressJs - Ejs Template Engine) */


process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var app = express();
app.listen(3000);
module.exports = app;
console.log('Server running at http://localhost:3000/');
