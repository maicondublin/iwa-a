const http = require('http'),
//axios = require('axios'),
logger = require('morgan'), //would be our logger 
cors = require('cors'), //allows to do our crossserver on the browser.note has to share same URL.
express = require('express'), //our router 
bodyParser = require('body-parser');
mongoose = require('mongoose'); //allows us to connect to DB.

var app = express();
var port = 8000; //by default run on port 80 too.

//middleware line 12/13
app.use(bodyParser.json()) //json and parser 
app.use(logger('tiny')); // logger for "morgan" i think
app.use(require('./routes'));// routes on the routes.js file

app.listen(port, function(err){
    console.log('Listining on port:' + port)
});

//connected to mongoDbAtlas
const dbURI = "mongodb://localhost/test";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err));


//routing line 17 to 24 
//end point line 14 
// app.get('/hello/:foo/:bar', (req, res) =>{ //to play around 'trick'
//    res.json({message: 'Hello BScBest!', data: [
//        req.params.foo,
//        req.params.bar
//    ]});
//    });
// //post requesting 
//    app.post('/hello', (req, res) => {
//        res.json({result: 'Post was sent', data: req.body});
//    });
// //use the below one 
// app.get('/hello', (req, res) =>{
//    res.json({message: 'Hello BScBest!'}); //json file ??!
// // res.write("Hello BScBest!")
// //res.send('Hello BScBest!' + '\n\n' + chars.join('\n'));
// // res.send('Hello BScBest!');
// // res.write(users.join('\n'));
// });//first router or root

// http.createServer((req, res)=>{
// //res.write("Hello BSc3! \n");//write a response
// // res.write(users.join(", ")); //display the list of users on the page
// // res.write("\n\n"+emails.join(", ")); 
// res.write(chars.join(", "));
// res.end();//end the response
// }).listen(8000);//listen for response on port 8000

// let users = []; //name of users will be stored here.
// axios.get("https://jsonplaceholder.typicode.com/users")
// .then(({data}) =>{
// users = data.map(user => user.email); //get only the names of all users
//                                         //and store in an array.
// console.log(users)                                        
// })
// .catch(error=>{
// console.log(error);
// });
//async 'method'
// let users = []; //name of users will be stroed here
// let email = [];
// let chars = [];
// (async function getNames(){
//     try{
//    // const {data} = await axios.get("https://jsonplaceholder.typicode.com/users"); end point 
//         const {data} = await axios.get("https://swapi.dev/api/people/");
//         // users = data.map(user=>user.name);
//         // emails = data.map(email=>email.email);
//         chars = data.results.map(char=>char.name);
//         // console.log(users)
//         // console.log(emails)
//         console.log(chars)
//     } catch(error){
//         console.log(error)
//     }
// })()

//connected to mongoDb - mongoose
// mongoose.connect('mongodb://localhost/test');

// mongoose.connection.on('error', (err) => { 
//     console.log('Mongodb Error: ', err); 
//     process.exit();
// });
// mongoose.connection.on('connected', () => { 
//     console.log('MongoDB is successfully connected');
// });