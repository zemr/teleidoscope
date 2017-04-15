import React from 'react';
import { Link } from 'react-router';
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
    if (this.props.params.patternId) {
      this.setState({pattern: process.env.PUBLIC_URL + '/cells/cell_' + this.props.params.patternId +'_1.png'});
    }
    window.addEventListener('resize', this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth);
  }

  render() {
    return (
      <div className="scopes-container">
        {
          this.state.screen > 767 && this.state.window > 767
            ?
            <Scope pattern={this.state.pattern} />
            :
            <ScopeMobile pattern={this.state.pattern} />
        }
        <ScopeButton pattern={this.state.pattern} changePattern={this.changePattern} />
        <Link to="/" className="patterns-link">patterns</Link>
      </div>
    );
  }
}

export default ScopeView;