const http = require('http'),
axios = require('axios'),
logger = require('morgan'),
cors = require('cors'),
express = require('express'), //our router 
bodyParser = require('body-parser');

var app = express();
var port = 8000;

app.use(bodyParser.json()) //json and parser 

app.get('/hello/:foo/:bar', (req, res) =>{ //to play around 'trick'
   res.json({message: 'Hello BScBest!', data: [
       req.params.foo,
       req.params.bar
   ]});
   });
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
let chars = [];
(async function getNames(){
    try{
   // const {data} = await axios.get("https://jsonplaceholder.typicode.com/users"); end point 
        const {data} = await axios.get("https://swapi.dev/api/people/");
        // users = data.map(user=>user.name);
        // emails = data.map(email=>email.email);
        chars = data.results.map(char=>char.name);
        // console.log(users)
        // console.log(emails)
        console.log(chars)
    } catch(error){
        console.log(error)
    }
})()

app.listen(port, function(err){
    console.log('Listining on port:' + port)
});