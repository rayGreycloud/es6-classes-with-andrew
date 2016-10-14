import React from 'react';

var ComponentOne = React.createClass({
  getInitialState: function () {
    return {
      count: 0
    };
  },
  render: function () {
    return (
      <div>
        <h3>Component One using React.createClass</h3>
        <p>Current count: {this.state.count}</p>
      </div>
    );
  }
});

export default ComponentOne;
