import React from 'react';

// import './Electronic.css';
import Phone_Navbar from '../../AllPhone_Navbar/AllPhone_Navbar';
import './AllPhones.css';

import PhantomGT from './jbl.jpg';
import PhantomGTclub from './ps5.jpg';
import Superfly7 from './pad.jpg';
import Tiempo8 from './1.jpg';
import Superfly7pro from './Gadget.jpg';
import PhoneComponent from '../../phoneComponent/phoneComponent';


const Electronic = () => {
  return (
    <div className="allPhones">
      <Phone_Navbar
        title="JaskExpress's"
        pathGym="/jask/Phone"
        path2="/jask/Gadget"
      />
      <div className="allPhones__phone">
        <PhoneComponent 
          image={PhantomGT}
          id="500000"
          title="JBL waterproof"
          before={300}
          after={250}
          category="EarBud"
        />
        <PhoneComponent 
          image={PhantomGTclub}
          id="500001"
          title="Fifa 2021"
          before={70}
          after={60}
          category="Playstation 5 "
        />
        <PhoneComponent 
          image={Superfly7}
          id="500002"
          title="Playstation 5 dual pad"
          before={320}
          after={320}
          category="PS 5"
        />
        <PhoneComponent 
          image={Tiempo8}
          id="500003"
          title="Iphone Charger"
          before={90}
          after={60}
          category="Iphone accessories"
        />
        <PhoneComponent 
          image={Superfly7pro}
          id="500004"
          title="Playstation 5"
          before={200}
          after={175}
          category="Playstation 5"
        />
      
      </div>
    </div>
  );
}

export default Electronic;