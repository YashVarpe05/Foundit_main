/* eslint-disable no-plusplus */
import profileImg1 from "../../../public/images/img-missing.png";
import profileImg2 from "../../../public/images/question-img.png";
import profileImg3 from "../../../public/images/img-missing-2.png";

const Profile = {
	async render() {
		return `
    <h2 class="page-title">Discover Your Role!</h2>
        <div id="finder-profile">
            <div class="profile-card">
                <div class="profile-img">
                  <img src="${profileImg1}">
                  <h2>Finder</h2>
                 </div>
                 <div class="profile-info">
                    <h3>Finder</h3>
                    <p>A Finder is someone who discovers lost items. The Finder plays a crucial role in the process of searching and possibly returning lost items.</p>
                </div>
              </div>

              <div class="profile-card">
                <div class="profile-img">
                  <img src="${profileImg2}">
                  <h2>Helper</h2>
                </div>
               <div class="profile-info">
                  <h3>Helper</h3>
                  <p>Helper refers to an individual who offers assistance or support to those in need.
                  In the context of this website, a Helper can be someone providing guidance, advice, or practical assistance to Finders and Seekers in their efforts to find or recover lost items.</p>
              </div>
            </div>

            <div class="profile-card">
                <div class="profile-img">
                  <img src="${profileImg3}">
                  <h2>Seeker</h2>
                 </div>
                 <div class="profile-info">
                    <h3>Seeker</h3>
                    <p>A Seeker is someone actively searching for lost items. They seek information,
                    resources, or services that can help them in finding lost items. Seekers rely on the assistance and tools provided by the website to enhance their chances of finding lost items.</p>
                </div>
              </div>
         </div>
         <div class="warning-card">
            <div class="warning-card-content">
              <p>It's important to remember that the roles of Finder, Seeker, and Helper on this website are intended to facilitate the process of finding and recovering lost items. However, individuals using this site are responsible for their own actions and decisions.</p><br>
              <p>We remind you to comply with applicable theft laws. Theft is illegal and violates the rights of others. We do not endorse or take responsibility for actions that break the law.</p><br>
              <p>In using this site, users are expected to behave with integrity and act in accordance with the law. If you find a lost item, we encourage you to collaborate with authorities and follow appropriate procedures to return the item to its owner.</p><br>
              <p>We cannot provide legal advice directly. If you have legal questions or concerns regarding legal responsibility, it is advisable to consult with a qualified legal professional in your area.</p>
            </div>
          </div>
      `;
	},

	async afterRender() {},
};

export default Profile;
