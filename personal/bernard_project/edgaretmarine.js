console.log("back off hackerssss");

var money = 100;
money_p = document.getElementById('money_p')
money_p.innerHTML = money + " $"

love = 0;
love_p = document.getElementById('love_p');
love_p.innerHTML = love + "/100	&#9829;"

hot = 0;
hot_p = document.getElementById('hot_p');
hot_p.innerHTML = hot + "/100 Hotness &#9832";

torso= $("#bernard_torso")
torso_width = $("#bernard_torso").width();
function getFat() {

	console.log(torso_width)
	torso_width += 10;
	console.log(torso_width)
	document.getElementById("bernard_torso").style.width= torso_width+"px";
	money= money-10;
	money_p.innerHTML = money + " $"
	if (money<0) {
		alert("YOU LOOSE");
		location.reload();
	}
}

function hacking(){
	money= money+1;
	money_p.innerHTML = money + " $"
}

function workout(){
	hot= hot+1;
	hot_p.innerHTML = hot + "/100 Hotness &#9832";
}
function makeItRain(){
	love = love+50;
	love_p.innerHTML = love + "/100	&#9829;"
	money = money-500;
	money_p.innerHTML = money + " $"
	if()
	if (money<0) {
		alert("YOU LOOSE");
		location.reload();
	}
}
