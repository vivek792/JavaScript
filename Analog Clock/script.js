const HOURHAND= document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


var date = new Date ();
console.log(date);
let hr =date.getHours();
let min =date.getMinutes();
let sec =date.getSeconds();
console.log("hour" + hr + "minute" + min + "second" + sec);

let hrPosition = (hr*360/12)+(min*(360/60)/12);
let minPosition = (min*360/12)+(sec*(360/60)/12);
let secPosition = sec*360/60;

function runTheclock() { 

    hrPosition = hrPosition+(3/360);
    minPosition = minPosition+(6/60);
    secPosition = secPosition+6;

   HOURHAND.style.transform = "rotate(" +hrPosition + "deg)";
   MINUTEHAND.style.transform  = "roatae(" +minPosition + "deg)";
   SECONDHAND.style.transform = "rotate(" +secPosition + "deg)";

}
 var interval = setInterval(runTheclock,1000);




