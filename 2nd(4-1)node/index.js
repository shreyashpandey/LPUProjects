const express = require('express');
const app = express();
// const request = require('request');
const fs= require('fs');
// import * as data from './Models/employee.json';
// const employees=data;
app.use(express.static('files'));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/View/index.html');
});
app.get('/home', function (req, res) {
    res.sendFile(__dirname + '/View/home.html');
  });
  var changeData;
  fs.readFile('./Model/employee.json', (err, data) => {
    if (err) throw err;
    changeData = JSON.parse(data);
    console.log(changeData);
});
app.post('/', function (req, res) {
  let Name = req.body.fname;
  let phone = req.body.phone;
  let eMail = req.body.email;
  let date=req.body.d1;
  let city=req.body.city;
//   console.log('Posted!', fName, phone, eMail);
  let body =
    {
        "Name":Name,
        "Email":eMail,
        "Phone Number":phone,
        "City":city,
        "Date":date

    };
//   employess.push(body);
changeData.push(body);
let data = JSON.stringify(changeData);

fs.writeFile('./Model/employee.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});

console.log('This is after the write call');
//   fs.writeFileSync('./Models/employees.json', data);

});
//   let data = JSON.stringify(student);
// fs.writeFileSync('student-2.json', data);
//   var options = {
//     url:
//       'https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.Capture?accessKey=u$r66ccc51c6b565c973085e79cf510d0af&secretKey=15109006ef923b1931a4dc7ea7b981a093828941',
//     method: 'POST',
//     body: body,
//     headers: {
//       'content-type': 'application/json',
//     },
//     json: true,
//   };

//   request(options, function (error, response, body) {
//     if (error) {
//       console.log(error);
//       res.sendFile(__dirname + '/failure.html');
//     } else {
//       if (response.statusCode == 200) {
//         res.sendFile(__dirname + '/success.html');
//         //console.log(response.statusCode);
//         console.log(response.body);
//       } else {
//         res.sendFile(__dirname + '/failure.html');
//       }
//     }
//   });
// });
app.listen(3000, function () {
    console.log('Server is running at port 3000');
  });