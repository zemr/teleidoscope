import React from 'react';
import Sidebar from './Sidebar';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
        <div className="main-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;

