class Ui {
  constructor() {
    this.profile = document.getElementById("profile")
  }

  showUser(user) {
    this.profile.innerHTML += `
        <div id="showUser">
        <div class="card card-body mb-3">
          <div class="row">
            <div class="col-md-3">
              <img class="img-fluid mb-2" src="${user.avatar_url}">
              <h5>${user.login}</h2>
              <a href="${user.url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
            </div>
            <div class="col-md-9">
              <span class="badge badge-primary">Public Repos:${user.public_repos} </span>
              <span class="badge badge-secondary">Public Gists:${user.public_gists} </span>
              <span class="badge badge-success">Followers:${user.followers}</span>
              <span class="badge badge-info">Following:${user.following}</span>
              <br><br>
              <ul class="list-group">
                <li class="list-group-item">Company:${(user.company == null) ? "None" : user.company} </li>
                <li class="list-group-item">Website/Blog:${(user.blog == '') ? "None" : user.company} </li>
                <li class="list-group-item">Location:${user.location} </li>
                <li class="list-group-item">Member Since:${user.created_at} </li>
              </ul>
            </div>
          </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        </div>
      `
  }

  showRepo(repo) {
    console.log(repo)
    for (var i = 0; repo.length; i++) {
      const output = document.getElementById("repos")
      output.innerHTML += `
                          <div class="card card-body mb-2">
                            <div class="row">
                              <div class="col-md-6">
                                <a href="${repo.html_url}" target="_blank">${repo[i].name}</a>
                              </div>
                              <div class="col-md-6">
                              <span class="badge badge-primary">Stars: ${repo[i].stargazers_count}</span>
                              <span class="badge badge-secondary">Watchers: ${repo[i].watchers_count}</span>
                              <span class="badge badge-success">Forks: ${repo[i].forms_count}</span>
                              </div>
                            </div>
                          </div>
                        `
    }

  }

  showAlert(message, className) {
    //clear previous alert
    const ui = new Ui
    ui.clearAlert()
    const error = document.createElement("div")
    error.className = `${className} container`

    error.appendChild(document.createTextNode(message))
    const parent = document.getElementsByTagName("body")[0]
    const child = document.getElementsByClassName("searchContainer")[0]
    parent.insertBefore(error, child)

    setTimeout(() => {
      if (document.getElementsByClassName("alert alert-danger container")[0]) {
        document.getElementsByClassName("alert alert-danger container")[0].remove()
      }
    }, 5000)

  }

  clearUi() {
    this.profile.innerHTML = ''
  }

  clearAlert() {
    const current = document.getElementsByClassName("alert alert-danger container")

    if (current) {
      for (var i = 0; i < current.length; i++) {
        current[i].remove()
      }
    }
  }
}







