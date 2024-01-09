/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import Swal from "sweetalert2";
import "./_kebijakan-privasi";

class TermsOfUse extends HTMLElement {
	connectedCallback() {
		this.render();
		const privacyLink = this.querySelector(".privacy-link");
		privacyLink.addEventListener("click", () => this.showPrivacyPolicy());

		const cancelButton = document.querySelector("#cancel");
		cancelButton.addEventListener(
			"click",
			this.handleCancelButtonClick.bind(this)
		);

		const acceptButton = document.querySelector("#accept");
		acceptButton.addEventListener(
			"click",
			this.handleAcceptButtonClick.bind(this)
		);

		// const termsContainer = this.querySelector('#terms-of-use');
		// termsContainer.addEventListener('scroll', this.handleTermsScroll.bind(this));
	}

	render() {
		this.innerHTML = `
    <div class="tou-update">
        <h3>Last Updated: May 30, 2023</h3>
    </div>
    <ol>
        <li class="tou-list">
            <h3 class="tou-title">Terms of Use</h3>
            <ul>
            <li> <p>By accessing and using the Lost and Found Finder Website, you are deemed to have read, understood, 
                and accepted all the terms and conditions described below. If you do not agree to these terms 
                and conditions, you are not allowed to use this website.</p></li>
            </ul>
        </li>
        <li class="tou-list">
            <h3 class="tou-title">Website Usage</h3>
            <ul>
                <li>The Lost and Found Finder Website is a platform that provides services to assist people in 
                    finding and locating lost items. The use of this website must comply with applicable laws.</li>
                    <br>
                <li>You are fully responsible for the information you provide when using this website. 
                    The information you provide must be accurate, honest, and not misleading.</li>
                    <br>
                <li>You are not allowed to use this website for illegal purposes, violate the privacy of others,
                    send spam, or disrupt the system or services of this website.</li>
                    <br>
                <li>The Lost and Found Finder Website reserves the right to suspend or terminate your access to the website 
                    if you violate these terms and conditions.</li>
            </ul>  
        </li>
        <li class="tou-list"> 
            <h3 class="tou-title">Privacy</h3>
            <ul>
                <li>The Lost and Found Finder Website respects user privacy.
                    Our privacy policy explains how we collect, use, and protect users' personal information.
                    By using this website, you agree to our privacy policy, which can be accessed at <a href="javascript:void(0)" class="privacy-link">privacy policy</a>.</li>
                    <br>
                <li>You are responsible for the personal information you provide and must ensure that the information is accurate and appropriate.</li>
            </ul>
        </li>
        <li class="tou-list">
            <h3 class="tou-title">User Content</h3>
            <ul>
                <li>You can submit content, such as descriptions of lost or found items, images, and other information.
                    You are fully responsible for the content you submit and warrant that you have sufficient rights to submit such content.</li>
                    <br>
                <li>The Lost and Found Finder Website reserves the right to remove content that is deemed to violate these terms and conditions, infringe on the intellectual property rights of others,
                    or is not in line with the purpose of this website.</li>
            </ul>
        </li>
        <li class="tou-list"> 
            <h3 class="tou-title">Responsibility</h3>
            <ul>
                <li>The Lost and Found Finder Website is not responsible for any loss or damage that may arise from the use of this website or reliance on the information provided therein.</li>
                <br>
                <li>You use this website at your own risk. The Lost and Found Finder Website does not provide guarantees regarding the accuracy, reliability, or availability of information on this website.</li>
                <br>
                <li>The Lost and Found Finder Website is not responsible for the actions or omissions of users of this website.</li>
            </ul>
        </li>
        <li class="tou-list">
            <h3 class="tou-title">Changes to Terms and Conditions</h3>
            <ul>
            <li><p>The Lost and Found Finder Website reserves the right to change these terms and conditions as deemed necessary. Changes will be announced on this website. Users are expected to periodically check the applicable terms and conditions.<br>
               </p></li>
            </ul>
        </li>
    </ol>
      `;
	}

	showPrivacyPolicy() {
		const modalBody = document.querySelector(".modal-body");
		modalBody.innerHTML = "<privacy-policy></privacy-policy>";
	}

	handleAcceptButtonClick() {
		const acceptButton = document.querySelector("#accept");
		if (!acceptButton.disabled) {
			Swal.fire({
				title: "Terms Accepted",
				text: "Use our website wisely in accordance with the agreement",
				icon: "success",
				confirmButtonText: "OK",
			}).then((result) => {
				if (result.isConfirmed) {
					const element = document.getElementById("close-modal-button");
					const event = new Event("click");
					element.dispatchEvent(event);
					const checkbox = document.getElementById("agreement");
					checkbox.checked = true;
				}
			});
		}
	}

	handleCancelButtonClick() {
		const cancelButton = document.querySelector("#cancel");
		cancelButton.addEventListener("click", () => {
			const element = document.getElementById("close-modal-button");
			const event = new Event("click");
			element.dispatchEvent(event);
			window.location.href = "#/404";
		});
	}
}
// handleTermsScroll() {
//   const termsContainer = this.querySelector('#terms-of-use');
//   const acceptButton = this.querySelector('#accept');

//   if (termsContainer.scrollTop + termsContainer.clientHeight === termsContainer.scrollHeight) {
//     // User has scrolled to the bottom of the terms and conditions
//     acceptButton.disabled = false;
//   } else {
//     // User has not scrolled to the bottom of the terms and conditions
//     acceptButton.disabled = true;
//   }
// }

// Define the custom element
customElements.define("terms-of-use", TermsOfUse);
