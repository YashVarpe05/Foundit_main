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
     <div>
     <style>
     button{
        width:150px;
        height:50px;
        border-radius:5px;
        border:none;
     }
     </style>
     
  <center>
<a href='https://yashvarpe05.github.io/FOUNDIT/' class="learn-more" target="_blank"><button>Check Out</button></a>


  </center>
     </div>
    `;
	},

	async afterRender() {
		// This function will be called after rendering
	},
};

export default about;
