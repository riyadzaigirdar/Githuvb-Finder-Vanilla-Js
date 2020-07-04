class Github {
    constructor() {
        this.client_id = '3c6b2969a18b860f73ab'
        this.client_secret = 'ba7b02cf6483a593a13371d695287e8207516849'
    }
    async getUser(user) {
        const response = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const personData = await response.json()

        return {
            person: personData
        }
    }
    async getRepos(user) {
        const response = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const reposData = await response.json()

        return {
            repo: reposData
        }
    }

}