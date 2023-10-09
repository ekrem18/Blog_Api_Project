"use strict";
/* -------------------------------------------------------
------------------------------------------------------- */

const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT || 8000




/* -----Session-Cookies----------------------------------- */
// npm i cookie-session
const session = require('cookie-session')


/* ------------------------------------------------------- */
app.use(express.json());




/* --------Connect to MongoDB with Mongoose--------------- */
require('./src/dbConnection')




/* --------Home Page-------------------------------------- */
app.all("/", (req, res) => {
  res.send("Welcome To BlogApi");
});




/* --------Routes----------------------------------------- */
app.use('/user', require('./src/routes/userRoute'));
app.use('/blog' , require('./src/routes/blogRoute'))




/* ---------Synchronization-------------------------------- */
// require('./src/sync')()




/* ----------errorHandler---------------------------------- */
app.use(require("./src/errorHandler"));




app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
