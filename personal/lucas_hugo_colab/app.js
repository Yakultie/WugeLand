console.log("BACK OFF HACKERSSSS")
var i = 1;
myFunction()

function myFunction() {
  setTimeout(function() {
    document.getElementById("loading_bar").value = i
    document.getElementById("loading_percentage").innerHTML = i + " %"
    i++;
    if (i < 101) {
      myFunction();
      if (i == 100) {
        document.getElementById("loading_div").innerHTML = " ";
        document.getElementById("play_button").innerHTML = "Play";
        document.getElementById("reload_button").innerHTML = "Shop";
        document.getElementById("play_button").style.backgroundColor ='#4CAF50';
        document.getElementById("reload_button").style.backgroundColor ='#4CAF50';
        document.getElementById("buttons_div").style.display = "block";

      }
    }
  }, 100)
}
function start_game(){
	window.location.href = "game/index.html";
}

function shop() {
	window.location.href = "shop/index.html";
}
