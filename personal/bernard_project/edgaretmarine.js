console.log("back off hackerssss");
var money = 100;
money_p = document.getElementById('money_p')
money_p.innerHTML = money + " $"
love = 0;
hot = 0;
torso= $("#bernard_torso")
torso_width = $("#bernard_torso").width();
function getFat() {

	console.log(torso_width)
	torso_width += 10;
	console.log(torso_width)
	document.getElementById("bernard_torso").style.width= torso_width+"px";
}
