/* eslint-disable import/no-duplicates */
import sponsor1 from "../../../public/images/sponsor/logo-unram.png";
import sponsor2 from "../../../public/images/sponsor/logo-unesa.png";
import sponsor3 from "../../../public/images/sponsor/univ-bsi.jpg";
import sponsor4 from "../../../public/images/sponsor/logo-umi.png";

class SponsorSection extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
    <div class="sponsor">
      <div class="sponsor-title">
        <h2>Sponsored By</h2>
        <hr class="line-sponsor"/>
      </div>
      <div class="sponsor-container">
      <marquee>
        <div class="university">
          <img src="${sponsor1}" alt="Universitas Mataram logo">
          <img src="${sponsor2}" alt="University logo">
          <img src="${sponsor3}" alt="University logo">
          <img src="${sponsor4}" alt="University logo">
        </div>
      </marquee>
      </div>     
    </div>
    `;
	}
}

// Define the custom element
customElements.define("sponsor-section", SponsorSection);
