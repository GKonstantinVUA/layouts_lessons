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
			spaceBetween: 23,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 31,
		},

		1083: {
			slidesPerView: 4,
			spaceBetween: 38,
		},
	},
});
