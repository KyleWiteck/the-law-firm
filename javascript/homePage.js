const practicesH2 = document.querySelector('#practices');
const attorneyContentUl = document.querySelector('#attorney-content ul');

// Adds fade in animation for larger screen sizes for specific elements
const fadeIn = () => {
	if (window.matchMedia('(min-width: 600px)').matches) {
		window.addEventListener('scroll', e => {
			console.log(window.scrollY);
			if (
				window.scrollY >=
				attorneyContentUl.getBoundingClientRect().top + 400
			) {
				console.log('working');
				attorneyContentUl.style.animation = 'fadeIn 2s ease-in';
				attorneyContentUl.style.opacity = '1';
			}
		});
	}

	if (window.matchMedia('(min-width: 600px)').matches) {
		window.addEventListener('scroll', e => {
			console.log(window.scrollY);
			if (window.scrollY >= practicesH2.getBoundingClientRect().top - 400) {
				console.log('working');
				practicesH2.style.animation = 'fadeIn 2s ease-in';
				practicesH2.style.opacity = '1';
			}
		});
	}
};

fadeIn();
