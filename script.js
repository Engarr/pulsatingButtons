const btns = document.querySelectorAll('.btn');

const btnAnimation = (e) => {
	const top = e.clientY;
	const left = e.clientX;

	const btnTopPosition = e.target.offsetTop;
	const btnLeftPosition = e.target.offsetLeft;

	const circleTop = top - btnTopPosition;
	const circleleft = left - btnLeftPosition;

	const circle = document.createElement('span');
	circle.classList.add('circle');
	circle.style.top = circleTop + `px`;
	circle.style.left = circleleft + `px`;
	e.target.appendChild(circle);
	setTimeout(() => {
		circle.remove();
	}, 400);
};

btns.forEach((btn) => btn.addEventListener('click', btnAnimation));
