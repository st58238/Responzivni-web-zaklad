'use strict';

main();

function main() {
	stopForm();
}

function stopForm() {
	var view = document.querySelector('.form');
	view.addEventListener('submit', function(e){
		e.preventDefault();
	});
}