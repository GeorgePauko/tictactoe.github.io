var player = 1;
var playground = document.querySelector("#playground");
var round = 0;

document.querySelector("#x").addEventListener("click", hidePopUp);

playground.s1.addEventListener("click", turn);
playground.s2.addEventListener("click", turn);
playground.s3.addEventListener("click", turn);
playground.s4.addEventListener("click", turn);
playground.s5.addEventListener("click", turn);
playground.s6.addEventListener("click", turn);
playground.s7.addEventListener("click", turn);
playground.s8.addEventListener("click", turn);
playground.s9.addEventListener("click", turn);

function turn() {
	if(player == 1 && this.value == "") {
		this.value = "X";
		this.style.color = "blue";
		player = 2;
		
		round++;
		if(round >= 5) {
			checkWin();
		}// if check
	}// X
	else if(player == 2 && this.value == "") {
		this.value = "O";
		this.style.color = "red";
		player = 1;
		
		round++;
		if(round >= 5) {
			checkWin();
		}// if check
	}// O
	console.log("This is " + round + " round.");
}// turn

function checkWin() {
	if(playground.s1.value == playground.s2.value && playground.s2.value == playground.s3.value && playground.s1.value != "") {
		win(playground.s1.value);
	}// 1st horizontal
	else if(playground.s4.value == playground.s5.value && playground.s5.value == playground.s6.value && playground.s4.value != "") {
		win(playground.s4.value);
	}// 2nd horizontal
	else if(playground.s7.value == playground.s8.value && playground.s8.value == playground.s9.value && playground.s7.value != "") {
		win(playground.s7.value);
	}// 3rd horizontal
	else if(playground.s1.value == playground.s4.value && playground.s4.value == playground.s7.value && playground.s1.value != "") {
		win(playground.s1.value);
	}// 1st vertical
	else if(playground.s2.value == playground.s5.value && playground.s5.value == playground.s8.value && playground.s2.value != "") {
		win(playground.s2.value);
	}// 2nd vertical
	else if(playground.s3.value == playground.s6.value && playground.s6.value == playground.s9.value && playground.s6.value != "") {
		win(playground.s3.value);
	}// 3rd vertical
	else if(playground.s1.value == playground.s5.value && playground.s5.value == playground.s9.value && playground.s1.value != "") {
		win(playground.s1.value);
	}// / - diagonal
	else if(playground.s7.value == playground.s5.value && playground.s5.value == playground.s3.value && playground.s7.value != "") {
		win(playground.s7.value);
	}// \ - diagonal
	else if(round == 9) {
		draw();
	}// draw
}// checkWin

function win(winner) {
	player = 3;
	document.body.style.backgroundImage = "url('images/tictactoe.webp')";
	document.querySelector("#head").style.borderRadius = "15px";
	document.querySelector("#head").style.backgroundColor = "#8ddad8";
	document.querySelector("#popup").innerHTML = '<img src="images/x.png" alt="x" id="x"><h2>Player "' + winner + '" wins!</h2>';
	document.querySelector("#x").addEventListener("click", hidePopUp);
	document.querySelector("#container").style.display = "flex";
}// win

function draw() {
	document.body.style.backgroundImage = "url('images/tictac.jpg')";
	document.querySelector("#container").style.display = "flex";
	document.querySelector("#head").style.borderRadius = "15px";
	document.querySelector("#head").style.backgroundColor = "#8ddad8";
}// draw

function hidePopUp() {
	document.querySelector("#container").style.display = "none";
}// hide popup