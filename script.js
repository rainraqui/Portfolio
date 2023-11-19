//Loading Animation
document.addEventListener("DOMContentLoaded", function () {
	// Initial state: Loading
	let isLoading = true;

	// Simulate a 3-second loading time (adjust as needed)
	setTimeout(function () {
		isLoading = false;
		toggleLoadingBody();
	}, 3000);

	// Function to toggle visibility of loading and main bodies
	function toggleLoadingBody() {
		const loadingBody = document.querySelector(".loading");
		const mainBody = document.querySelector(".main");

		if (isLoading) {
			loadingBody.style.display = "block";
			mainBody.style.display = "none";
		} else {
			loadingBody.style.display = "none";
			mainBody.style.display = "block";
		}
	}
});

function toggleMenu() {
	console.log("toggleMenu() called");
	const menu = document.querySelector(".menu-links");
	const icon = document.querySelector(".hamburger-icon");
	menu.classList.toggle("open");
	icon.classList.toggle("open");
}

function scrollToTop() {
	console.log("scrollToTop() called");
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});

	history.replaceState({}, document.title, window.location.pathname);
}

function scrollToSection(sectionId) {
	const section = document.querySelector(sectionId);
	if (section) section.scrollIntoView({ behavior: "smooth" });
	history.pushState({}, "", sectionId);
	toggleMenu();
}

window.onscroll = function () {
	fixedHeader();
};
var header = document.getElementById("desktop-nav");
var mobileHeader = document.getElementById("hamburger-nav");
var sticky = header.offsetTop;
var mobileSticky = mobileHeader.offsetTop;
function fixedHeader() {
	if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}

	if (window.pageYOffset > mobileSticky) {
		mobileHeader.classList.add("sticky");
	} else {
		mobileHeader.classList.remove("sticky");
	}
}

function downloadCV() {
	const link = document.createElement("a");
	link.href = "./assets/RAINIER HANNAH A. RAQUIPISO_CV.pdf";
	link.download = "RAQUIPISO_RHA_CV";
	link.click();
}

function openLinkedInProfile() {
	window.open("https://www.linkedin.com/in/rainraqui", "_blank");
}

function openGithubProfile() {
	window.open("https://www.github.com/rainraqui", "_blank");
}

document.addEventListener("DOMContentLoaded", function () {
	const projectCarousels = document.querySelectorAll(".carousel-container");

	projectCarousels.forEach((carousel) => {
		new Glide(carousel, {
			type: "carousel",
			perView: 3, // Adjust the number of images shown at once
			focusAt: "center",
			gap: 20, // Adjust the gap between images
			autoplay: 3000, // Adjust the autoplay speed in milliseconds
			hoverpause: true,
			breakpoints: {
				600: {
					perView: 1,
				},
				768: {
					perView: 2,
				},
			},
		}).mount();
	});
});
