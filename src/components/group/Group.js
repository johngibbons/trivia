import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './Group.css';
import { List } from 'immutable';
import GroupModel from '../../models/Group';
import { groupEntriesSelector } from '../../selectors/entries-selector';
import { currentGroupSelector } from '../../selectors/group-selector';
import { groupGameStartedSelector } from '../../selectors/games-selector';
import { openModal } from '../../actions/ui-actions';

import RaisedButton from 'material-ui/RaisedButton';
import NewEntryModal from '../../components/entry/newEntryModal/NewEntryModal';
import PageHeading from '../pageHeading/PageHeading';
import EntriesTable from './entriesTable/EntriesTable';

const Group = ({
  group,
  entries,
  params,
  gameStarted,
  onClickNewEntry
}) => {
  return (
    <div className='Group'>
      <PageHeading
        text={group.name}
      />
      {!gameStarted &&
      <RaisedButton
        primary
        label='Create your entry'
        labelStyle={{
          color: '#212121'
        }}
        onClick={() => onClickNewEntry('NEW_ENTRY')}
      />}
      <EntriesTable
        entries={entries}
        gameStarted={gameStarted}
      />
    {group.id &&
      <NewEntryModal
        groupId={params.id}
        gameId={group.game}
      />}
    </div>
  )
}

Group.propTypes = {
  group: PropTypes.instanceOf(GroupModel),
  entries: PropTypes.instanceOf(List),
  params: PropTypes.object,
  gameStarted: PropTypes.bool,
  onClickNewEntry: PropTypes.func.isRequired
}

const mapStateToProps = (state, props) => {
  return {
    entries: groupEntriesSelector(state, props),
    group: currentGroupSelector(state, props),
    gameStarted: groupGameStartedSelector(state, props)
  }
}

export default connect(mapStateToProps, {
  onClickNewEntry: openModal
})(Group)
