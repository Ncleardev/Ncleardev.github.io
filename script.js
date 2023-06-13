function Time() {
  document.getElementById("time").innerHTML = new Date().toLocaleTimeString();
  setTimeout(Time, 1000);
}

function msg() {
  if (confirm("Discord Username: @nclear\nPress OK to open profile")) {
    window.open('https://discord.com/users/384972072729837570', '_blank').focus();
  } else {
  }
}

function msg2() {
  if (confirm("Email: xyz.games.apps@gmail.com\nPress OK to create email draft")) {
    window.open('mailto:xyz.games.apps@gmail.com', '_blank').focus();
  } else {
  }
}
