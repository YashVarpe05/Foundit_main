/* eslint-disable no-empty-function */
import "../components/_found-form";

import bgImg from "../../../public/images/img-finder.png";
import onSubmitFoundForm from "../../utils/found-form-handler";

const FoundItemService = {
	async render() {
		return `
    <div class="hero">
      <div class="hero-text">
        <h3>Hello!</h3>
        <h1>Found an Item?</h1>
        <p>Report your finding here, so the owner can retrieve their item!</p>
      </div>
      <div class="bg-image">
        <img src="${bgImg}" alt="Hero Image">
      </div>
    </div>
    <div id="information-section">
        <p>Please make sure to read and understand our <b>Terms and Conditions</b> to avoid improper use or violation of procedures on our website. Once you understand these terms and conditions, please utilize our website features to the fullest. We sincerely hope that lost items are found and returned to their owners promptly. Thank you for your cooperation!</p>
    </div>
    <div id="form-section">
      <found-form></found-form>
    </div>
    `;
	},

	async afterRender() {
		const submitButton = document.querySelector(".submit-btn button");
		submitButton.addEventListener("click", onSubmitFoundForm);
	},
};
export default FoundItemService;
