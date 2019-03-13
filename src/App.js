import React, { Component } from 'react';
import './App.scss';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { fetchNotes } from './actions/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hey
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      notes: state.notes
  }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchNotes }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(App);
