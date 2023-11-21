const expandMenu = document.getElementById("bx");
const headerNaVLists = document.getElementById("header-nav-lists");
// const body = document.body;

expandMenu.addEventListener("click", (e) => {
	if (headerNaVLists.style.display === "flex") {
		headerNaVLists.style.display = "none";
		expandMenu.classList.add("bx-menu");
		expandMenu.classList.remove("bx-x");
	} else {
		headerNaVLists.style.display = "flex";
		expandMenu.classList.add("bx-x");
		expandMenu.classList.remove("bx-menu");
		// body.classList.add("shadow");
	}
});
