import React from 'react';
import Scope from './Scope';
import ScopeButton from './ScopeButton';

class ScopeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pattern: process.env.PUBLIC_URL + '/cells/cell_1_1.png'
    };

    this.changePattern = this.changePattern.bind(this);
  }

  changePattern(newPattern) {
    this.setState({pattern: newPattern});
  }

  render() {
    return (
      <div>
        <ScopeButton pattern={this.state.pattern} changePattern={this.changePattern} />
        <Scope pattern={this.state.pattern}/>
        {console.log(this.state.pattern)}
      </div>
    );
  }
}


export default ScopeView;