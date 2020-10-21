'use strict';

const imgs = ['Mountains.jpg', 'Hills.jpg', 'Sky.jpg', 'Lava.jpg', 'Meteorite.jpg', 'Mars.png', 'Aurora.jpg', 'Prague.jpg', 'Sun.jpg', 'Ship.jpg'];

main();

function main() {
	loadPreviews();

	var view = document.querySelector('.preview > img');
	view.setAttribute('src', 'img/' + imgs[0]);
	var info = document.querySelector('.img_info');
	info.textContent = imgs[0].split('.')[0];
}

function loadPreviews() {
	let root = document.querySelector('.gallery_images');
	for (var i = 0; i < imgs.length; i++) {
		var imgc = document.createElement('div');
		imgc.classList.add('img_container');

		var img = document.createElement('img');
		img.setAttribute('src', "img/" + imgs[i]);
		img.setAttribute('alt', imgs[i].split('.')[0]);
		img.addEventListener('click', function(e){
			openImage(e.target);
		});
		img.addEventListener('mouseover', function(e){
			swapPreview(e.target);
		});

		var iinfo = document.createElement('p');
		iinfo.textContent = img.getAttribute('alt');
		iinfo.classList.add('img_info_small');

		imgc.appendChild(img);
		imgc.appendChild(iinfo);
		root.appendChild(imgc);
	}
}

function openImage(img) {
	window.open(img.src);
}

function swapPreview(img) {
	var view = document.querySelector('.preview > img');
	view.setAttribute('src', img.getAttribute('src'));
	var info = document.querySelector('.img_info');
	info.textContent = img.getAttribute('alt');
}