function Time() {
  document.getElementById("time").innerHTML = new Date().toLocaleTimeString();
  setTimeout(Time, 1000);
}