import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addFeature, removeFeature } from './actions';

import { connect } from 'react-redux';

const App = () => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
    return {
      type: 'REMOVE_FEATURE',
      payload: item
    }
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    return {
      type: 'ADD_FEATURE',
      payload: item
    }
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures  />
        <Total />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return{
    store: state.store
  }
}

export default connect(mapStateToProps, { removeFeature, addFeature })(App)

// export default App;
