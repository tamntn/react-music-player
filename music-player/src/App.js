import React, { Component } from 'react';
import './App.css';

function PlayButton(props) {
  const className = props.isMusicPlaying ? 'play active' : 'play';
  return (
    <a onClick={props.onClick} href="#" title="Play video" className={className} />
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMusicPlaying: false };
  }

  handleClick(event) {
    // Do something about the click
    if (this.state.isMusicPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }

    this.setState(prevState => {
      return {
        isMusicPlaying: !prevState.isMusicPlaying
      };
    });
  }

  render() {
    return (
      <div>
        {/* <h1 onClick={this.handleClick.bind(this)}>{ status }</h1> */}
        <PlayButton
          onClick={this.handleClick.bind(this)}
          isMusicPlaying={this.state.isMusicPlaying}
        />
        <audio id="audio" ref={(audioTag) => { this.audio = audioTag }} />
      </div>
    );
  }
}

export default App;
