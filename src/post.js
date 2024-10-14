const User = require('./user')

class Post {
  #number = 0
  #subscribers = []

  constructor (name) {
    this.name = name
  }

  get summary () {
    return `${this.name} publication number ${this.#number}`
  }

  getSubscribers () {
    return this.#subscribers.map(user => user.name).join(',')
  }

  attach (user) {
    if (user instanceof User) {
      if (!this.#subscribers.includes(user)) {
        this.#subscribers.push(user)
      }
    }
  }

  detach (user) {
    this.#subscribers = this.#subscribers.filter((a) => a !== user)
  }

  publish () {
    this.#number++
    return this.#subscribers.map((a) => a.notify(this))
  }
}

module.exports = Post
