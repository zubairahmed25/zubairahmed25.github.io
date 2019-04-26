import React, { Component } from 'react';
import List from '../List/List';
import Toolbar from '../Toolbar/Toolbar';
import Header from '../Header/Header'

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './MainList.css';

class MainList extends Component {
  state = {
    items: {}
  };

  addItemHandler = itemName => {
    this.setState({
      items: {
        ...this.state.items,
        [+new Date()]: itemName
      }
    });
  };

  onDeleteHandler = itemKey => {
    let newStateItems = { ...this.state.items };

    delete newStateItems[itemKey];

    this.setState({
      items: {
        ...newStateItems
      }
    });
  };

  render() {
    const mainList = Object.keys(this.state.items).map(itemKey => {
      return (
        <CSSTransition key={itemKey} timeout={500} classNames="move">
          <List
            name={this.state.items[itemKey]}
            onDelete={() => {
              this.onDeleteHandler(itemKey);
            }}
          />
        </CSSTransition>
      );
    });

    return (
      <div>
      <Header/>
      
      <div className="items-section">
        <Toolbar onAddHandler={this.addItemHandler} />
        <TransitionGroup className="items-section__list">
          {mainList}
        </TransitionGroup>
      </div>
      </div>
      
    );
  }
}

export default MainList;
