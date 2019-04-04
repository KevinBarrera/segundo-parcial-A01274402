import React, { Component } from 'react';
import './App.css';

class TweetBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({ text: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();

    let newText = this.state.text;
    this.setState({text: ''})

    this.props.onSubmitNewTweet(newText);
  }

  render() {
    return(
      <form 
        onSubmit={this.handleSubmit}
        className="tweet-box row"
      >
        <img 
          alt="user's avatar"
          className="small-avatar"
          src="https://www.logolynx.com/images/logolynx/e5/e5ba79334133d2cb362dd639f755a392.png"
        />
        <input
          value={this.state.text}
          placeholder={'What´s happening?'}
          onChange={this.handleChange}
        />
        <button>Tweet</button>
      </form>
    )
  }
}

export default TweetBox;
