import LostAndFoundAPI from "../../data/lost-and-found-api";
import {
	createFoundItemCardForResult,
	createLostItemCardForResult,
} from "../template/template-creator";

const DetailItems = {
	async render() {
		return `
    <div class="container">
      <div class="row mt-3">

        <div class="col-md-3 mb-3">

          <h2 class="grid-title"><img width="40" height="40" src="https://img.icons8.com/dotty/80/empty-filter.png" alt="filter--v1"/> Filters</h2>
          <hr>

          <form>

          <div class="input-group-search mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text search-icon"><img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/external-magnifier-infographic-elements-vitaliy-gorbachev-lineal-vitaly-gorbachev.png" alt="search-icon"></span>
          </div>
          <input id="search-input" type="text" class="form-control" placeholder="Search for items.." aria-describedby="basic-addon2">
        </div>
            <div class="form-group mb-3">
              <label for="status">Status:</label>
              <select class="form-control" id="status">
                <option value="">All</option>
                <option value="found">Found</option>
                <option value="lost">Lost</option>
              </select>
            </div>

            <div class="form-group mb-3">
              <label for="fromDate">From Date:</label>
              <input type="date" class="form-control" id="fromDate">
            </div>

            <div class="form-group mb-3">
              <label for="toDate">To Date:</label>
              <input type="date" class="form-control" id="toDate">
            </div>

            <button type="submit" class="btn btn-primary">Filter</button>

          </form>

        </div>

        <div class="col-md-9">

          <h2><img width="40" height="40" src="https://img.icons8.com/ios/50/test-passed--v1.png" alt="check-document"/> Result</h2>
          <hr>
          <div class="container mb-3">
            <div id="item-list" class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
            <div class="loading-container">
              <div class="loading-spinner"></div>
              <div class="loading-text">Loading item list...</div>
            </div>
            </div>
          </div>
          
        </div>

      </div>
    </div>
        `;
	},

	async afterRender() {
		const statusFilter = document.getElementById("status");
		const fromDateInput = document.getElementById("fromDate");
		const toDateInput = document.getElementById("toDate");
		const searchInput = document.querySelector("#search-input");
		const itemContainer = document.querySelector("#item-list");

		const items = (await LostAndFoundAPI.itemList()).reverse();

		function filterItems() {
			const selectedStatus = statusFilter.value;
			const fromDate = new Date(fromDateInput.value);
			const toDate = new Date(toDateInput.value);

			itemContainer.innerHTML = "";
			let hasDisplayedItems = false;

			items.forEach((item) => {
				if (selectedStatus && item.status !== selectedStatus) {
					return;
				}

				const itemDate = new Date(item.item_date);
				// eslint-disable-next-line max-len
				if (
					(fromDateInput.value && itemDate < fromDate) ||
					(toDateInput.value && itemDate > toDate)
				) {
					return;
				}

				const searchTerm = searchInput.value.toLowerCase();
				if (searchTerm && !item.item_name.toLowerCase().includes(searchTerm)) {
					return;
				}

				hasDisplayedItems = true;

				if (item.status === "found") {
					itemContainer.innerHTML += `<div class="col">${createFoundItemCardForResult(
						item
					)}</div>`;
				} else {
					itemContainer.innerHTML += `<div class="col">${createLostItemCardForResult(
						item
					)}</div>`;
				}
			});

			if (!hasDisplayedItems) {
				// No items matched the filter criteria
				itemContainer.innerHTML = '<div class="no-items">No items found.</div>';
			}
		}

		filterItems();
		// Add event listener for the filter button and search button
		const filterButton = document.querySelector(".btn-primary");

		filterButton.addEventListener("click", (event) => {
			event.preventDefault();
			filterItems();
		});
		searchInput.addEventListener("input", (event) => {
			event.preventDefault();
			filterItems();
		});
	},
};

export default DetailItems;
