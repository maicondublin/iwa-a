const http = require('http');
const axios = require('axios');

http.createServer((req, res)=>{
//res.write("Hello BSc3! \n");//write a response
// res.write(users.join(", ")); //display the list of users on the page
// res.write("\n\n"+emails.join(", ")); 
res.write(chars.join(", "));
res.end();//end the response
}).listen(8000);//listen for response on port 8000

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