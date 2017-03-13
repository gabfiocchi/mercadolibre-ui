import React from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import Store from '../Store';

// Components
import SearchPanel from './SearchPanel/SearchPanel';

let store = new Store();

// @observer
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SearchPanel store={store} />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  store: React.PropTypes.object,
};

export default App;