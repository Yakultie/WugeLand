console.log("back off hackerssss");
alert("please zoom out to 75% for optimum experience")

abs=document.getElementById('abs');

$("#hacking_gif").hide();

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

	money= money-10;
	money_p.innerHTML = money + " $"
	document.getElementById('mouth').style.height="40px";
	setTimeout(function () {
		document.getElementById('mouth').style.height="15px";
		document.getElementById("bernard_torso").style.width= torso_width+"px";
	}, 1000);
	if (money<0) {
		alert("YOU LOOSE");
		location.reload();
	}
}

function hacking(){
	money= money+10;
	money_p.innerHTML = money + " $"
	document.getElementById('id')
	$("#hacking_gif").show();
	setTimeout(function () {
		$("#hacking_gif").hide();
	}, 200);

}

function workout(){
	hot= hot+1;
	hot_p.innerHTML = hot + "/100 Hotness &#9832";
	money = money-5;
	money_p.innerHTML = money + " $"
	ab_value = hot/100;
	abs.style.opacity = ab_value;
	if (money<0) {
		alert("YOU LOOSE");
		location.reload();
	}
	if (hot>99) {
		if (love>99) {
			alert("YOU WIN")
			// window.location.href = "http://tarinee.io";
		}
	}
}
function makeItRain(){
	love = love+50;
	love_p.innerHTML = love + "/100	&#9829;"

	money = money-500;
	money_p.innerHTML = money + " $"
	if (hot>99) {
		if (love>99) {
			alert("YOU WIN")
			// window.location.href = "http://tarinee.io";
		}
	}
	if (money<0) {
		alert("YOU LOOSE");
		location.reload();
	}
}

function smile(){

}

function cheat() {
	money=100000000;
	love=50;
	hot=90;
}
