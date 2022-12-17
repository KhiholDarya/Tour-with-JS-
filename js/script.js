let chooseBtn = document.getElementById('choose'),
	receiveBtn = document.getElementById('receive'),
	heading = document.getElementsByTagName('h2')[0],
	nameInput = document.getElementsByClassName('contactform_name')[0],
	text = document.getElementsByName('message')[0],
	modal = document.querySelector('.modal'),
	closeBtn = document.querySelector('.close');

chooseBtn.addEventListener('mouseenter', function (){
	heading.textContent = "Действительно все!";
});

chooseBtn.addEventListener('mouseleave', function (){
	heading.textContent = "Все включено";
});

receiveBtn.addEventListener('click', function(){
	modal.style.display = 'block';
});

closeBtn.addEventListener('click', function(){
	modal.style.display = 'none';
});

nameInput.addEventListener('input', function(){
	text.value = `Меня зовут ${nameInput.value}! Я хочу спросить: `;
});