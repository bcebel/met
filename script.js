
var requestUrlTown;
var requestUrl;
// = 'http://api.openweathermap.org/geo/1.0/direct?q=concord,NH,US&limit=5&appid=34521a28a4def3010dcdc2b1c8619654'
var latitude;
var longitude;
var todayContainer = document.getElementById('today');
var cityContainer = document.getElementById('lists');
var fetchButton = document.getElementById('fetch-button');
var cityForm = document.querySelector('form')
var oldTownRoad = document.getElementById('history');
var formData;
var city;
var state;
const history = [];
let newObject;
var historyParse;
var bttn1;
var bttn2;
var bttn3;
var bttn4;
var bttn5;
var box;
const formy = document.getElementById('theForm');
const namey = formy.elements['inputCity'];
const statey = formy.elements['inputState']
let theCity;
let theState;
var getApi;
console.log(formy);
console.log(namey);

var myFunction = function () {
  let locationArray = [theCity, theState];
  console.log(locationArray);

  window.localStorage.setItem("Initial", JSON.stringify(locationArray));
  let comprehensiveHistory = window.localStorage.getItem("Initial");
  let parsedData = JSON.parse(comprehensiveHistory);
  console.log(parsedData)

  newObject = window.localStorage.getItem("History");
  console.log(newObject + "wut")
  if (newObject == null) { historyParse = [theCity, theState]; console.log(historyParse + "these"); window.localStorage.setItem("History", JSON.stringify(historyParse)); }
  else { historyParse = JSON.parse(newObject); historyParse.push(theCity); historyParse.push(theState); console.log(historyParse + "horatio"); window.localStorage.setItem("History", JSON.stringify(historyParse)); console.log(historyParse); }

  console.log(historyParse);

  requestUrlTown = 'http://api.openweathermap.org/geo/1.0/direct?q=' + theCity + ',' + theState + ',US&limit=5&appid=34521a28a4def3010dcdc2b1c8619654'
  getApiTown(requestUrlTown);

}


var historyButtons = function () {

  bttn1 = document.createElement('button');
  bttn1.setAttribute("class","buttony")
  if (historyParse[0] === undefined) {bttn1.textContent=""} else{
  
  bttn1.textContent = historyParse[0] + " " + historyParse[1];}
  oldTownRoad.append(bttn1);
  bttn1.addEventListener('click', (e) => {
    document.getElementById('theForm').reset();
    e.preventDefault();
 todayContainer.textContent="";
 cityContainer.textContent="";
    theCity = historyParse[0];
    theState = historyParse[1];
    requestUrlTown = 'http://api.openweathermap.org/geo/1.0/direct?q=' + theCity + ',' + theState + ',US&limit=5&appid=34521a28a4def3010dcdc2b1c8619654';
    getApiTown(requestUrlTown); })

  bttn2= document.createElement('button');
  bttn2.setAttribute("class","buttony")
  if (historyParse[2] === undefined) {bttn2.textContent=""} else{

  bttn2.textContent = historyParse[2] + " " + historyParse[3]};
  oldTownRoad.append(bttn2);
  bttn2.addEventListener('click', (e) => {
    document.getElementById('theForm').reset();
    e.preventDefault();
 todayContainer.textContent="";
 cityContainer.textContent="";
    theCity = historyParse[2];
    theState = historyParse[3];
    requestUrlTown = 'http://api.openweathermap.org/geo/1.0/direct?q=' + theCity + ',' + theState + ',US&limit=5&appid=34521a28a4def3010dcdc2b1c8619654';
    getApiTown(requestUrlTown); })


  bttn3 = document.createElement('button');
  bttn3.setAttribute("class","buttony")
  if (historyParse[4] === undefined) {bttn2.textContent=""} else{

  bttn3.textContent = historyParse[4] + " " + historyParse[5]};
  oldTownRoad.append(bttn3);  
  bttn3.addEventListener('click', (e) => {
    document.getElementById('theForm').reset();
    e.preventDefault();
 todayContainer.textContent="";
 cityContainer.textContent="";
    theCity = historyParse[4];
    theState = historyParse[5];
    requestUrlTown = 'http://api.openweathermap.org/geo/1.0/direct?q=' + theCity + ',' + theState + ',US&limit=5&appid=34521a28a4def3010dcdc2b1c8619654';
    getApiTown(requestUrlTown); })


  bttn4= document.createElement('button');
  bttn4.setAttribute("class","buttony")
  if (historyParse[6] === undefined) {bttn2.textContent=""} else{

  bttn4.textContent = historyParse[6] + " " + historyParse[7]};
  oldTownRoad.append(bttn4);
  bttn4.addEventListener('click', (e) => {
    document.getElementById('theForm').reset();
    e.preventDefault();
 todayContainer.textContent="";
 cityContainer.textContent="";
    theCity = historyParse[6];
    theState = historyParse[7];
    requestUrlTown = 'http://api.openweathermap.org/geo/1.0/direct?q=' + theCity + ',' + theState + ',US&limit=5&appid=34521a28a4def3010dcdc2b1c8619654';
    getApiTown(requestUrlTown); })


  bttn5 = document.createElement('button');
  bttn5.setAttribute("class","buttony")
  if (historyParse[8] === undefined) {bttn2.textContent=""} else{

  bttn5.textContent = historyParse[8] + " " + historyParse[9]};
  oldTownRoad.append(bttn5);
  bttn5.addEventListener('click', (e) => {
    document.getElementById('theForm').reset();
    e.preventDefault();
 todayContainer.textContent="";
 cityContainer.textContent="";
    theCity = historyParse[8];
    theState = historyParse[9];
    requestUrlTown = 'http://api.openweathermap.org/geo/1.0/direct?q=' + theCity + ',' + theState + ',US&limit=5&appid=34521a28a4def3010dcdc2b1c8619654';
    getApiTown(requestUrlTown); })

}
  /*
console.log(historyParse.length);
  if (historyParse.length == 2) {
    bttn = document.createElement('button');
    bttn.textContent = historyParse[0] + " " + historyParse[1];
    oldTownRoad.append(bttn);
    bttn.addEventListener('click', (e) => {
      e.preventDefault();
   todayContainer.remove();
   cityContainer.remove();
      theCity = historyParse[0];
      theState = historyParse[1];
      requestUrlTown = 'http://api.openweathermap.org/geo/1.0/direct?q=' + theCity + ',' + theState + ',US&limit=5&appid=34521a28a4def3010dcdc2b1c8619654';
      getApiTown(requestUrlTown);
    });
  }

  else if (historyParse.length == 4) {
    bttn = document.createElement('button');
    bttn.textContent = historyParse[0] + " " + historyParse[1];
    bttn.addEventListener('click', (e) => {
      e.preventDefault();
      theCity = historyParse[0];
      theState = historyParse[1];
      requestUrlTown = 'http://api.openweathermap.org/geo/1.0/direct?q=' + theCity + ',' + theState + ',US&limit=5&appid=34521a28a4def3010dcdc2b1c8619654';
      document.querySelector('theForm').reset();
      getApiTown(requestUrlTown);

    });
};
};
*/


function getApiTown(requestUrlTown) {
  fetch(requestUrlTown)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data[0]);

      latitude = data[0].lat;
      longitude = data[0].lon;

requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=34521a28a4def3010dcdc2b1c8619654&units=imperial';
getApi(requestUrl);
    })}


 getApi = function(requestUrl) {
        fetch(requestUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log(data);
            var cityName = document.createElement('h1');
            cityName.textContent = data.city.name;
            todayContainer.append(cityName);

            var url = "http://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png";
            var image = new Image();
            image.src = url;
            image.setAttribute("class", "w-25");
            document.getElementById('today').appendChild(image);

            var date = document.createElement('h2');
            date.textContent = "Today"
            todayContainer.append(date)

            var temperature = document.createElement('h3');
            temperature.textContent = data.list[0].main.temp + " °F";
            todayContainer.append(temperature)

            var main = document.createElement('h3');
            main.textContent = "Humidity: " + data.list[0].main.humidity;
            todayContainer.append(main);

            var description = document.createElement('h3');
            description.textContent = "Wind: " + data.list[0].wind.speed;
            todayContainer.append(description);

            for (var i = 6; i < data.list.length; i = i + 8) {
              if (i == 6) {
                box = document.createElement('span');
                box.setAttribute("id", "seven");
                box.setAttribute("class", "col")
              } else
                if (i == 14) {
                  var box = document.createElement('span');
                  box.setAttribute("id", "fifteen");
                  box.setAttribute("class", "col")
                } else
                  if (i == 22) {
                    var box = document.createElement('span');
                    box.setAttribute("id", "twentythree");
                    box.setAttribute("class", "col")
                  } else
                    if (i == 30) {
                      var box = document.createElement('span');
                      box.setAttribute("id", "thirtyone");
                      box.setAttribute("class", "col")
                    } else
                      if (i = 38) {
                        var box = document.createElement('span');
                        box.setAttribute("id", "thirtynine");
                        box.setAttribute("class", "col")
                      }

              var date = document.createElement('h2');
              var length = 10;
              var myString = data.list[i].dt_txt;
              date = myString.substring(6, length);
              date.textContent = data.list[i].dt_txt;
              box.append(date);
              cityContainer.append(box);

              var url = "http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + "@2x.png";
              var image = new Image();
              image.src = url;
              image.setAttribute("class", "w-25");
              box.append(image);
              document.getElementById('lists').appendChild(box);

              var temperature = document.createElement('li');
              temperature.textContent = "Temp " + data.list[i].main.temp + " °F";
              box.append(temperature);
              cityContainer.append(box);

              var main = document.createElement('li');
              main.textContent = "Humidity: " + data.list[i].main.humidity;
              box.append(main);
              cityContainer.append(box);

              var description = document.createElement('li');
              description.textContent = "Wind: " + data.list[i].wind.speed;
              box.append(description)
              cityContainer.append(box);

              var blank = document.createElement('p');
              blank.textContent = " ";
              box.append(blank)
              cityContainer.append(box);
              
            }
          });
      }



formy.addEventListener('submit', function (event) {
  todayContainer.textContent="";
  cityContainer.textContent="";
  event.preventDefault();
  theCity = namey.value;
  theState = statey.value;
  console.log(theCity);
  console.log(theState);
  myFunction();
  historyButtons();
  

});