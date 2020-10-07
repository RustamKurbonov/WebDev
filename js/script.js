window.onload = function (){
	menuBurger();
	slider();
}
function menuBurger(){
	let headerBurger = document.getElementById('burger');
	headerBurger.onclick = classActive;
}
function classActive(e){
	let headerBurger = document.getElementById('burger');
	let headerMenu = document.getElementById('menu');
	let body = document.getElementById('body')
	headerBurger.classList.toggle('active');
	headerMenu.classList.toggle('active');
	body.classList.toggle('lock');
}
function slider(){
	let sliders = document.getElementsByClassName('slider__body-slid');
	let btnLeft = document.getElementById('left');
	let btnRight = document.getElementById('right');
	let slidersLeng = document.getElementById('leng');
	let slidersNom = document.getElementById('nom');
	let slidRightBtn = document.getElementById('right-btn');
	let slidLeftBtn = document.getElementById('left-btn');
	let ind = 0;
	let media = window.matchMedia('(min-width: 479.98px)');

	media.addListener(nmd);

	function nmd(e){
		if(media.matches){
			sliders[ind].style.display = 'flex';
		} else {
			sliders[ind].style.display = 'block';
		}
		return e.matches;
	}

	for (let i = 1; i < sliders.length; i++){
		sliders[i].style.display = 'none';
	}

	slidersLeng.innerHTML = sliders.length;
	slidersNom.innerHTML = 1;

	slidLeftBtn.onclick = hideLeft;
	slidRightBtn.onclick = hideRight;
	slidersNom.onclick = hideLeft;
	slidersLeng.onclick = hideRight;
	btnLeft.onclick = hideLeft;
	btnRight.onclick = hideRight;
	btnLeft.style.opacity = '0.3';
	slidLeftBtn.style.display = 'none';

	function hideRight(){
		if(ind === sliders.length - 1){
			slidRightBtn.style.display = 'none';
			btnRight.style.opacity = '0.3';
			btnLeft.style.opacity = '1';
			if(media.matches){
				sliders[ind].style.display = 'flex';
			} else {
				sliders[ind].style.display = 'block';
			}
		} else {
			btnLeft.style.opacity = '1';
			slidLeftBtn.style.display = 'block';
			sliders[ind].style.display = 'none';
			ind++;
			slidersNom.innerHTML++;
			if(media.matches){
				sliders[ind].style.display = 'flex';
			} else {
				sliders[ind].style.display = 'block';
			}
			if(ind === sliders.length - 1){
				btnRight.style.opacity = '0.3';
				slidRightBtn.style.display = 'none'; 
			}
		}
	};

	function hideLeft(){
		if(ind === 0){
			slidLeftBtn.style.display = 'none';
			btnLeft.style.opacity = '0.3';
			btnRight.style.opacity = '1';
			slidRightBtn.style.display = 'block';
			if(media.matches){
				sliders[ind].style.display = 'flex';
			} else {
				sliders[ind].style.display = 'block';
			}
		} else{
			btnRight.style.opacity = '1';
			slidRightBtn.style.display = 'block';
			sliders[ind].style.display = 'none';
			ind--;
			slidersNom.innerHTML--;
			if(media.matches){
				sliders[ind].style.display = 'flex';
			} else {
				sliders[ind].style.display = 'block';
			}
			if(ind === 0){
				btnLeft.style.opacity = '0.3';
				slidLeftBtn.style.display = 'none';
			}
		}
	};
}
