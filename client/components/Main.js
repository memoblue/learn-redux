import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return(
      <div>
        <h1><Link to="/">Reduxtagram</Link></h1>
        {/* cloneElement will pass props down from Main to the first child */}
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
});

export default Main;
