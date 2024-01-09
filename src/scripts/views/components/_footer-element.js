class FooterElement extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
    <footer>
      <div class="footer-top">
          <div class="container">
              <div class="row">
                  <div class="col-md-5 footer-about wow fadeInUp">
                      <img class="logo-footer" src="./foundit.png" alt="logo-footer">
                      <p>
                      "lorem"
                      </p>
                      <p><a href="#/about">Our Team</a></p>
                  </div>
                  <div class="col-md-5 offset-md-2 footer-contact wow fadeInDown">
                      <h3>Contact</h3>
                      <p><i class="fas fa-map-marker-alt"></i> Nashik </p>
                      <p><i class="fas fa-phone"></i> Phone: 8766080040</p>
                      <p><i class="fas fa-envelope"></i> Email: <a href="mailto:yashvarpe2005@gmail.com">yashvarpe2005@gmail.com</a></p>
                  </div>
              </div>
              </div>
          </div>
      </div>
      <div class="footer-bottom">
          <div class="container">
            <div class="col-md-6 footer-copyright">
              &copy; 2024  <a href="#/about" target="_blank">FoundIt</a>
            </div>
          </div>
      </div>
    </footer>
      `;
	}
}
customElements.define("footer-element", FooterElement);
