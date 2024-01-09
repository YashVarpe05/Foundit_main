/* eslint-disable class-methods-use-this */
import AOS from "aos";
import lostWallet from "../../../public/images/hero/bnr.png";
import "aos/dist/aos.css";

class SiteDescriptionElement extends HTMLElement {
	connectedCallback() {
		this.render();
		this.initializeAOS();
		this.handleScroll();
	}

	render() {
		this.innerHTML = `
      <div>
        <div class='desc-container' data-aos='fade-up'>
          <img src='${lostWallet}' alt="lost wallet">
          <div class="description">
            <h2>Lost & Found</h2>
            <p>Lost and Found Finder is an innovative website dedicated to helping you find lost items and report items that have been lost. With an intuitive and user-friendly interface, we provide an efficient platform to search for and track items that you may have lost.</p>
          </div>
        </div>
      </div>
    `;
	}

	initializeAOS() {
		AOS.init({
			offset: 200,
			duration: 500,
			easing: "ease-in-sine",
			delay: 100,
			once: false,
			mirror: true,
		});
	}

	handleScroll() {
		let lastScrollTop =
			window.pageYOffset || document.documentElement.scrollTop;
		window.addEventListener("scroll", () => {
			const scrollTop =
				window.pageYOffset || document.documentElement.scrollTop;
			const isScrollingDown = scrollTop > lastScrollTop;

			if (isScrollingDown) {
				AOS.refresh();
			}

			lastScrollTop = scrollTop;
		});
	}
}

customElements.define("site-description-element", SiteDescriptionElement);
