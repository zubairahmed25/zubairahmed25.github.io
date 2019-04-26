import React, { Component } from 'react';


import './Toolbar.css';

class Toolbar extends Component {
  state = {
    itemName: ''
  };



  addButtonHandler = () => {
    if (this.state.itemName) {
      this.props.onAddHandler(this.state.itemName);

      // Clear the input
      this.setState({
        itemName: ''
      });
    }
  };

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      if (this.state.itemName) {
        this.props.onAddHandler(this.state.itemName);
  
        // Clear the input
        this.setState({
          itemName: ''
        });
      }
    }
  };



  inputHandler(value) {
    this.setState({
      itemName: value
    });
  }

  render() {
    return (
      <div className="toolbar-section">
        <input
          className="toolbar-section__input"
          type="text"
          placeholder="Type the item"
          onKeyPress={this.handleKeyPress}
          value={this.state.itemName}
          onChange={e => {
            this.inputHandler(e.target.value);
          }}
        />
        <button
          className="toolbar-section__button"
          disabled={!this.state.itemName}
          onClick={this.addButtonHandler}
        >
          +
        </button>
      </div>
    );
  }
}

export default Toolbar;
