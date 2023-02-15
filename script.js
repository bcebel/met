
var requestUrlTown;
// = 'http://api.openweathermap.org/geo/1.0/direct?q=concord,NH,US&limit=5&appid=34521a28a4def3010dcdc2b1c8619654'
var latitude;
var longitude;
var todayContainer = document.getElementById('today');
var cityContainer = document.getElementById('lists');
var fetchButton = document.getElementById('fetch-button');
var cityForm=document.querySelector('form')
var oldTownRoad=document.getElementById('history');
var formData;
var city;
var state;
const history=[];
let newObject;
var historyParse;
var bttn;
var bttn2;
var bttn3;
var bttn4;
var bttn5;

const formy = document.getElementById('theForm');
const namey = formy.elements['inputCity'];
const statey= formy.elements['inputState']
let theCity;
let theState;
console.log(formy);
console.log(namey);


var myFunction=function(){
let locationArray=[theCity,theState];
console.log(locationArray);

  window.localStorage.setItem("Initial", JSON.stringify(locationArray));
  let comprehensiveHistory=window.localStorage.getItem("Initial");
  let parsedData=JSON.parse(comprehensiveHistory);
  console.log(parsedData)
  

    /*
  console.log("this"+ cityForm.City);
  city=localStorage.getItem("City");
  history.push(city)
state=localStorage.getItem("State");
history.push(state);
console.log(history);
*/

newObject = window.localStorage.getItem("History");
console.log(newObject+"wut")
if (newObject ==null){historyParse=[theCity,theState]; console.log(historyParse+"these");window.localStorage.setItem("History", JSON.stringify(historyParse));}
else {historyParse=JSON.parse(newObject);historyParse.push(theCity);historyParse.push(theState);console.log(historyParse+"horatio");window.localStorage.setItem("History", JSON.stringify(historyParse)); console.log(historyParse);}

console.log(historyParse);

requestUrlTown = 'http://api.openweathermap.org/geo/1.0/direct?q='+theCity+','+theState+',US&limit=5&appid=34521a28a4def3010dcdc2b1c8619654'
getApiTown(requestUrlTown);

 }


 var historyButtons=function()
 
 {if (historyParse.length==2){
  bttn=document.createElement('button');
  bttn.textContent=historyParse[0]+" "+historyParse[1];
//requestUrlTown = 'http://api.openweathermap.org/geo/1.0/direct?q='+historyParse[0]+','+historyParse[1]+',US&limit=5&appid=34521a28a4def3010dcdc2b1c8619654';
//getApiTown(requestUrlTown)
  oldTownRoad.append(bttn);
  oldTownRoad.addEventListener('click', (e) => {e.preventDefault();
window.localStorage.setItem("City", historyParse[0])
window.localStorage.setItem("State", historyParse[1])
  requestUrlTown = 'http://api.openweathermap.org/geo/1.0/direct?q='+city+','+state+',US&limit=5&appid=34521a28a4def3010dcdc2b1c8619654'
  getApiTown(requestUrlTown);
  document.querySelector('form').reset();
 })
 

  myFunction2();

}
 
else if (historyParse.length==3){
  bttn=document.createElement('button');
  oldTownRoad.append(bttn);
  bttn.textContent=historyParse[2][0]+" "+historyParse[2][1];
  bttn2=document.createElement('button');
  oldTownRoad.append(bttn2);
  bttn2.textContent=historyParse[0]+" "+historyParse[1];

 }else if (historyParse.length==5){
 
  bttn=document.createElement('button');
  oldTownRoad.append(bttn);
  bttn.textContent=historyParse[4][0]+" "+historyParse[4][1];

  bttn2=document.createElement('button');
  oldTownRoad.append(bttn2);
  bttn2.textContent=historyParse[2]+" "+historyParse[3];

  bttn3=document.createElement('button');
  oldTownRoad.append(bttn3);
bttn3.textContent=historyParse[0]+" "+historyParse[1];

 }else if(historyParse.length==7){

  bttn=document.createElement('button');
  oldTownRoad.append(bttn);
  bttn.textContent=historyParse[6][0]+" "+historyParse[6][1];

  bttn2=document.createElement('button');
  oldTownRoad.append(bttn2);
  bttn2.textContent=historyParse[4]+" "+historyParse[5];

  bttn3=document.createElement('button');
  oldTownRoad.append(bttn3);
  bttn3.textContent=historyParse[2]+" "+historyParse[3];

  bttn4=document.createElement('button');
  oldTownRoad.append(bttn4);
bttn4.textContent=historyParse[0]+" "+historyParse[1];

 }else if(historyParse.length==9){

  bttn=document.createElement('button');
  oldTownRoad.append(bttn);
  bttn.textContent=historyParse[8][0]+" "+historyParse[8][1];


  bttn2=document.createElement('button');
  oldTownRoad.append(bttn2);
  bttn2.textContent=historyParse[6]+" "+historyParse[7];

  bttn3=document.createElement('button');
  oldTownRoad.append(bttn3);
  bttn3.textContent=historyParse[4]+" "+historyParse[5];

  bttn4=document.createElement('button');
  oldTownRoad.append(bttn4);
  bttn4.textContent=historyParse[2]+" "+historyParse[3];

  bttn5=document.createElement('button');
  oldTownRoad.append(bttn5);
bttn5.textContent=historyParse[0]+" "+historyParse[1];

 } else if (historyParse.length=11){
  localStorage.clear();
 }

  }
 ;
 //need to make array that holds city name and coordinates
 //need to make button for locations based on history.length
//cityForm.addEventListener("submit", myFunction);
//if isnull


formy.addEventListener('submit', function(event){event.preventDefault();
  theCity = namey.value;
  theState=statey.value;
  console.log(theCity);
  console.log(theState);

  document.getElementById('theForm').reset();
  myFunction();

});

/*
cityForm.addEventListener('submit', (e) => {e.preventDefault();

  formData=new FormData(cityForm);
  for (item of formData) {localStorage.setItem(item[0], item[1]);

  }
  document.querySelector('form').reset();
  myFunction();
})
*/


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
      var cityName = document.createElement('h1');
      cityName.textContent = data.city.name;
      todayContainer.append(cityName);


        var url =  "http://openweathermap.org/img/wn/"+data.list[0].weather[0].icon+"@2x.png";
        var image = new Image();
        image.src=url;
        image.setAttribute("class","w-25");
        document.getElementById('today').appendChild(image);



var date = document.createElement('h2');
date.textContent = "Today"
todayContainer.append(date)


        var temperature = document.createElement('h3');
        temperature.textContent = data.list[0].main.temp+" °F";
        todayContainer.append(temperature)


        var main = document.createElement('h3');
        main.textContent = "Humidity: "+data.list[0].main.humidity;
        todayContainer.append(main);

        var description = document.createElement('h3');
        description.textContent = "Wind: "+data.list[0].wind.speed;
        todayContainer.append(description);



      for (var i = 6; i < data.list.length; i=i+8) {
if (i==6){
  var box =document.createElement('span');
  box.setAttribute("id","seven");
  box.setAttribute("class","col")
}else
if (i==14){
  var box =document.createElement('span');
  box.setAttribute("id","fifteen");
  box.setAttribute("class","col")
}else
if (i==22){
  var box =document.createElement('span');
  box.setAttribute("id","twentythree");
  box.setAttribute("class","col")
}else
if (i==30){
  var box =document.createElement('span');
  box.setAttribute("id","thirtyone");
  box.setAttribute("class","col")
}else
if (i=38){
  var box =document.createElement('span');
  box.setAttribute("id","thirtynine");
  box.setAttribute("class","col")
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

});
}

//getApiTown(requestUrlTown);