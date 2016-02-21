import React from 'react';
import SaveOrDeleteBtns from './SaveOrDeleteBtns';
import classNames from 'classnames';

class NewQuestionBtn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {editing: false};
  }

  toggleInput(e) {
    this.setState({editing: true});
    this.input.focus();
  }

  handleBlur(e) {
    e.preventDefault();
    this.setState({editing: false});
  }

  cancel() {
    this.input.value = '';
    this.setState({editing: false});
  }

  save(e) {
    e.preventDefault();
    this.props.save(this.input);
    this.input.value = '';
  }

  render() {

    const formClass = classNames({
      'collapsed': !this.state.editing,
      'card': true,
      'clearfix': true
    });

    const btnClass = classNames({
      card: true,
      'clearfix': true,
      'hover-dark-bg': true
    });

    return(
      <div
        className='card question'
        style={{ border: 'none' }}
      >
        <div
          className={formClass}
          style={{display: !this.state.editing && 'none'}}
        >
          <div className='card-block'>
            <form onSubmit={this.save.bind(this)}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter question..."
                ref={(el) => this.input = el}
                onBlur={this.handleBlur.bind(this)}
              />
              <SaveOrDeleteBtns
                cancelEdit={this.cancel.bind(this)}
                save={this.save.bind(this)}
              />
            </form>
          </div>
        </div>
      {!this.state.editing &&
        <div
          className={btnClass}
          style={{margin: '0'}}
          onClick={this.toggleInput.bind(this)}
        >
          <div className="card-block">
            <h4 className="no-margin">
              Add a question...
            </h4>
          </div>
        </div>
      }
    </div>
    );
  }
}

export default NewQuestionBtn;
