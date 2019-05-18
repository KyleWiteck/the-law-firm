'use strict';

const hamburgerIcon = document.querySelector('#hamburger-icon');
const closeIcon = document.querySelector('#close-icon');
const mobileMenuWrapper = document.querySelector('.mobile-menu-wrapper');
const mobileMenu = document.querySelector('.mobile-menu');

hamburgerIcon.addEventListener('click', function() {
	mobileMenu.style.animation = 'slideIn 1s ease-out';
	mobileMenuWrapper.style.animation = 'backgroundBlack 1s ease-in';
	mobileMenuWrapper.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
	mobileMenuWrapper.style.display = 'block';
});

closeIcon.addEventListener('click', function() {
	mobileMenuWrapper.style.animation = 'backgroundNone 1s ease-out';
	mobileMenu.style.animation = 'slideOut 1s ease-out';
	setTimeout(() => {
		mobileMenuWrapper.style.display = 'none';
	}, 1000);
});
