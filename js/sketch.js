var haiku;

function preload() {
	var url = "https://raw.githubusercontent.com/myrefoli/haikus/master/haiku.json";
	haiku = loadJSON(url);
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(1);
}

function draw() {
  background
	var oneLine = haiku.firstLine;
	var chosenFirstLine = oneLine[Math.floor(Math.random() * oneLine.length)];
  
	var twoLine = haiku.secondLine;
	var chosenSecondLine = twoLine[Math.floor(Math.random() * twoLine.length)];
	
	var threeLine = haiku.thirdLine;
	var chosenThirdLine = threeLine[Math.floor(Math.random() * threeLine.length)];
  
  	var reconstructed = chosenFirstLine + "\n" + chosenSecondLine + "\n" + chosenThirdLine;
  	var hor = random(-10, windowWidth);
  	var ver = random(-10, windowHeight);

  	textSize(random(30,90));
  	fill(255, 255, 255, random(50,100));
  	text(reconstructed, hor, ver);
}

function windowResized() {
  	resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
	setup();
}