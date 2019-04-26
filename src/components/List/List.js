import React from 'react';


import './List.css';

const list = ({ name, onDelete }) => {
  return (
    <div className="list-section">
      <input
        type="checkbox"
        className="list__check"
        onClick={onDelete}
      />
      <span className="list__content"> {name} </span>
    </div>
  );
};


export default list;
