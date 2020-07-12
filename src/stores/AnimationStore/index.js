import { observable, action, computed } from 'mobx'

class AnimationStore {
  @observable playerDisplay
  constructor() {
    this.playerDisplay = false
    this.videoLink = ''
  }

  @action.bound
  getShowAnimationStatus(link, value) {
    this.playerDisplay = !this.playerDisplay
    this.videoLink = link
  }
}

export default AnimationStore
