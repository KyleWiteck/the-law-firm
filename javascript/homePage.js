const practicesH2 = document.querySelector('#practices');
const attorneyContentUl = document.querySelector('#attorney-content ul');
const backToTopLg = document.querySelector('#back-to-top');

// Adds fade in animation for larger screen sizes for specific elements
const fadeIn = () => {
	if (window.matchMedia('(min-width: 600px)').matches) {
		window.addEventListener('scroll', e => {
			if (
				window.scrollY >=
				attorneyContentUl.getBoundingClientRect().top + 400
			) {
				attorneyContentUl.style.animation = 'fadeIn 1.5s ease-in';
				attorneyContentUl.style.opacity = '1';
			}
		});
	}

	if (window.matchMedia('(min-width: 600px)').matches) {
		window.addEventListener('scroll', e => {
			if (window.scrollY >= practicesH2.getBoundingClientRect().top - 100) {
				practicesH2.style.animation = 'fadeIn 1.5s ease-in';
				practicesH2.style.opacity = '1';
			}
		});
	}
};

fadeIn();

// This handles the back to top button at the bottom of the page

const scrollToTop = () => {
	backToTopLg.addEventListener('click', () => {
		window.scrollTo(0, 0);
	});
};
scrollToTop();
