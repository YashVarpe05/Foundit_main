/* eslint-disable class-methods-use-this */
import AOS from "aos";
import "aos/dist/aos.css";

import LostAndFoundAPI from "../../data/lost-and-found-api";
import { createLostItemCard } from "../template/template-creator";

class InformationSection extends HTMLElement {
	connectedCallback() {
		this.render();
		this.afterRender();
		this.initializeAOS();
		this.handleScroll();
	}

	render() {
		this.innerHTML = `
        <h2>Lost Item Information</h2>
        <button id="scrollLeft" aria-label="scroll left"><i class="bi bi-caret-left-fill"></i></button>
        <div class="containerCard" data-aos="fade-up">
        <div class="loading-container">
          <div class="loading-spinner"></div>
          <div class="loading-text">Loading item list...</div>
        </div>
        </div>
        <button id="scrollRight" aria-label="scroll right"><i class="bi bi-caret-right-fill"></i></button>
        <h3><a href="#/list-item-service">View All...</a></h3>
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

	async afterRender() {
		const items = await LostAndFoundAPI.itemList();
		let mostRecent;
		if (items.length >= 5) {
			mostRecent = items.slice(-5).reverse();
		} else {
			mostRecent = items.reverse();
		}

		const itemContainer = document.querySelector(".containerCard");
		itemContainer.innerHTML = "";
		mostRecent.forEach((item) => {
			itemContainer.innerHTML += createLostItemCard(item);
		});
	}
}

customElements.define("information-section", InformationSection);
