import React, { Component } from 'react';

class HomeHeader extends Component{
  render() {
    return(
      <header id="header" className="alt">
				<h1><strong><a href="index.html">Spatial</a></strong> by Templated</h1>
				<nav id="nav">
					<ul>
						<li><a href="index.html">Home</a></li>
						<li><a href="generic.html">Generic</a></li>
						<li><a href="elements.html">Elements</a></li>
					</ul>
				</nav>
			</header>
    );
  }
}

export default HomeHeader;
