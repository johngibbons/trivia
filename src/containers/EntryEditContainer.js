import React from 'react';
import {connect} from 'react-redux';

import EntryEdit from '../components/EntryEdit'

class EntryEditContainer extends React.Component {
  render(){
    const game = this.props.gamesById[this.props.params.id];
    return(
      <EntryEdit
        {...game}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    gamesById: state.gamesById
  }
}

export default connect(mapStateToProps)(EntryEditContainer);
