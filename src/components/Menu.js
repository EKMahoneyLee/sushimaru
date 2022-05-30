import React from "react";
import '../styles/menu.css';
import { Carousel } from 'react-carousel-minimal';

import ima from '../assets/images/menu.jpg';
import ima1 from '../assets/images/menu-1.jpg';
import ima2 from '../assets/images/menu-2.jpg';


const Menu = () => {
  const data = [
      {
          image: ima,
          caption: 'sushi'
      },
      {
          image: ima2,
          caption: 'udon'
      },
      {
          image: ima1,
          caption: 'drinks'
      }
  ]

  const captionStyle = {
      fontSize: '2em',
      fontWeight: 'bold',
    }
    const slideNumberStyle = {
      fontSize: '20px',
      fontWeight: 'bold',
    }
      
  return (
    <>
      <div className="containerM">
        <div className="menu">
          <h1 className="g-title">Our Menu</h1>
          <hr className="line" />
          <h1 className="g-store">Sushi Maru</h1>
              
          <Carousel
            data={data}
            time={2000000000}
            width="1200px"
            height="600px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            // automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "1200px",
              maxHeight: "600px",
              margin: "0 auto",
            }}
          /> 
        </div>

        <div className="notice-con">
            <p className="notice">All items & prices are <strong>subject to change without notice.</strong></p> 
            <p className="notice bottom"> Please advise your server of food allergies.
            Please do not eat or use decorative fire</p>   
        </div>
      </div> 
    </>
  )
}

export default Menu;
