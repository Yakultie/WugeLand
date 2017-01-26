alert("It is advised to zoom out or in (depending on your screen resolution) for optimum experience. ")

abs=document.getElementById('abs');

$("#hacking_gif").hide();

var money = 100;
money_p = document.getElementById('money_p')
money_p.innerHTML = money + " $"

love = 0;
love_p = document.getElementById('love_p');
love_p.innerHTML = love + "/100	&#9829;"

social = 0;
social_p = document.getElementById('social_p');
social_p.innerHTML = social + "/100 Socialness";

torso= $("#bernard_torso")
torso_width = $("#bernard_torso").width();
function getSocial() {
	money= money-2;
	money_p.innerHTML = money + " $"
	social = social +2
	social_p.innerHTML = social + "/100 Socialness";
	if (money<0) {
		alert("YOU LOSE");
		location.reload();
	}
	if (social>99) {
		if (love>99) {
			alert("YOU WIN")
			// window.location.href = "http://tarinee.io";
		}
	}
}

function BernardButler(){
	money= money+5;
	money_p.innerHTML = money + " $"
	document.getElementById('id')

}

function talkToMarine(){
	social= social+5;
	social_p.innerHTML = social + "/100 Socialness";
	money = money-5;
	money_p.innerHTML = money + " $"
	if (money<0) {
		alert("YOU LOSE");
		location.reload();
	}
	if (social>99) {
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
	if (social>99) {
		if (love>99) {
			alert("YOU WIN")
			// window.location.href = "http://tarinee.io";
		}
	}
	if (money<0) {
		alert("YOU LOSE");
		location.reload();
	}
}

function smile(){

}

function cheat() {
	money=100000000;
	love=50;
	social=90;
}
