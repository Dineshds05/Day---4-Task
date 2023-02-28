
console.log("..........XML HTTP Request for restcountries capital , flags.......");
let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET","https://restcountries.com/v2/all?fields=name,capital,flags");
xhr.send();
xhr.onload = function(){
    const data = JSON.parse(xhr.response)
    console.log(data);
    console.log(xhr.response)
    document.writeln(xhr.response)
}
// 
let myvar=1;
let weeks
let flag
let name
console.log("myvar");
var firstname= "Dinesh"; //value string datatype
       var lastname = "Kumar";
      var maritalstatus = "Unmarried";
       var country = "india";
var age = 25; //value datatype - number
console.log(firstname);
console.log(lastname);
console.log(maritalstatus);
console.log(country);
console.log(age);
//single line variable declaration using objects
let details = {
    firstname :"Dinesh",Age : 25, lastname : "kumar",maritalstatus : "unmarried",country : "india"
    }
console.log(details);

//arrow function
const log=(don)=>console.log(don);

//squre of a number
   var a=15;
   log(a*a);

//swapping of two variables
   
var b=10;
var temporary;
log(".......Before swapping.....")
log(a);
log(b);
temporary = a;
a=b;
b=temporary;
log("......After swapping.......")
log(a);
log(b);

//Addition of 3 numbers
//var a=10
//var b=15
var c=20;
log(a+b+c);

//celsius to fahrenheit
log("......celsius to fahrenheit......")
function convert(celsius){
    let fahrenheit = celsius * 9/5 + 32;
    log(fahrenheit);
}
convert(25)

//Meter to miles
log("......Meter to Miles.......")
function con(meter){
   let miles = meter*0.000621371192;
   log(miles);
}
con(25)

//Pounds to kg
log(".......pounds to kg........")
function convert1(pounds){
    let kg = pounds / 2.2046;
    log(kg);
}
convert1(10)

// Calculate batting Average

function Averageofbatsman(runs, matches, notout){
    let outs;
    outs = matches - notout;
    if(outs==0)
    log("Negative");
    let Avrge = parseInt((runs)/outs, 10);
    log(Avrge);
}
Averageofbatsman(5000, 200, 50)

//
log("...........obj compares..............");
let obj1 = {name : "Person 1",age : 5};
let obj2 = {age : 5,name : "Person 1" };
log(obj1);
log(obj2);
log(obj1.name);
log(obj2.age);
log(obj1.age);
log(obj2.name);