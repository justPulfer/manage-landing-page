const expandMenu = document.getElementById("bx");
const headerNavLists = document.getElementById("header-nav-lists");
// const body = document.body;

expandMenu.addEventListener("click", (e) => {
	if (headerNavLists.style.display === "flex") {
		headerNavLists.style.display = "none";
		expandMenu.classList.add("bx-menu");
		expandMenu.classList.remove("bx-x");
	} else {
		headerNavLists.style.display = "flex";
		expandMenu.classList.add("bx-x");
		expandMenu.classList.remove("bx-menu");
		// body.classList.add("shadow");
	}
});

// Swiper js
// const swiper = new Swiper(".swiper", {
// 	slidesPerView: "2.5",
// 	grabCursor: "true",
// 	loop: true,
// 	spaceBetween: "30",
// 	centeredSlides: true,
// 	pagination: true,
// 	autoplay: {
// 		delay: 3000,
// 		disableOnInteraction: false,
// 		pauseOnMouseEnter: true,
// 	},
// 	// Optional parameters
// 	direction: "horizontal",
// 	loop: true,

// 	pagination: {
// 		el: ".swiper-pagination",
// 	},
// });

const swiper = new Swiper(".swiper", {
	grabCursor: true,
	centeredSlides: true,

	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
	},
	// // Optional parameters
	direction: "horizontal",
	loop: true,

	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
				bulletActiveClass: "swiper-pagination-bullet-active",
			},
		},
		// when window width is >= 720px
		720: {
			slidesPerView: 1.5,
			spaceBetween: 20,
			pagination: {
				el: ".swiper-pagination",
			},
		},

		// when window width is >= 1080px
		1080: {
			slidesPerView: 2.5,
			spaceBetween: 20,
		},
	},
});
