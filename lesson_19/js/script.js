let swiper = new Swiper(".myswiper", {
	slidesPerView: 1,
	spaceBetween: 1,
	pagination: {},
	navigation: {
		nextEl: ".navi__arrow-right",
		prevEl: ".navi__arrow-left",
	},
	breakpoints: {
		640: {
			slidesPerView: 2,
			spaceBetween: 34,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 34,
		},
		1249: {
			slidesPerView: 3,
			spaceBetween: 34,
		},

		1250: {
			slidesPerView: 4,
			spaceBetween: 34,
		},
	},
});
