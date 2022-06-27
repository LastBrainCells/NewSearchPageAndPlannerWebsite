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

     let h = new Date().getHours();
     let m = new Date().getMinutes();

     if(h > 12){
         h = h - 12;
     }

     h = (h < 10) ? "0" + h : h
     m = (m < 10) ? "0" + m : m

     hours.innerHTML = h;
     minutes.innerHTML = m;

     var dateInfo = new Date();

     var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
     var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

     day = dateInfo.getDate();

     var currentDate = days[dateInfo.getDay()] + ", " + " " + month[dateInfo.getMonth()] + " " + day;

     document.getElementsByClassName("date")[0].innerHTML = currentDate;
 })

 //Google Search Bar

 $(document).ready(function(){
    $("#search").focus(function() {
      $(".search-box").addClass("border-searching");
      $(".search-icon").addClass("si-rotate");
    });
    $("#search").blur(function() {
      $(".search-box").removeClass("border-searching");
      $(".search-icon").removeClass("si-rotate");
    });
    $("#search").keyup(function() {
        if($(this).val().length > 0) {
          $(".go-icon").addClass("go-in");
        }
        else {
          $(".go-icon").removeClass("go-in");
        }
    });
    $(".go-icon").click(function(){
      $(".search-form").submit();
    });
});

