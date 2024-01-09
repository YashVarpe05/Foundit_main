class PrivacyPolicy extends HTMLElement {
	connectedCallback() {
		this.render();
		const backButton = this.querySelector("#back-button");
		backButton.addEventListener("click", () => this.showTermsOfUse());
	}

	render() {
		this.innerHTML = `
            
            <h1>Privacy Policy</h1>
            <ol>

                <h2>1. Types of Collected Information:</h2>
                <p>The types of personal information collected include:</p>
                <ul>
                    <li>Name</li>
                    <li>Address</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Demographic information</li>
                    <li>Other information relevant to the provided services</li>
                </ul>

                <h2>2. Methods of Information Collection:</h2>
                <p>Personal information is collected through:</p>
                <ul>
                    <li>Registration forms</li>
                    <li>User interactions with the website</li>
                    <li>Use of tracking technologies such as cookies</li>
                    <li>Other sources</li>
                </ul>
        
                <h2>3. Use of Information:</h2>
                <p>Purposes of collecting personal information include:</p>
                <ul>
                    <li>Providing services</li>
                    <li>Enhancing user experience</li>
                    <li>Managing user accounts</li>
                    <li>Sending information and communications related to services</li>
                </ul>
        
                <h2>4. Information Security:</h2>
                <p>Measures taken to protect user's personal information include:</p>
                <ul>
                    <li>Security policies</li>
                    <li>Use of encryption</li>
                    <li>Other security measures</li>
                </ul>
        
                <h2>5. Disclosure of Information to Third Parties:</h2>
                <p>User's personal information will be disclosed to third parties under the following circumstances:</p>
                <ul>
                    <li>Required to fulfill legal obligations</li>
                    <li>Collaboration with business partners</li>
                    <li>With user consent</li>
                </ul>
        
                <h2>6. User Choices:</h2>
                <p>Users have the right to:</p>
                <ul>
                    <li>Access their personal information</li>
                    <li>Modify their personal information</li>
                    <li>Delete their personal information</li>
                    <li>Manage privacy preferences</li>
                </ul>
            
                <h2>7. Cookies Policy:</h2>
                <p>The website uses cookies and other tracking technologies. Users can manage their cookie preferences through their browser settings.</p>
            
                <h2>8. Changes to Privacy Policy:</h2>
                <p>Privacy policy may change in the future. Users will be notified of such changes through notifications on the website or other communication methods.</p>
            
                <h2>9. Contact:</h2>
                <p>If you have questions or concerns about the privacy policy, please contact us via:</p>
                <ul>
                    <li>Email: lostandfound@finder.org</li>
                    <li>Phone number: 622-717-659</li>
                </ul>

            </ol>

            <div class="privacy-button">
                <button id="back-button" type="button" class="btn btn-light">Back</button>
            </div>
        `;
	}

	// eslint-disable-next-line class-methods-use-this
	showTermsOfUse() {
		const modalBody = document.querySelector(".modal-body");
		modalBody.innerHTML = "<terms-of-use></terms-of-use>";
	}
}

customElements.define("privacy-policy", PrivacyPolicy);
