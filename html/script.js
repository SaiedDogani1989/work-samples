var time = new Date().getDay();
switch (time) {
  case 0: {
    document.getElementById("day").innerHTML = " Sunday";
    break;
  }
  case 1: {
    document.getElementById("day").innerHTML = " Monday";
    break;
  }
  case 2: {
    document.getElementById("day").innerHTML = "Tuesday";
    break;
  }
  case 3: {
    document.getElementById("day").innerHTML = "Wednesday";
    break;
  }
  case 4: {
    document.getElementById("day").innerHTML = " Thursday";
    break;
  }
  case 5: {
    document.getElementById("day").innerHTML = "Friday";
    break;
  }
  case 6: {
    document.getElementById("day").innerHTML = "Saturday";
    break;
  }
}

function printTime() {
  var d = new Date();
  var year = d.getFullYear();
  var day = d.getDate();
  var month = d.getMonth() + 1;

  switch (month) {
    case 1:
      month = "Januray";
      break;
    case 2:
      month = "Feberuray";
      break;
    case 3:
      month = "March";
      break;
    case 4:
      month = "April";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "June";
      break;
    case 7:
      month = "Julay";
      break;
    case 8:
      month = "Augest";
      break;
    case 9:
      month = "September";
      break;
    case 10:
      month = "October";
      break;
    case 11:
      month = "November";
      break;
    case 12:
      month = "December";
      break;
  }

  var hour = d.getHours();
  var mins = d.getMinutes();
  var sec = d.getSeconds();
  document.getElementById("date").innerHTML = day + " /" + month + "/" + year;
  document.getElementById("Clock").innerHTML = hour + ":" + mins + ":" + sec;
}
setInterval(printTime, 1000);
 

