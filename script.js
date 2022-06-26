 //Analog Clock

 let hour = document.querySelector('#hour');
 let minute = document.querySelector('#minute');
 let second = document.querySelector('#second');

 setInterval(() => {
     let time = new Date();
     let hh = time.getHours() * 30;
     let mm = time.getMinutes() * 6;
     let ss = time.getSeconds() * 6;

     hour.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
     minute.style.transform = `rotateZ(${mm}deg)`;
     second.style.transform = `rotateZ(${ss}deg)`;

     //Digital Clock

     let hours = document.getElementById('hours');
     let minutes = document.getElementById('minutes');
     let seconds = document.getElementById('seconds');
     //let ampm = document.getElementById('ampm');

     let h = new Date().getHours();
     let m = new Date().getMinutes();
     let s = new Date().getSeconds();

    // let am = h >= 12 ? "PM" : "AM";

     if(h > 12){
         h = h - 12;
     }

     h = (h < 10) ? "0" + h : h
     m = (m < 10) ? "0" + m : m
     s = (s < 10) ? "0" + s : s

     hours.innerHTML = h;
     minutes.innerHTML = m;
     seconds.innerHTML = s;
     //ampm.innerHTML = am;

     var dateInfo = new Date();

     var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
     var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

     day = dateInfo.getDate();

     function numberSuffix(Number){
         var suffix;
         if(Number == 1 || Number == 21 || Number == 31){
             suffix = "st";
         }
         else if(Number == 2 || Number == 22){
             suffix = "nd";
         } 
         else if(Number == 3 || Number == 23){
             suffix = "th";
         }
         else{
             suffix = "th";
         }

         return suffix;
     }

     var currentDate = days[dateInfo.getDay()] + ", " + " " + day + numberSuffix(day) + " " + month[dateInfo.getMonth()] + " " + dateInfo.getFullYear()

     document.getElementsByClassName("date")[0].innerHTML = currentDate;
 })