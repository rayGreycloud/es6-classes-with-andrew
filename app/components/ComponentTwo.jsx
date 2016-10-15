import React from 'react';

class ComponentTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    return (
      <div>
        <h3>Component Two using React.Component</h3>
        <p>Current count: {this.state.count}</p>
        <button className="button" onClick={this.onClick}>Button Two</button>
      </div>
    );
  }
}

ComponentTwo.defaultProps = {
  count: 0
};

ComponentTwo.propTypes = {
  count: React.PropTypes.number
};

export default ComponentTwo;
