const express = require('express');
const path = require('path');
const fs = require('fs');
var cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());


app.use((req, res, next) =>{
	fs.appendFile("request.log", `${req.method} ${req.url} ${new Date().toString()}\n`, (err) => {
		if(err){
			console.log("couldnt write to file");
		}
	});
	next();
});



app.post('/api/add', function (req, res) {


  
  
  res.send(["/api/add works!"]);
  
});

app.post('/api/sendemail', function (req, res) {
	
	res.send(["email sent success"]);
});


app.delete('/api/delete', function (req, res) {

  
  
  
  res.send(["/api/delete works!"]);
  
});


app.get('/api/read', function (req, res) {  
 	res.send("/api/read works!")
});


app.use(express.static(path.join(__dirname, './build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

var PORT = process.env.PORT || 9000;
app.listen(PORT);