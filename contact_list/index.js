const { urlencoded } = require('express');
const express=require('express');
const path=require('path');
const port=8000;

const app=express();
//Multiple type of request first is get
//\\

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views')) ;
app.use(express.urlencoded());

//accessing static files
app.use(express.static('assets'));


/*
//middleware1
app.use(function(req,res,next)
{
    req.myName="Nitesh"
    // console.log('middleware 1 called');
    next();
});
//middleware2
app.use(function(req,res,next)
{    console.log("My name from Mw2",req.myName);
    // console.log('middleware 2 called');
    next();
});
*/

 var contactList=[
    {
        name:"Nitesh",
        phone:"1290876"
    },
    {
        name:"Tony stark",
        phone:"1234567890"
    },
    {
        name:"Coding Ninja",
        phone:"2345678912"
    },
 ]


app.get('/',function(req,res){
    console.log("from the get route controller",req.myName)


    // console.log(req);
     //how to render views to path
//    console.log(__dirname);
   
    // res.send('<h1>cool,it is running! or it is?</h1>');

// render from hoem html
    return res.render('hoem',{title:"My Contact_list",
         contacts_list:contactList});
})

//request(req) and response(res)
app.get('/practice',function(req,res){
   
// render from hoem html
    return res.render('practice',{title:"I'm flying"});
});

app.post('/create-contact',function(req,res)
{
    // return res.redirect('/practice');
    // console.log(req.body);
    // console.log(req.body.name);
    // console.log(req.body.phone);

    /*
    contactList.push({
       name:req.body.name,
       phone:req.body.phone 
    });
    */
    //It can be reduced as
    contactList.push(req.body);
   
   


     return res.redirect('/');
})
/*
app.get('/delete-contact/:phone',function(req,res)
{
      console.log(req.params);
      let phone=req.params.phone;
});
*/
// it jsut visible over the url if delete it is an get request so it visible 

//for deleting a contact 

app.get('/delete-contact/',function(req,res)
{
      console.log(req.query);
      let phone=req.query.phone;

       let contactindex=contactList.findIndex(contact => contact.phone == phone);
       if(contactindex!=-1)
       {
         contactList.splice(contactindex,1);
       }

       return res.redirect('back');

});

app.listen(port,function(err){
    if(err)
    {
        console.log('Error in running the server',err);
    }
    console.log('Yup! my Express server is running on port:',port);
})