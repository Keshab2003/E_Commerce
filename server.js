// const express = require('express')
// const colors = require('colors')
//const type is used in ES5 import is used in ES6 and other latest version of JS
import express from 'express'
import colors from "colors"
import dotenv from 'dotenv'
import morgan from 'morgan'
import { connect } from 'mongoose';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'

//config env
dotenv.config();

//database config
connectDB();

//rest object
const app = express()
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth', authRoutes)

//rest api
app.get('/', (req, res) => {
    res.send({
        message: "Welcome to my Bazzar",
    })
})

//port react = 3000,angular=4200,react=8000 or 8080
const PORT = process.env.PORT || 8080

//run listen
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`.bgCyan)
})