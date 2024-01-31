class NavigationBar extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
        <nav id="navigationDrawer" class="app-bar__navigation">
		 <img src="foundit.png" class="nav-logo" alt="logo">
          <ul>
            <li><a class="nav-link" href="#/home">Home</a></li>
            <li class="dropdown">
              <a href="#" class="dropbtn nav-link" onclick="return false;">SERVICE</a>
              <div class="dropdown-content">
                <a href="#/lost-item-service">Seeker</a>
                <a href="#/found-item-service">Finder</a>
                <a href="#/list-item-service">Item List</a>
              </div>
            </li>
            <li><a class="btn-abt nav-link" target="_blank" href="https://yashvarpe05.github.io/FOUNDIT/">About</a></li>
          </ul>
        </nav>
      `;

		const dropdownButton = this.querySelector(".dropbtn");
		const dropdownContent = this.querySelector(".dropdown-content");

		dropdownButton.addEventListener("click", () => {
			dropdownContent.classList.toggle("show");
		});

		document.addEventListener("click", (event) => {
			const { target } = event;
			const isDropdown = target.classList.contains("dropbtn");
			const isDropdownContent = target.classList.contains("dropdown-content");

			if (!isDropdown && !isDropdownContent) {
				dropdownContent.classList.remove("show");
			}
		});
	}
}

customElements.define("nav-bar", NavigationBar);
