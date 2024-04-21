const swiper = new Swiper('.swiper-container', {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 20,
	pagination: {
		el: '.pagination',
		bulletClass: 'pagination__bullet',
		bulletActiveClass: 'pagination__bullet--active'
	},
	navigation: {
		nextEl: '.carousel-button.next',
		prevEl: '.carousel-button.prev',
	},
	breakpoints: {
		600: {
			slidesPerView: 2,
		},
		1280: {
			slidesPerView: 3,
		}
	},


});