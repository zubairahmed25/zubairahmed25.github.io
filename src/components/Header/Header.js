import React from 'react';


import './Header.css';

function Header(){
  return (
    <div className="main-header">
      <h2>To-do List</h2>
      <p><strong>Details: </strong>This app is written in React JS and uses cool React Transitions.</p>
      <p><strong>Usage: </strong>To add an item, type in the text field and press the "+" sign. To mark an item Completed, check the box next to the item.</p>
    </div>
  );
}



export default Header;
