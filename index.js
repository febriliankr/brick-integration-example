//import libraries
const express = require('express')//import express
const app = express()//app server to use express
const port = 3000//initialize port
const request = require('request')//import request
const cors = require('cors')//import cor

//access the json data from url in post or get, eg. to retrieve the user-access-token
app.use(express.json())

//access static file in the project folder
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use(cors())//server to use cors function

//set view folder for ejs file
app.set('views','./views')
//set engine ejs so we dont need to use extension in string name
app.set('view engine','ejs')

//dictionary for public-token and user-access-token
var dict = {
    "public_token" : "",
    "user_token" : ""
}

//dictionary for transactions detail
var transaction_dict = {
    "date" : [],
    "description":[],
    "status" : [],
    "amount" : []
}

//dictionary for user account list in one user ID
var user_account ={
    "accountHolder" :[],
    "accountNumber" :[],
    "accountID":[],
    "balance":{
        "available" : "",
        "current" : ""
    }
}

//dicitonary for user details for specific user account
var user_detail ={
    "accountHolder" :"",
    "accountNumber" :"",
    "accountID":"",
    "balance":{
        "available" : "",
        "current" : ""
    }
}

//boolean to check for Jenius Bank or not (MFA)
var boolean = {
    "isJenius" : false
}

//dictionary to store user's Jenius Bank details & transactions
var jenius ={
    "jeniusTransactionDetail" : [],
    "jeniusAccountDetail" : []
    
}
