let http=require('http');
let express= require('express');
let app=express();
let bodyParser=require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


//create app server
var server = app.listen(3000,  "127.0.0.1", function () {

  var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://%s:%s", host, port)

});
app.post('/address',function(req,res,next){
   let s=req.body.a+req.body.b; 
  result.Sum=s;
  next();
//  res.end(JSON.stringify(req.body));

});
app.use((req,res,next)=>{
    console.log(result.Sum);
    if(req.body.a>0&&req.body.b>0)
    {
    res.send(JSON.stringify(result));
    }
    else
    {
    res.send('Error Occuredd');
    }
});