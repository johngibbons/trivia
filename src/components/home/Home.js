import React from 'react';
import logo from './logo.svg';
import './Home.css';
import RaisedButton from 'material-ui/RaisedButton';

const Home = ({children}) => {
  return (
    <div className="Home">
      <div className="Home-header">
        <h2>Welcome to Trvia</h2>
        <RaisedButton
          primary
          label={'Create a game'}
          labelStyle={{
            color: '#212121'
          }}
        />
        {children}
      </div>
    </div>
  )
}

export default Home;
