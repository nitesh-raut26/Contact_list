 const http=require('http');
 const port=8000;
 //fs-> file system module contains read,write,update,delete,rename files 
 // to read html file 
 const fs=require('fs');
//req-request,res->response
 function requestHandler(req,res){
     console.log(req.url);
     res.writeHead(200,{'content-type':'text/html'});
    //  res.end('<h1>Get it response</h1>');
    // fs.readFile('./index.html',function(err,data){
    //       if(err)
    //       {
    //         console.log('error',err);
    //         return res.end('<h1>Error!</h1>');
    //       }
    //       return res.end(data);
    // });


    let filepath;
    switch(req.url){
      case '/home':
        filepath='./index.html'
        break;
      case '/profile':
        filepath='./profile.html'
        break;
      default:
        filepath='./404.html'
    }
     fs.readFile(filepath,function(err,data){
          if(err)
          {
            console.log('error',err);
            return res.end('<h1>Error!</h1>');
          }
          return res.end(data);
    });

 } 


 const server=http.createServer(requestHandler);

 server.listen(port,function(err){
    if(err)
    {
        console.log(err);
        return;
    }
    console.log("Server is  running on port:",port);
 }); 



 ///nodeman we have to change server again and again so we have introduce 
 //nodemon package as soon as javascript changes it changes directly srver
 // so we install globally sudo npm intsall -g nodemon
 //Automatic server changes
 //Extending tom multiple page
