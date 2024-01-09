/* eslint-disable no-empty-function */
import "../components/_lost-form";

import bgImg from "../../../public/images/img-missing-2.png";
import onSubmitLostForm from "../../utils/lost-form-handler";

const LostItemService = {
	async render() {
		return `
    <div class="hero">
      <div class="hero-text">
        <h3>Hello!</h3>
        <h1>Lost an Item?</h1>
        <p>Create a report so that others or finders can help locate your lost item!</p>
      </div>
      <div class="bg-image">
        <img src="${bgImg}" alt="Hero Image">
      </div>
    </div>
    <div id="information-section">
      <p>Please make sure to read and understand our <b>Terms and Conditions</b> to avoid improper use or violation of procedures.
      Once you understand these terms and conditions, please make the best use of our website features. We sincerely hope that lost items are quickly found and returned to their owners.
      Thank you for your cooperation!</p>
    </div>
    <div id="form-section">
      <lost-form></lost-form>
    </div>
    `;
	},

	async afterRender() {
		const submitButton = document.querySelector(".submit-btn button");
		submitButton.addEventListener("click", onSubmitLostForm);
	},
};
export default LostItemService;
