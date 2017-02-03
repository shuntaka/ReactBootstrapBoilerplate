import React, { Component } from 'react';
import {render} from 'react-dom';
import { Button } from 'react-bootstrap';
import '../bower_components/bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div>
        <Button bsStyle="primary">Primary</Button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
