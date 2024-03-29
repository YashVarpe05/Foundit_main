/* eslint-disable no-nested-ternary */
import LostAndFoundAPI from "../../data/lost-and-found-api";
import CONFIG from "../../globals/config";
import UrlParser from "../../routes/url-parser";

const DetailItems = {
	async render() {
		return `
      <div id="detail-page">
        <header class="item-detail-header">
          <h2>ITEM DETAIL</h2>
        </header>
        <div id="detail-item">
          <div class="loading-animation">
            <div class="loader"></div>
            <div class="loading-text">Loading Item Detail</div>
          </div>
        </div>
        <div class="detail-function">
          <p></p>
        </div>
      </div>
    `;
	},

	async afterRender() {
		const url = UrlParser.parseActiveUrlWithoutCombiner();
		const item = await LostAndFoundAPI.item(url.id);

		let detailText = "";
		if (item.status === "found") {
			detailText = `Please contact the provided contact above and make sure you can prove ownership of the item.<br>
      Loss and theft are not our responsibility. If there is still no response,<br>
      please contact the authorities to follow up.`;
		} else {
			detailText =
				"Please contact the provided contact above if you have found the item.";
		}
		document.querySelector(".detail-function p").innerHTML = detailText;

		const detailContainer = document.querySelector("#detail-item");

		// Show loading animation initially
		const loadingAnimation =
			detailContainer.querySelector(".loading-animation");
		loadingAnimation.style.display = "flex";

		detailContainer.innerHTML = `
      <div class="detail-image">
        <img src="${CONFIG.BASE_IMAGE_URL}${
			item.iditem_image
		}" alt="item-detail-img">
      </div>

      <div class="detail-information">
        <div class="detail-title ${
					item.status === "lost"
						? "lost"
						: item.status === "found"
						? "found"
						: ""
				}">
          <h3>${
						item.status === "lost"
							? "Lost Item"
							: item.status === "found"
							? "Found Item"
							: item.status
					}</h3>
        </div>
        <div class="detail-body">
          <div class="information-person">
            <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/20/person-male.png" alt="person-male"/>
            <p>Published by: ${item.user_name}</p>
          </div>
          <div class="information-time">
            <img width="20" height="20" src="https://img.icons8.com/ios/50/calendar--v1.png" alt="calendar--v1"/>
            <p>Date: ${new Date(item.item_date).toLocaleDateString("en-US", {
							day: "numeric",
							month: "long",
							year: "numeric",
						})}</p>
          </div>
          <div class="information-place">
            <img width="20" height="20" src="https://img.icons8.com/ios/30/marker--v1.png" alt="marker--v1"/>
            <p>Location: ${item.item_location}</p>
          </div>
          <div class="information-email">
            <img width="20" height="20" src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/external-at-mail-dreamstale-lineal-dreamstale-2.png" alt="external-at-mail-dreamstale-lineal-dreamstale-2" alt="marker--v1"/>
            <p>Email: ${item.user_email}</p>
          </div>
          <div class="information-phone">
            <img width="20" height="20" src="https://img.icons8.com/carbon-copy/100/phone.png" alt="marker--v1"/>
            <p>Number: ${item.user_phone}</p>
          </div>
          <p>Detail Information:</p>
          <p>${item.item_description}</p>
          <div class="logo-filler">
            <img src="icon.png">
          </div>
        </div>
      </div>
    `;
		// Hide loading animation once the item detail is loaded
		const detailImage = detailContainer.querySelector(".detail-image img");
		detailImage.onload = () => {
			loadingAnimation.style.display = "none";
		};
	},
};

export default DetailItems;
