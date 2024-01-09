const Tou = {
	async render() {
		return `
      <div class="tou-title">
        <h1>Terms & Conditions of Use</h1>
      </div>
      <terms-of-use></terms-of-use>
    `;
	},
	async afterRender() {
		// Function to be called after render()
	},
};

export default Tou;
