import React, { Component } from 'react';
import "../styles/Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Employee Directory!</h1>
        <p>You can use the search bar to find an exact match, or filter by heading by clicking the carrot next to each heading.</p>
      </div>
    )
  }
}
