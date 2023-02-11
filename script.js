
var requestUrlTown = 'http://api.openweathermap.org/geo/1.0/direct?q=concord,NH,US&limit=5&appid=34521a28a4def3010dcdc2b1c8619654'
var responseTextTown = document.getElementById('response-text');
var latitude;
var longitude;
var todayContainer = document.getElementById('today');

var cityContainer = document.getElementById('lists');
var fetchButton = document.getElementById('fetch-button');



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



console.log(latitude +"changes in")
  var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat='+latitude+'&lon='+longitude+'&appid=34521a28a4def3010dcdc2b1c8619654&units=imperial';

  var responseText = document.getElementById('response-text');
  
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
var myTruncatedString = myString.substring(0,length);
todayContainer.append(myTruncatedString)


        console.log(data.list[0].weather.icon)
        var url =  "http://openweathermap.org/img/wn/"+data.list[0].weather[0].icon+"@2x.png";
        var image = new Image();
        image.src=url;
        document.getElementById('today').appendChild(image);

        var temperature = document.createElement('li');
        temperature.textContent = data.list[0].main.temp;
        todayContainer.append(temperature)


        var main = document.createElement('li');
        main.textContent = data.list[0].weather[0].main;
        todayContainer.append(main);

        var description = document.createElement('li');
        description.textContent = data.list[0].weather[0].description;
        todayContainer.append(description);


      for (var i = 7; i < data.list.length; i=i+8) {
var date = document.createElement('li');

var length = 10;
var myString = data.list[i].dt_txt;
var myTruncatedString = myString.substring(0,length);
date.textContent=data.list[i].dt_txt;
cityContainer.append(myTruncatedString)

        console.log(data.list[i].weather.icon)
        var url =  "http://openweathermap.org/img/wn/"+data.list[i].weather[0].icon+"@2x.png";
        var image = new Image();
        image.src=url;
        image.setAttribute("class","w-25");
        document.getElementById('lists').appendChild(image);

        var temperature = document.createElement('li');
        temperature.textContent = data.list[i].main.temp;
        cityContainer.append(temperature)

        var main = document.createElement('li');
        main.textContent = data.list[i].weather[0].main;
        cityContainer.append(main);

        var description = document.createElement('li');
        description.textContent = data.list[i].weather[0].description;
        cityContainer.append(description);
      
      }

      
    });
  }
  getApi(requestUrl)
})
};
getApiTown(requestUrlTown);


// and again


