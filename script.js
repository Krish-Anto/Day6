//Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
//Get all the countries from Asia continent /region using Filter function

//1st step : create a XHR object
var request1 = new XMLHttpRequest();
//2nd step: API URL
//.open method
//2 parameters
request1.open("GET","https://restcountries.com/v2/all");
//3rd step : establishing the bridge
request1.send();
//4th step : once the data sucessfully received from server
//onload is an event
//when we use :  once the data / server is showing 200 sataus code
request1.onload=function(){
    var result1=JSON.parse(request1.response);
    var odd = result1.filter((element)=> {
    if(element.region==='Asia'){
   return element.name;
    }
    });
    console.log(odd);
    };
// Get all the countries with a population of less than 2 lakhs using Filter function

//1st step : create a XHR object
var request = new XMLHttpRequest();
//2nd step: API URL
//.open method
//2 parameters
request.open("GET","https://restcountries.com/v2/all");
//3rd step : establishing the bridge
request.send();
//4th step : once the data sucessfully received from server
//onload is an event
//when we use :  once the data / server is showing 200 sataus code
request.onload=function(){
    var result=JSON.parse(request.response);
    var codd = result.filter((element)=> {
    return element.population<200000;
    });

    console.log(codd);
    };
//Print the following details name, capital, flag, using forEach function

var requestt = new XMLHttpRequest();

requestt.open("GET","https://restcountries.com/v2/all");
requestt.send();
requestt.onload=function(){
    var resultt=JSON.parse(requestt.response);
     resultt.forEach(element => {
        console.log(element.name);
        console.log(element.capital);
        console.log(element.flag);
        
     });
    
    };

//Print the total population of countries using reduce function
var reques = new XMLHttpRequest();

reques.open("GET","https://restcountries.com/v2/all");
reques.send();
reques.onload=function(){
var resul=JSON.parse(reques.response);
var total = resul.reduce((acc,curr) =>{
        return acc+curr.population;
    } ,0);
  console.log(total);
} 
};

//Print the country that uses US dollars as currency.
var req = new XMLHttpRequest();

req.open("GET","https://restcountries.com/v2/all");
req.send();
req.onload=function(){
var currency = res.filter((element) => {
     for(let key in element.currencies){
        if(element.currencies[key].code === "USD"){
            return element;
        }
       console.log(currency);
     }
   })
        
