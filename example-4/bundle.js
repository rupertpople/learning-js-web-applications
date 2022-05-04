(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // githubApi.js
  var require_githubApi = __commonJS({
    "githubApi.js"(exports, module) {
      var GithubApi2 = class {
        getRepoInfo(repoName, callback) {
          fetch("https://api.github.com/repos/" + repoName).then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
      };
      module.exports = GithubApi2;
    }
  });

  // githubModel.js
  var require_githubModel = __commonJS({
    "githubModel.js"(exports, module) {
      var GithubModel2 = class {
        constructor() {
          this.repoInfo = null;
        }
        setRepoInfo(repoInfo) {
          this.repoInfo = repoInfo;
        }
        getRepoInfo() {
          return this.repoInfo;
        }
      };
      module.exports = GithubModel2;
    }
  });

  // githubView.js
  var require_githubView = __commonJS({
    "githubView.js"(exports, module) {
      var GithubView2 = class {
        constructor(model2, api2) {
          this.model = model2;
          this.api = api2;
          const submitButtonEl = document.querySelector("#submit-button");
          const repoInputEl = document.querySelector("#repo-name-input");
          this.repoNameEl = document.querySelector("#repo-name");
          this.repoDescriptionEl = document.querySelector("#repo-description");
          this.repoImage = document.querySelector("#repo-image");
          submitButtonEl.addEventListener("click", () => {
            const repoName = repoInputEl.value;
            this.api.getRepoInfo(repoName, (repoData) => {
              this.model.setRepoInfo(repoData);
              console.log(repoData);
              this.display();
            });
          });
        }
        display() {
          this.repoNameEl.innerText = this.model.getRepoInfo().full_name;
          this.repoDescriptionEl.innerText = this.model.getRepoInfo().description;
          this.repoImage.src = this.model.getRepoInfo().organization.avatar_url;
        }
      };
      module.exports = GithubView2;
    }
  });

  // index.js
  var GithubApi = require_githubApi();
  var GithubModel = require_githubModel();
  var GithubView = require_githubView();
  var api = new GithubApi();
  var model = new GithubModel();
  var view = new GithubView(model, api);
})();
