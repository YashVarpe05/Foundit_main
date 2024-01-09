import AOS from "aos";
import "aos/dist/aos.css";

import srcImg1 from "../../../public/images/img-missing-1.jpg";
import srcImg2 from "../../../public/images/img-finder-2.jpg";
import srcImg3 from "../../../public/images/missing-item-2.jpg";

class ServiceElement extends HTMLElement {
	connectedCallback() {
		this.render();
		this.initializeAOS();
		this.handleScroll();
	}

	render() {
		this.innerHTML = `
      <div id="services" class="services" data-aos='fade-up'>
        <h1> Who Are You? </h1>
        <div class="services-list">
          <div class="service-item1">
              <img src="${srcImg1}" alt="man and woman with a big question mark in the middle">
              <a href="#/finder-profile" class="role-title">Finder</a>
              <p class="role-desc">Finding items belonging to others?</p>
          </div>

          <div class="service-item2">
            <img src="${srcImg2}" alt="a man pointing at a search button">
            <a href="#/finder-profile" class="role-title">Helper</a>
            <p class="role-desc">Want to help people search for or find lost items?</p>
          </div>

          <div class="service-item3">
            <img src="${srcImg3}" alt="a man shrugging">
            <a href="#/finder-profile" class="role-title">Seeker</a>
            <p class="role-desc">Feeling like you've lost something?</p>
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

customElements.define("service-element", ServiceElement);
