console.log("..........XML HTTP Request for restcountries region,sub region,populations.......");
let xhr1 = new XMLHttpRequest();
console.log(xhr1);
xhr1.open("GET","https://restcountries.com/v2/all?fields=region,subregion,populations");
xhr1.send();
xhr1.onload = function(){
    const data = JSON.parse(xhr1.response)
    console.log(data);
    console.log(xhr1.response)
    document.writeln("........web page output.....document.writeln(xhr1.response).........")
    document.writeln(xhr1.response)
}