import Reacct from 'react';
import SaveOrDeleteBtns from './SaveOrDeleteBtns';
import classNames from 'classnames';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.showInput ? {editing: true} : {editing: false};
  }

  render() {
    const formClasses = classNames({
      'hidden': !this.state.editing,
      'form-control': true
    });
  }
}
