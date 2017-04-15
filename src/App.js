import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="outer-container">
        <div className="inner-container">
          <div className="header">
            <span className="header-text">teleidoscope</span>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;

