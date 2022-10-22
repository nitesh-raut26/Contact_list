
//require the library
const mongoose=require('mongoose');

//connect to database
mongoose.connect('mongodb://localhost/contact_list_db');

//which is conected to database or not let's  check
// moongoose to be connected
//connection gives access to database
//acquire the connection to check if it is successfully
const db=mongoose.connection;


//error check
db.on('error',console.error.bind(console,'error connecting to db'));


//up and running to be checked

db.once('open',function()
{
    console.log('successfully connected to database');
});

