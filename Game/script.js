var bottomRow = document.getElementById('bottomRow');
var stats = document.getElementsByClassName('stats');
var playerStats = document.getElementById('playerStats');
var playerHP = document.getElementById('playerHP');
var playerMoves = document.getElementById('playerMoves');
var enemyHP= document.getElementById('enemyHP');

var plyrHP = 100;
var enmyHP = 100;

var battleMusic = document.getElementById('myAudio');
var victoryMusic = document.getElementById('myAudio2');
var musicControls = document.getElementById('music-controls');
var state ="on";

victoryMusic.volume = 0.10;

var snd = document.getElementById('myAudio3');
snd.volume = 0.10;

var cri = document.getElementById('myAudio4');
cri.volume = 0.10;

function beginBattle(){
	bottomRow.innerHTML = "Let's goooo!";
	for (var x=0; x<stats.length; x++){
		stats[x].style.visibility = "visible";
	}
	if (state == "off") {
		battleMusic.volume = 0;
	} else{
		battleMusic.volume = 0.25;
	}
	battleMusic.play();
}

function mute(){
	if (state == "off") {
		state ="on";
		musicControls.innerHTML = "<img src='assets/img/sndon.png' onclick=\"mute();\"></img>";
		battleMusic.volume = 0.25;
		victoryMusic.volume = 0.10;
		snd.volume = 0.10;
		cri.volume = 0.10;
	} else{
		state ="off";
		musicControls.innerHTML = "<img src='assets/img/sndoff.png' onclick=\"mute();\"</img>";
		battleMusic.volume = 0;
		victoryMusic.volume = 0;
		snd.volume = 0;
		cri.volume = 0;
	}
}

function getRndInteger(minimum, maximum) {
	return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}

function enemyAttack(){
	var dmg = getRndInteger(5, 16);
	plyrHP -= dmg;
	if (plyrHP < 0) {
		plyrHP = 0;
	}
	bottomRow.innerHTML += "<br>You take " + dmg + " damage! You have " + plyrHP + " HP left.";
	var playerHPBarWidth = (plyrHP/100)*300;
	playerHP.style.width = playerHPBarWidth + "px";
	if (plyrHP == 0){
		bottomRow.innerHTML += "<br>You got defeated.";
		bottomRow.innerHTML += "<br>Doggo!! Wake up!! Time to go school<br><button onclick='restartGame()'class='buttonStyle'>Play Again</button>";
		playerMoves.style.visibility = "hidden";
		battleMusic.pause();
		battleMusic.currentTime = 0;
	}
}

function attack(){
	var dmg = getRndInteger(3, 11);
	enmyHP -= dmg;
	if (enmyHP < 0) {
		enmyHP = 0;
	}
	bottomRow.innerHTML = "You hit them, doing " + dmg + " damage! They have " + enmyHP + " HP left.";
	var enemyHPBarWidth = (enmyHP/100)*300;
	enemyHP.style.width = enemyHPBarWidth + "px";
	
	if (enmyHP == 0){
		bottomRow.innerHTML += "<br>You defeated them!";
		bottomRow.innerHTML += "<br>Congrats! You win!<br><button onclick='restartGame()'class='buttonStyle'>Play Again</button>";
		playerMoves.style.visibility = "hidden";
		battleMusic.pause();
		battleMusic.currentTime = 0;
		victoryMusic.play();
	} else{
		enemyAttack();
	}
}

function specialAttack(){
	var dmg = getRndInteger(10, 21);
	enmyHP -= dmg;
	if (enmyHP < 0) {
		enmyHP = 0;
	}
	bottomRow.innerHTML = "You hit them, doing " + dmg + " damage! They have " + enmyHP + " HP left.";
	var enemyHPBarWidth = (enmyHP/100)*300;
	enemyHP.style.width = enemyHPBarWidth + "px";
	
	if (enmyHP == 0){
		bottomRow.innerHTML += "<br>You defeated them!";
		bottomRow.innerHTML += "<br>Congrats! You win!<br><button onclick='restartGame()'class='buttonStyle'>Play Again</button>";
		playerMoves.style.visibility = "hidden";
		battleMusic.pause();
		battleMusic.currentTime = 0;
		victoryMusic.play();
	} else{
		enemyAttack();
	}
}

function restartGame(){
	victoryMusic.pause();
	victoryMusic.currentTime = 0;

	plyrHP = 100;
	enmyHP = 100;
	var playerHPBarWidth = (plyrHP/100)*300;
	playerHP.style.width = playerHPBarWidth + "px";
	var enemyHPBarWidth = (enmyHP/100)*300;
	enemyHP.style.width = enemyHPBarWidth + "px";
	playerMoves.style.visibility = "visible";
	beginBattle();
}