// react moudles
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// components
import App from './components/App';
import Home from './components/Home'
import List from './components/List'
import Detail from './components/Detail'

// styles
require('./styles/main.scss');
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

// metaTag
const metaTag = document.createElement('meta');
const root = document.createElement('div');

metaTag.name = "viewport"
metaTag.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
document.getElementsByTagName('head')[0].appendChild(metaTag);

root.id = 'app';
document.body.appendChild(root);

class Application extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Router history={browserHistory} >
        <Route path="/" component={App} >
          <IndexRoute component={Home} />
          <Route path="items(?search=)" component={List} />
          <Route path="items/:id" component={Detail} />
        </Route>
      </Router>
    );
  }
}

export default Application;

ReactDOM.render(<Application />,document.getElementById('app'));

