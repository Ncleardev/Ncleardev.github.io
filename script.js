function Time() {
  document.getElementById("time").innerHTML = new Date().toLocaleTimeString();
  setTimeout(Time, 1000);
}

function msg() {
  if (confirm("Discord Username: Nclear#0981\nPress OK to open profile")) {
    window.open('https://discord.com/users/384972072729837570', '_blank').focus();
  } else {
  }
}