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
const swiper = new Swiper(".swiper", {
	slidesPerView: "3",
	grabCursor: "true",
	loop: "true",
	spaceBetween: "10",
	centeredSlides: "false",
	pagination: "true",
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
	},
	// Optional parameters
	direction: "horizontal",
	loop: true,

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
	},
});
