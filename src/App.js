import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as allActions from "./actions";
import Header from './Header';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';
import Login from './Login';
import Logout from "./Logout";

function App(props) {

  const {loading, errorMessage, auth, actions} = props;

  return (
    <div className="App">
      <Header />
      <Login auth={auth} actions={actions} />
      <Logout auth={auth} actions={actions} />
      <Loading loading={loading} />
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
}

export default connect(state => state, dispatch => ({actions: bindActionCreators(allActions, dispatch)}))(App);
