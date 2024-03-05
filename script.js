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


function load() {
  let endBtn = document.getElementById("end");
  let smallTitle = document.getElementById("smallTitle");
  let mainImg = document.getElementById("mainImg");
  let linesDiv = document.getElementsByClassName("lines-container")[0];
  var lines = document.querySelectorAll('.lines');
  window.addEventListener("resize", function (event) {
    adjustSize(linesDiv)
  })
  adjustSize(linesDiv)

  lines.forEach(function (line, index) { line.style.animation = index % 2 ? "linesAnim 4s" : "linesAnim2 4s"; });

  window.onscroll = function () {
    let value = Math.min(Math.max(document.body.scrollTop, document.documentElement.scrollTop), 500)

    linesDiv.style.filter = `blur(${value / 20}px)`
    mainImg.style.scale = 1 - value / 500

    if (value > 200) {
      endBtn.style.opacity = "1"; endBtn.style.pointerEvents = "auto";
      smallTitle.style.opacity = "1"; smallTitle.style.filter = `none`;
    }
    else {
      endBtn.style.opacity = "0"; endBtn.style.pointerEvents = "none";
      smallTitle.style.opacity = "0"; smallTitle.style.filter = `blur(10px)`;
    }
  };
}

function adjustSize(el) {
  el.style.height = `calc(100vh - ${document.getElementsByClassName('topnav')[0].offsetHeight}px)`
}