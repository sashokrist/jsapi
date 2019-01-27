var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var city = document.getElementById("city").value;
var apiKey = '&APPID=b411acedff0fca6e3d2414e032140192';
var tempUnit = '&units=metric';
function setup(){
  
 }

 function weatherAsk(){
    var url = api + city + apiKey + tempUnit;
    loadJSON(url, gotData);
 }

 function gotData(data){
     console.log(data);
     console.log("temp: "+data.main.temp);
     console.log("description: "+data.weather[0].description);
    
    
 }