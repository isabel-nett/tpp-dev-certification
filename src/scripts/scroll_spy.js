const makeNavLinksSmooth = () => {
	const navLinks = document.querySelectorAll('.arrow');

	for (let n in navLinks) {
		navLinks[n].addEventListener('click', (e) => {
			e.preventDefault();
			document.querySelector(navLinks[n].hash).scrollIntoView();
		});
	}
};

const spyScrolling = () => {
	const sections = document.querySelectorAll('.card');

	window.onscroll = () => {
		const scrollPos =
			document.documentElement.scrollTop || document.body.scrollTop;

		for (let s in sections) {
			const id = sections[s].id;

			document.querySelector('.active').classList.remove('active');
			document
				.querySelector(`a[href*=${id}]`)
				.parentNode.classList.add('active');
		}
	};
};

makeNavLinksSmooth();
spyScrolling();
