
var select = document.querySelector('.select')


function getImages() {
    var myRequest = new XMLHttpRequest();
    	
	myRequest.open("GET", "https://dog.ceo/api/breed/" + term() + "/images/random");

	myRequest.onload = function() {
		var images = JSON.parse(myRequest.responseText).message;
		createImage(images)
	}
	myRequest.send();
}

function term() {
	var setBreed = document.querySelector(".select").value

	return setBreed;
}

function createImage(imgUrl) {
	var imageEl = document.querySelector('.image');
	imageEl.setAttribute("src", imgUrl);
}

getImages();
setInterval(getImages, 2000);