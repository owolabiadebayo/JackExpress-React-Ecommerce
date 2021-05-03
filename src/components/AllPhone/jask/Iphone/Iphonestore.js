import React from 'react';

// import './Iphonestore.css';
import Phone_Navbar from '../../AllPhone_Navbar/AllPhone_Navbar';
import './AllPhones.css';

import Kyrie3 from './1.jpg';
import Lebron17 from './2.jpg';
import Pg4 from './3.jpg';
import Lebron17FP from './4.jpg';
import KybridS2 from './5.jpg';
import Freak2 from './6.jpg';
import Lebron17Monstars from './7.jpg';
import Kyrie6 from './8.jpg';
import PhoneComponent from '../../phoneComponent/phoneComponent';


const Iphonestore = () => {
  return (
    <div className="allPhones">
       <Phone_Navbar
        title="JaskExpress's"
        pathGym="/jask/Phone"
        path2="/jask/Gadget"
      />
      <div className="allPhones__phone">
        <PhoneComponent 
          image={Kyrie3}
          id="600000"
          title="Iphone 11 pro"
          before={420000}
          after={315000}
          category="Phone"
        />
        <PhoneComponent 
          image={Lebron17}
          id="600001"
          title="Iphone 5 "
          before={55000}
          after={40000}
          category="Phone"
        />
        <PhoneComponent 
          image={Pg4}
          id="600002"
          title="Iphone 11 128GB"
          before={320000}
          after={275000}
          category="Phones"
        />
        <PhoneComponent 
          image={Lebron17FP}
          id="600003"
          title="Iphone 6s"
          before={90000}
          after={80000}
          category="phones"
        />
        <PhoneComponent 
          image={KybridS2}
          id="600004"
          title="Iphone 5"
          before={55000}
          after={45000}
          category="phones"
        />
        <PhoneComponent 
          image={Freak2}
          id="600005"
          title="Iphone 6s 64gig"
          before={80000}
          after={70000}
          category="Phones"
        />
        <PhoneComponent 
          image={Lebron17Monstars}
          id="600006"
          title="Iphone 7 Red 64gig"
          before={140000}
          after={120000}
          category="phone"
        />
        <PhoneComponent 
          image={Kyrie6}
          id="600007"
          title="Iphone 7s Red"
          before={150000}
          after={130000}
          category="phone"
        />
      </div>
    </div>
  );
}

export default Iphonestore;