import "../components/_site-description-element";
import "../components/_function-section";
import "../components/_information-section";
import "../components/_services-element";
import "../components/_nav-bar";
import "../components/_footer-element";
import "../components/_terms-of-use";
import "../components/_lost-form";

const Home = {
	async render() {
		return `
        <hero-element></hero-element>
        <site-description-element></site-description-element>
        <service-element></service-element>
        <div id="report">
          <function-section></function-section>
        </div>
        <information-section></information-section>
      `;
	},

	async afterRender() {
		const leftScroll = document.querySelector("#scrollLeft");
		const rightScroll = document.querySelector("#scrollRight");
		leftScroll.addEventListener("click", () => {
			const containerCard = document.querySelector(".containerCard");
			containerCard.scrollBy(-380, 0);
		});

		rightScroll.addEventListener("click", () => {
			const containerCard = document.querySelector(".containerCard");
			containerCard.scrollBy(380, 0);
		});
	},
};

export default Home;
