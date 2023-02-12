
var requestUrlTown;
// = 'http://api.openweathermap.org/geo/1.0/direct?q=concord,NH,US&limit=5&appid=34521a28a4def3010dcdc2b1c8619654'
var latitude;
var longitude;
var todayContainer = document.getElementById('today');
var cityContainer = document.getElementById('lists');
var fetchButton = document.getElementById('fetch-button');
var cityForm=document.querySelector('form')
var formData;
var city;
var state;
var myFunction=function(){
  console.log("this"+ cityForm.City);
  city=localStorage.getItem("City");
  console.log(city);
state=localStorage.getItem("State");
console.log(state);
requestUrlTown = 'http://api.openweathermap.org/geo/1.0/direct?q='+city+','+state+',US&limit=5&appid=34521a28a4def3010dcdc2b1c8619654'
getApiTown(requestUrlTown);
 }
//cityForm.addEventListener("submit", myFunction);
cityForm.addEventListener('submit', (e) => {e.preventDefault();

  formData=new FormData(cityForm);
  for (item of formData) {localStorage.setItem(item[0], item[1]);
    
  }
  myFunction();
})



function getApiTown(requestUrlTown) {
  fetch(requestUrlTown)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data[0]);

latitude=data[0].lat;
longitude=data[0].lon;



  var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat='+latitude+'&lon='+longitude+'&appid=34521a28a4def3010dcdc2b1c8619654&units=imperial';
  
function getApi(requestUrl) {
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var cityName = document.createElement('li');
      cityName.textContent = data.city.name;
      todayContainer.append(cityName);

      var date = document.createElement('li');
date.textContent=data.list[0].dt_txt;
var length = 10;
var myString = data.list[0].dt_txt;
var myTruncatedString = "Today";
todayContainer.setAttribute("class","card")
todayContainer.append(myTruncatedString)


        var url =  "http://openweathermap.org/img/wn/"+data.list[0].weather[0].icon+"@2x.png";
        var image = new Image();
        image.src=url;
        image.setAttribute("class","w-25");
        document.getElementById('today').appendChild(image);

        var temperature = document.createElement('li');
        temperature.textContent = data.list[0].main.temp;
        todayContainer.append(temperature)


        var main = document.createElement('li');
        main.textContent = "Humidity: "+data.list[0].main.humidity;
        todayContainer.append(main);

        var description = document.createElement('li');
        description.textContent = "Wind: "+data.list[0].wind.speed;
        todayContainer.append(description);


      for (var i = 7; i < data.list.length; i=i+8) {
if (i==7){
  var box =document.createElement('span');
  box.setAttribute("id","seven");
  box.setAttribute("class","card")
}else
if (i==15){
  var box =document.createElement('span');
  box.setAttribute("id","fifteen");
  box.setAttribute("class","card")
}else
if (i==23){
  var box =document.createElement('span');
  box.setAttribute("id","twentythree");
  box.setAttribute("class","card")
}else
if (i==31){
  var box =document.createElement('span');
  box.setAttribute("id","thirtyone");
  box.setAttribute("class","card")
}else
if (i=39){
  var box =document.createElement('span');
  box.setAttribute("id","thirtynine");
  box.setAttribute("class","card")
}


var date = document.createElement('h2');
var length = 10;
var myString = data.list[i].dt_txt;
date= myString.substring(6,length);
date.textContent=data.list[i].dt_txt;
box.append(date);
cityContainer.append(box);

        var url =  "http://openweathermap.org/img/wn/"+data.list[i].weather[0].icon+"@2x.png";
        var image = new Image();
        image.src=url;
        image.setAttribute("class","w-25");
        box.append(image);
        document.getElementById('lists').appendChild(box);

        
        var temperature = document.createElement('li');
        temperature.textContent = "Temp "+data.list[i].main.temp+" °F";
        box.append(temperature);
        cityContainer.append(box);

        var main = document.createElement('li');
        main.textContent = "Humidity: "+data.list[i].main.humidity;
        box.append(main);
        cityContainer.append(box);

        var description = document.createElement('li');
        description.textContent = "Wind: "+data.list[i].wind.speed;
        box.append(description)
        cityContainer.append(box);

        var blank=document.createElement('p');
        blank.textContent=" ";
        box.append(blank)
        cityContainer.append(box);
      }
    });
  }
  getApi(requestUrl)
})
}
//getApiTown(requestUrlTown);

