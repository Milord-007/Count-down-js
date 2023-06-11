let days = document.querySelector(".days")
let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")



 
setInterval(()=>{
        let date = new Date()
        days.innerHTML = date.getDate() > 9 ? date.getDate() : "0" + date.getDay()
        hours.innerHTML = date.getHours() > 9 ? date.getHours() : "0" + date.getHours();
        minutes.innerHTML = date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
        seconds.innerHTML = date.getSeconds() > 9 ? date.getSeconds() :  "0" + date.getSeconds()
},1000)

