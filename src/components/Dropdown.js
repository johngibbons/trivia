import React from 'react';
import classNames from 'classnames';

class Dropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isOpen: false};
  }

  handleToggleDropdown(e) {
    e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const combinedClasses = this.props.className ?
      classNames({
        dropdown: true,
        open: this.state.isOpen
      }).concat(' ', this.props.className)
      :
      classNames({
        dropdown: true,
        open: this.state.isOpen
      });

    return (
      <div
        className={combinedClasses}
        style={this.props.style}
      >
      {this.props.children.map((childNode, index) => {
        return (
          React.cloneElement(childNode, {
            key: index,
            onClickToggle: this.handleToggleDropdown.bind(this),
            isOpen: this.state.isOpen
          })
        );
      })}
      </div>
    );
  }
};

export default Dropdown;
