class GithubView {
  constructor(model, api) {
    this.model = model;
    this.api = api;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');
    this.repoNameEl = document.querySelector('#repo-name');
    this.repoDescriptionEl = document.querySelector('#repo-description');
    this.repoImage = document.querySelector('#repo-image');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.api.getRepoInfo(repoName, repoData => {
        this.model.setRepoInfo(repoData);
        console.log(repoData);
        this.display()
      });
    });
  }

  display() {
    this.repoNameEl.innerText = this.model.getRepoInfo().full_name
    this.repoDescriptionEl.innerText = this.model.getRepoInfo().description
    this.repoImage.src = this.model.getRepoInfo().organization.avatar_url
  }
}

module.exports = GithubView;