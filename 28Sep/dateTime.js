let greeting = document.querySelector(".greetings");
let time = document.querySelector(".time");
let date = document.querySelector(".date");

setInterval(() => {
  let today = new Date();

  let greetingOut = "";
  if (today.getHours() >= 16) {
    greetingOut = "Good Evening";
  } else if (today.getHours() > 12) {
    greetingOut = "Good Afternoon";
  } else greetingOut = "Good Morning";

  greeting.innerText = greetingOut;

  let am_pm = today.getHours() >= 12 ? " PM" : "AM";
  let hours = am_pm == "am" ? today.getHours() : today.getHours() - 12;
  let timeOut = hours + ":" + today.getMinutes() + ":" + today.getSeconds() + " " + am_pm;
  time.innerText = timeOut;

  let month = today.getUTCMonth();
  let monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  month = monthName[month];
  let dateOut = today.getDate() + " " + month + " " + today.getUTCFullYear();
  date.innerText = dateOut;
}, 1000);
