
let hrs = document.getElementById("hrs")
let mins = document.getElementById("mins")
let secs = document.getElementById("secs")
let moments = document.getElementById("moments")
let moment;
function Timelogic() {


let date = new Date()

let hr = date.getHours() % 12

let min = date.getMinutes()
let sec = date.getSeconds()

if(sec < 10) {
     secs.innerHTML =  "0" + sec 
}
  else {
    secs.innerHTML = sec
  }

    if(min < 10)  {
    mins.innerHTML = "0" + min
   }
    else {
         mins.innerHTML = min
    }

 if(hr < 10) {
    hrs.innerHTML = "0" + hr
  }
    else {
        hrs.innerHTML = hr
    }

 if(hr >= 12) {
    moment = "AM"
 }

else {
    moment = "PM"
}

 
 moments.innerHTML = moment

setTimeout(Timelogic, 1000)
}
  Timelogic()


  const apiKey = '';
const artistName = 'Arsjsj'; // replace with the name of the artist you want to get data for
const url = `https://www.theaudiodb.com/api/v1/json/${apiKey}/search.php?s=${artistName}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error(error));