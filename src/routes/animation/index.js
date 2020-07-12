import React, { Component } from 'react'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import {
  Container,
  PrimaryCard,
  SecondaryCard,
  Button,
  View,
  EachVideo,
  Video,
  CardVideo
} from './styles'

@inject('animationStore')
@observer
class AnimationDemo extends Component {
  @observable button = false
  @action.bound
  setIsShownContent = value => {
    const { animationStore } = this.props
    animationStore.getShowAnimationStatus(
      'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      value
    )
  }
  @action.bound
  showButton(value) {
    this.button = value
  }
  render() {
    return (
      <EachVideo>
        <PrimaryCard
          onMouseEnter={() => this.showButton(true)}
          onMouseLeave={() => this.showButton(false)}
        >
          <CardVideo
            src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
            autoPlay
            loop
          ></CardVideo>
          {this.button ? (
            <View onClick={() => this.setIsShownContent(true)}> VIEW </View>
          ) : (
            ''
          )}
        </PrimaryCard>
      </EachVideo>
    )
  }
}

@inject('animationStore')
@observer
class Screen extends Component {
  setIsShownContent = value => {
    this.props.animationStore.getShowAnimationStatus(value)
  }
  render() {
    const { link } = this.props
    return (
      <div>
        <SecondaryCard>
          <Button onClick={() => this.setIsShownContent(false)}> X </Button>
          <Video src={link} controls autoPlay></Video>
        </SecondaryCard>
      </div>
    )
  }
}
// export default AnimationDemo
@inject('animationStore')
@observer
class VideosList extends Component {
  render() {
    const { playerDisplay, videoLink } = this.props.animationStore
    return (
      <Container>
        {['1', '2', '3', '4', '5', '6', '7'].map(number => (
          <AnimationDemo key={number} />
        ))}
        {playerDisplay ? <Screen link={videoLink} /> : ''}
      </Container>
    )
  }
}

export default VideosList
