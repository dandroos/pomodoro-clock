import React, { Component } from 'react'
import Settings from './subcomponents/Settings';
import Timer from './subcomponents/Timer';

export default class Main extends Component {
  render() {
    return (
      <main className="main">
        <Settings />
        <Timer />
      </main>
    )
  }
}
