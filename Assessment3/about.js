console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted successfully!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let catPicture = document.querySelector('img');

function giveCompliment() {
	alert("You have great taste in websites!");
}

catPicture.addEventListener('mouseover', giveCompliment);