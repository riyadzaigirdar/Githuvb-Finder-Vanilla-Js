const git = new Github
const ui = new Ui
document.getElementById("searchUser").addEventListener('keyup', (e) => {
    const searchValue = e.target.value
    if (searchValue !== '') {
        git.getUser(searchValue)
            .then(data => {
                if (data.person.message !== "Not Found") {

                    // remove the previous search
                    ui.clearUi()
                    // initialize the ui with the person
                    ui.showUser(data.person)

                    git.getRepos(searchValue)
                        .then(data => {
                            ui.showRepo(data.repo)

                        })

                } else {
                    // show alert in the ui person not found
                    ui.showAlert("user not found", "alert alert-danger")
                    ui.clearUi()
                }
            })
            .catch(() => {
                ui.showAlert("user not found", "alert alert-danger")
            })

    } else {
        // reset the ui  
        ui.clearUi()
    }

})