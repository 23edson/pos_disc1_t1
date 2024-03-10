"use strict";

import express from "express";
import path from "path";
import routes from "./config/routes";
import initSequelize from "./src/model";
import bodyParser from 'body-parser'

const app = express()

//init sequelize 
initSequelize().then(() => console.log('Sequelize started'))
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "./views"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)


app.listen(5000, () => console.log('App started and listening on port 5000'))