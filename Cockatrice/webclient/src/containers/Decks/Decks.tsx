// eslint-disable-next-line
import React, { Component } from "react";

import { AuthGuard } from 'components/index';

import './Decks.css';

class Decks extends Component {
  render() {
    return (
      <div>
        <AuthGuard />
        <span>"Decks"</span>
      </div>
    )
  }
}

export default Decks;
