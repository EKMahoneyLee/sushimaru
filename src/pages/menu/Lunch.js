import React from "react";

import LunchData from './LunchData'
import './lunch.scss';

const Lunch = () => {   
  return (
    <div className="lunch" >
      <div className="top">
        <h1>Lunch Special</h1>
        <p>Lunch special is avaiable from 11:30AM to 3PM</p>
        <p>Miso soup, cold Soba or hot Udon (Seasonal) will be served only for dine in</p>
      </div>
      <div className="lunch-item">
        {LunchData.length > 0  && LunchData.map((dinein) => (
          <div className="item">
            <div className="title">
              <h4> {dinein.title} </h4>
              <p>{dinein.price}</p>
            </div>
              <p>{dinein.desc ? dinein.desc : null}</p>
              <p>{dinein.desc1 ? dinein.desc1 : null}</p>
              <p>{dinein.desc2 ? dinein.desc2 : null}</p>
            </div>
        ))}
      </div>   
      <div className="item-img">
        {LunchData.length > 0  && LunchData.map((dinein) => (
          dinein.img? <div className="img-container" key={dinein.id}><img src={dinein.img} alt={dinein.title} />{dinein.title}</div>: ''
        ))}      
      </div>    
    </div>
  )
}

export default Lunch;
