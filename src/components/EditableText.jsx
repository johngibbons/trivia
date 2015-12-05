import React from 'react';
import SaveOrDeleteBtns from './SaveOrDeleteBtns';
import classNames from 'classnames';

export default React.createClass({
  showBtn(){
    !this.props.titleFormVisible &&
      this.props.toggleTitleForm();
  },
  saveInput(e){
    if (e.key === 'Enter' || !e.key) {
      this.input.blur();
      this.props.saveInput(this.input.value);
      this.props.toggleTitleForm();
    }
  },
  cancelEdit(){
    this.input.value = '';
    this.props.toggleTitleForm();
  },
  render(){
    const btnsClasses = classNames({
      'hidden': !this.props.titleFormVisible
    });
    return(
      <div>
        <input
          type="text"
          className="editable-title"
          placeholder={this.props.placeholder}
          ref={el => this.input = el}
          onKeyDown={this.saveInput}
          onFocus={this.showBtn}
        />
        <SaveOrDeleteBtns
          ref={el => this.btns = el}
          className={btnsClasses}
          cancelEdit={this.cancelEdit}
          save={this.saveInput}
        />
      </div>
    );
  }
});
