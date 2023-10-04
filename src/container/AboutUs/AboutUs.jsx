import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus__bg flex__center section__padding aboutus-section" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          At Gericht, we are passionate about crafting unforgettable dining experiences. Our commitment to using the freshest ingredients, combined with the artistry of our chefs, results in culinary creations that delight the senses. We invite you to join us on a gastronomic journey that celebrates flavors, quality, and hospitality.
        </p>
        <button type="button" className="custom__button">
          Know more
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Established in 2019, we've been on a culinary journey for 4 years, bringing you the finest in gastronomy. From our humble beginnings to becoming a dining destination, we've consistently delighted guests with our passion for flavors, quality, and hospitality. Join us as we continue this delicious legacy.
        </p>
        <button type="button" className="custom__button">
          Know more
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
