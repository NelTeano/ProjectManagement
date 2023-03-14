require('dotenv').config()

const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

mongoose.connect(process.env.DABATASE_URL, { useNewUrlParser: true })
.then(() => console.log("DATABASE SUCCESSFULLY CONNECTED")).catch(() => console.log("CONNECTION FAILED"));



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});



const AccountsSchema = new mongoose.Schema({
    username: String,
    password: String
});

const Account = mongoose.model("Account", AccountsSchema)




Account.findOne({username: "Jonel"}, (err, foundItem) => {
    if(err){
        console.log(err);
    }else{
        console.log(foundItem);
    }
});




app.use(express.json())


const AccountsRouter = require('./routes/Accounts');

app.use('/Accounts', AccountsRouter);



/*

// HOW TO CREATE SCHEMA ON DATABASE AND QUERY INPUT DATA ON SCHMEA

// CREATIJNG SCHEMA , THE FORMAT OF THE SCHEMA, DATA TYPES OF DATAS

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
}); 

// CREATE MODEL ON HOW ITS SCHEMA WORKS MODEL("NAME OF MODEL" , "MYSCHEMA")

const Fruit = mongoose.model("Fruit", fruitSchema);

// FORMAT OF HOW TO INPUT A DATA ON THAT SCHEMA

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Taste Good"
});

// FUNCTION SAVING THE DATA { ----- "NAME OF CONSTANT VARIABLE WANT TO SAVE".save() ----- }

fruit.save();



--------------------------------------------------------------------------------------------------------------------------------------------------------------------


// AFTER I CREATE A SCHEMA AND INPUT DATA NOW HOW I QUERY IT LIKE THE FINDONE FUNCTION


// MY SCHEMA FORMAT

const AccountsSchema = new mongoose.Schema({
    username: String,
    password: String
});

// CREATING MODEL THAT WHAT YOUR SCHEMA FORMAT YOU WANT TO SUPPOSE TO BE

const Account = mongoose.model("Account", AccountsSchema)

// QUERY FIND ONE DATA THAT PRINTS IN TERMINAL

Account.findOne({username: "tester"}, (err, foundItem) => {
    if(err){
        console.log(err);
    }else{
        console.log(foundItem);
    }
});


--------------------------------------------------------------------------------------------------------------------------------------------------------------------

*/




