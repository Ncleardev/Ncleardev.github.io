function msg() {
  setTimeout(function() {
    if (confirm("@nclear\n\nPress OK to open profile")) {
      window.open('https://discord.com/users/384972072729837570', '_blank').focus()
    }
  }, 1)
}
function msg2() {
  setTimeout(function() {
    if (confirm("nclear.project@gmail.com\n\nPress OK to create email draft")) {
      window.open('mailto:nclear.project@gmail.com', '_blank').focus()
    }
  }, 1)
}

function load() {
  let endBtn = document.getElementById("end")
  let smallTitle = document.getElementById("smallTitle")
  let mainImg = document.getElementById("mainImg")
  let linesDiv = document.getElementsByClassName("lines-container")[0]
  let scrollable = document.getElementsByClassName("main-wrapper")[0]

  scrollable.onscroll = function () {
    let value = scrollable.scrollTop

    //linesDiv.style.filter = `blur(${value / 10}px)`
    mainImg.style.opacity = 1 - value / 200
    linesDiv.style.scale = 1 + value / 2000
    //lines.forEach(function (line, index) { line.style.transform = index % 2 ? `translateX(${-value}px) translateY(-63vw)` : `translateX(${value}px) translateY(-63vw)` })

    if (value > 200) {
      endBtn.style.opacity = "1"; endBtn.style.pointerEvents = "auto"
      smallTitle.style.opacity = "1"; smallTitle.style.filter = "none"
    }
    else {
      endBtn.style.opacity = "0"; endBtn.style.pointerEvents = "none"
      smallTitle.style.opacity = "0"; smallTitle.style.filter = ""
    }
  }
}