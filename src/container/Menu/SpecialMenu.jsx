import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding " id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palate" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_beverages flex__center">
      <p className="app__specialMenu-menu_heading">Beverages</p>
      <div className="app__specialMenu_menu_items">
      {data.beverages.map((beverages, index) => (
        <MenuItem key={beverages.title + index} title={beverages.title} price={beverages.price} Ingredients={beverages.Ingredients} />
      ))}
      </div>
      </div>

      <div className="app__specialMenu-menu_img">
      <img src={images.menu} alt="menu img" />
      </div>

      <div className="app__specialMenu-menu_soup">
          <p className="app__specialMenu-menu_heading">Soup</p>
          <div className="app__specialMenu_menu_items">
            {data.soup.map((soup, index) => (
              <MenuItem key={soup.title + index} title={soup.title} price={soup.price} Ingredients={soup.Ingredients} />
            ))}
          </div>
        </div>
      </div>
    <div  style={{ marginTop: '15px' }}>
    <button type="button" className="custom__button">View More</button>
    </div>
 </div>
);

export default SpecialMenu;

// specialmenu-section */