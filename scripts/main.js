var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/Python.svg.png') {
	myImage.setAttribute ('src','images/Python2.svg.png');
	} else {
	myImage.setAttribute ('src','images/Python.svg.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Пожалуйста, введите имя.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Добро пожаловать, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Добро пожаловать, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}