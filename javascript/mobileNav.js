'use strict';

const hamburgerIcon = document.querySelector('#hamburger-icon');
const closeIcon = document.querySelector('#close-icon');
const mobileMenuWrapper = document.querySelector('.mobile-menu-wrapper');
const mobileMenu = document.querySelector('.mobile-menu');
const mq = window.matchMedia('(min-width: 801)');

hamburgerIcon.addEventListener('click', () => {
	mobileMenu.style.animation = 'slideIn 1s ease-out';
	mobileMenuWrapper.style.animation = 'backgroundBlack 1s ease-in';
	mobileMenuWrapper.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
	mobileMenuWrapper.style.animation = 'backgroundNone 1s ease-out';
	mobileMenu.style.animation = 'slideOut 1s ease-out';
	setTimeout(() => {
		mobileMenuWrapper.style.display = 'none';
		mobileMenuWrapper.removeAttribute('style');
		mobileMenu.removeAttribute('style');
	}, 800);
});
