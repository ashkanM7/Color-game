var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares =3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	 for(var i = 0; i < squares.length; i++){
	 	if(colors[i])
	 		squares[i].style.backgroundColor = colors[i];
	 	else
	 		squares[i].style.display="none";
	 	

	 }
});


hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	 for(var i = 0; i < squares.length; i++){
	 		squares[i].style.backgroundColor = colors[i];
	 		squares[i].style.display="block";
	 	

	 }
});

reset.addEventListener("click", function(){
	//create new array of random colors

	colors = generateRandomColors(numSquares);
	//put the colors in the squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
  // pick new color and update the text content of the color display
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor; 
  reset.textContent="New Color";
  messageDisplay.textContent="";
  h1.style.backgroundColor="#232323";
})


for(var i = 0; i < squares.length; i++){
	// intialize colors to each square
	squares[i].style.backgroundColor = colors[i];

	// add event listener to each square
	squares[i].addEventListener("click", function(){
		// Grab color of picked square

		var clickedColor = this.style.backgroundColor;
		// compare the color with pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "CORRECT!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			reset.textContent="Play Again?";
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "TRY AGAIN";
		}
		
	}) ;
}


function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()* colors.length);
	return colors[random];
}

// takes a number and generates x number of random colors
function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}


function randomColor(){
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	return "rgb("+r+", "+g+", "+b+")";
}