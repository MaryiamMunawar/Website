import React from 'react';

import {SubHeading, subHeading} from '../../components';
import {images} from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word"/>
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content-quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">Food is the universal language of love.</p>
        </div>
        <p className="p__opensans">"At Gericht, we believe in the magic of flavors and the joy of sharing. Our passion is to craft memorable dining experiences where ingredients tell a story. Every dish is a masterpiece of creativity and quality. Join us for a journey of culinary delight."</p>
      </div>
      <div className="app__chef-sign">
        <p>Ali Reynolds</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign}alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
