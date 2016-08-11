import React, { Component } from 'react';

class HomeBanner extends Component{
  render() {
    return(
      <section id="banner">
				<h2>Spatial</h2>
				<p>Lorem ipsum dolor sit amet nullam consequat <br /> interdum vivamus donce sed libero.</p>
				<ul className="actions">
					<li><a href="#" className="button special big">Get Started</a></li>
				</ul>
			</section>
    );
  }
}

export default HomeBanner;
