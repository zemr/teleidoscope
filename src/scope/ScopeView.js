import React from 'react';
import Scope from './Scope';
import ScopeMobile from './ScopeMobile';
import ScopeButton from './ScopeButton';

class ScopeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      screen: screen.width,
      window: window.innerWidth,
      pattern: process.env.PUBLIC_URL + '/cells/cell_1_1.png'
    };

    this.changePattern = this.changePattern.bind(this);
    this.updateWidth = this.updateWidth.bind(this);
  }

  changePattern(newPattern) {
    this.setState({pattern: newPattern});
  }

  updateWidth() {
    this.setState({screen: screen.width, window: window.innerWidth});
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWidth);
  }

  render() {
    return (
      <div>
        <ScopeButton pattern={this.state.pattern} changePattern={this.changePattern} />
        {
          this.state.screen > 993 && this.state.window > 993
            ?
            <Scope pattern={this.state.pattern} />
            :
            <ScopeMobile pattern={this.state.pattern} />
        }
        {console.log(this.state.pattern)}
      </div>
    );
  }
}

export default ScopeView;