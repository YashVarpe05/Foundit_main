import pictVicky from "../../../public/images/dev/profile-vicky.png";
import pictIbnu from "../../../public/images/dev/profile-ibnu.png";
import pictMahen from "../../../public/images/dev/profile-mahen.jpg";
import pictBarkah from "../../../public/images/dev/profile-barkah.png";
import pictCreditHtml from "../../../public/images/credit/html5-logo.png";
import pictCreditCss from "../../../public/images/credit/css3-logo.png";
import pictCreditJavaScript from "../../../public/images/credit/javascript-logo.png";
import pictCreditBootstrap from "../../../public/images/credit/bootstrap-logo.png";
import pictCreditNodeJs from "../../../public/images/credit/node-js-logo.png";
import pictCreditGit from "../../../public/images/credit/git-logo.png";
import pictCreditGithub from "../../../public/images/credit/github-logo.png";
import pictCreditExpress from "../../../public/images/credit/express-logo.png";
import pictCreditPostgree from "../../../public/images/credit/postgresql-logo.png";
import pictCreditNeon from "../../../public/images/credit/neon-log.png";
import pictCreditVercel from "../../../public/images/credit/vercel-logo.png";
import pictCreditPostman from "../../../public/images/credit/postman-logo.png";

import "../components/_sponsor-section";

const about = {
	async render() {
		return `
      <h2 class="about">About</h2>
      <hr class="line-about"/>
      <div class="background">
          <p>
              This website was created to fulfill the Capstone Project assignment from SIB Cycle 4 Dicoding Academy. The theme revolves around providing a utility solution with features for searching and finding lost items, aiming to assist the community in recovering them.
          </p>
          <p>
              We also offer a lost item reporting feature where you can upload photos, provide detailed descriptions, and input essential information such as the loss location, time, and contact details.
          </p>
          <p>
              This information will help others who find lost items to easily contact you and facilitate the return process.
          </p>
      </div>

      <div class="our-team">
          <h2>Our Team</h2>
          <hr class="line-our-team"/>
          <div class="box-card">
              <div class="profile">
                  <div class="image-profile">
                      <img src="${pictMahen}" alt="dev-pic1">
                  </div>
                  <div class="image-detail">
                      <h4>Mahendra</h4>
                      <p>Student at Universitas Mataram, Faculty of Engineering, Department of Informatics Engineering</p>
                      <p>"<i>Our team's collaboration created an impressive capstone project that I'm sure will outshine the rest.</i>"</p>
                      <div class="social-media">
                          <a href="https://github.com/OmMahen" target="_blank"><i class="bi bi-github"></i></a>
                          <a href="https://www.linkedin.com/in/mahendra-putra-raharja/" target="_blank"><i class="bi bi-linkedin"></i></a>
                      </div>
                  </div>
              </div>

              <div class="profile">
                  <div class="image-profile">
                      <img src="${pictBarkah}" alt="dev-pic2">
                  </div>
                  <div class="image-detail">
                      <h4>Herdyanto</h4>
                      <p>Student of Computer Science, Faculty of Information Technology, Universitas Bina Sarana Informatika</p>
                      <p>"<i>Time is a great tailor, stitching the fabric of our lives with threads of experience. In the passing seconds, time dilation teaches us the importance of cherishing every precious moment in our lives.</i>"</p>

                      <div class="social-media">
                          <a href="https://github.com/Menrva-pixel" target="_blank"><i class="bi bi-github"></i></a>
                          <a href="https://www.linkedin.com/in/barkah-herdyanto-sejati-636840258/" target="_blank"><i class="bi bi-linkedin"></i></a>
                      </div>
                  </div>
              </div>

              <div class="profile">
                  <div class="image-profile">
                      <img src="${pictIbnu}" alt="dev-pic3">
                  </div>
                  <div class="image-detail">
                      <h4>Ibnu Hasyim</h4>
                      <p>Student at Universitas Muslim Indonesia Makassar, Faculty of Computer Science, Department of Informatics Engineering. Currently focusing on learning Front End Web Development.</p>
                      <p>"<i>Error is Our Friend</i>"</p>

                      <div class="social-media">
                          <a href="https://github.com/IbnuHs" target="_blank"><i class="bi bi-github"></i></a>
                          <a href="https://www.linkedin.com/in/ibnu-hasyim-surianto-277b84241/" target="_blank"><i class="bi bi-linkedin"></i></a>
                      </div>
                  </div>
              </div>

              <div class="profile">
                  <div class="image-profile">
                      <img src="${pictVicky}" alt="dev-pic4">
                  </div>
                  <div class="image-detail">
                      <h4>Vicky</h4>
                      <p>Student at Universitas Negeri Surabaya, Faculty of Engineering, Department of Informatics Engineering</p>
                      <p>"<i>So with IT in the world 5.0, the development is so fast for a Technologist how he adapts and deals with the problem with current developments.</i>"</p>

                      <div class="social-media">
                          <a href="https://github.com/VickyPratama87" target="_blank"><i class="bi bi-github"></i></a>
                          <a href="https://www.linkedin.com/in/vicky-pratama/" target="_blank"><i class="bi bi-linkedin"></i></a>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div class="credit">
          <h2>Technology</h2>
          <hr class="line-credit"/>
          <div class="credit-list">
              <div class="credit-item">
                  <img src="${pictCreditHtml}" alt="">
                  <h6>HTML</h6>
              </div>

              <div class="credit-item">
                  <img src="${pictCreditCss}" alt="">
                  <h6>CSS</h6>
              </div>

              <div class="credit-item">
                  <img src="${pictCreditJavaScript}" alt="">
                  <h6>JavaScript</h6>
              </div>

              <div class="credit-item">
                  <img src="${pictCreditBootstrap}" alt="">
                  <h6>Bootstrap</h6>
              </div>

              <div class="credit-item">
                  <img src="${pictCreditNodeJs}" alt="">
                  <h6>Node Js</h6>
              </div>

              <div class="credit-item">
                  <img src="${pictCreditGit}" alt="">
                  <h6>Git</h6>
              </div>

              <div class="credit-item Github">
                  <img src="${pictCreditGithub}" alt="">
                  <h6>Github</h6>
              </div>

              <div class="credit-item express">
                  <img src="${pictCreditExpress}" alt="">
                  <h6>Express Js</h6>
              </div>

              <div class="credit-item express">
                  <img src="${pictCreditNeon}" alt="">
                  <h6>Neon Tech</h6>
              </div>

              <div class="credit-item express">
                  <img src="${pictCreditPostgree}" alt="">
                  <h6>Postgre SQL</h6>
              </div>

              <div class="credit-item express">
                  <img src="${pictCreditVercel}" alt="">
                  <h6>Vercel</h6>
              </div>

              <div class="credit-item express">
                  <img src="${pictCreditPostman}" alt="">
                  <h6>Postman</h6>
              </div>
          </div>
      </div>
      <sponsor-section></sponsor-section>
    `;
	},

	async afterRender() {
		// This function will be called after rendering
	},
};

export default about;
