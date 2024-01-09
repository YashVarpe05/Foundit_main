/* eslint-disable class-methods-use-this */
/* eslint-disable no-use-before-define */

import img from "../../../public/images/img-missing.png";
import { createModalElement } from "../template/template-creator";

class LostForm extends HTMLElement {
	connectedCallback() {
		this.render();
		this.afterRender();
	}

	render() {
		this.innerHTML = `
      ${createModalElement()}
      <h2 class="form-title">Lost Item Form</h2>
      <div class="card form-container">
        <div class="left-form">
          <img src="${img}" alt="...">
          <div class="left-description">
            <h4>Enter Lost Item Data and Information</h4>
            <p>Ensure that the lost item data and information are accurate and personal data is clear and correct.</p>
            <br>
            <hr class="line-description">
            <h4>Found an Item?</h4>
            <p>In addition to reporting a lost item, you can also become a helper by reporting a found item <a href="#/found-item-service">here!</a></p>
          </div>
        </div>
        <div class="right-form">
          <form id="lost-form">
            <div class="mb-3">
              <label for="user-name">Full Name</label>
              <input type="text" class="form-control" id="user-name" placeholder="Enter full name">
            </div>

          <div class="mb-3">
            <label for="user-email">Email</label>
            <input type="email" class="form-control" id="user-email" placeholder="Enter email">
          </div>

          <div class="mb-3">
            <label for="user-phone">Phone Number</label>
            <input type="tel" class="form-control" id="user-phone" placeholder="Enter phone number">
          </div>

          <div class="mb-3">
            <label for="item-name">Item Name</label>
            <input type="text" class="form-control" id="item-name" placeholder="Enter item name">
          </div>

          <div class="mb-3">
            <label for="item-description">Item Description</label>
            <textarea class="form-control" id="item-description" rows="3" placeholder="max 150 characters.." maxlength="150"></textarea>
          </div>

          <div class="mb-3">
            <label for="loss-date">Loss Date</label>
            <input type="date" class="form-control" id="loss-date">
          </div>

          <div class="mb-3">
            <label for="loss-location">Loss Location</label>
            <input type="text" class="form-control" id="loss-location" placeholder="Enter loss location">
          </div>

          <div class="mb-3">
            <label class="form-label" for="upload">Upload Photo</label>
            <input id="upload" type="file" class="form-control border-0" accept=".jpg">
            <small class="form-text">Only JPG images are allowed.</small>
          </div>

          <div class="image-area mb-3">
            <img id="imageResult" src="#" alt="" class="img-fluid rounded shadow-sm mx-auto d-block">
          </div>

          <div class="submit-btn">
            <div class="form-check mb-3">
              <input class="form-check-input" type="checkbox" id="agreement">
              <label class="form-check-label" for="agreement">I agree to the <a class="terms" data-bs-toggle="modal" data-bs-target="#exampleModal">terms and conditions</a>.</label>
            </div>
            <button type="submit" class="btn btn-submit" id="submit-btn">Submit</button>
          </div>
        </form>
        </div>
      </div>
    `;
	}

	afterRender() {
		const uploadElement = document.getElementById("upload");
		const agreementCheckbox = document.getElementById("agreement");
		const formElement = document.getElementById("lost-form");
		const submitButton = document.getElementById("submit-btn");
		submitButton.disabled = true;

		uploadElement.addEventListener("change", () => {
			if (uploadElement.files && uploadElement.files[0]) {
				const reader = new FileReader();
				reader.onload = (e) => {
					const imageResult = document.getElementById("imageResult");
					imageResult.src = e.target.result;
					if (validateForm()) {
						submitButton.disabled = false;
					}
				};
				reader.readAsDataURL(uploadElement.files[0]);
			} else {
				submitButton.disabled = true;
			}
		});

		formElement.addEventListener("input", () => {
			if (validateForm()) {
				submitButton.disabled = false;
			} else {
				submitButton.disabled = true;
			}
		});

		function validateForm() {
			const userName = document.getElementById("user-name").value;
			const userEmail = document.getElementById("user-email").value;
			const userPhone = document.getElementById("user-phone").value;
			const itemName = document.getElementById("item-name").value;
			const itemDescription = document.getElementById("item-description").value;
			const lossDate = document.getElementById("loss-date").value;
			const lossLocation = document.getElementById("loss-location").value;
			const uploadFile = document.getElementById("upload").value;
			const agreementChecked = agreementCheckbox.checked;

			// validation logic
			if (
				userName.trim() === "" ||
				userEmail.trim() === "" ||
				userPhone.trim() === "" ||
				itemName.trim() === "" ||
				itemDescription.trim() === "" ||
				lossDate.trim() === "" ||
				lossLocation.trim() === "" ||
				uploadFile === "" ||
				!agreementChecked
			) {
				return false;
			}

			return true;
		}
	}
}

customElements.define("lost-form", LostForm);
