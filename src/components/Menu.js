import React from "react";
import '../styles/menu.css';
import { Carousel } from 'react-carousel-minimal';

import m1 from '../assets/images/m1.jpg';
import m2 from '../assets/images/m2.jpg';
import m3 from '../assets/images/m3.jpg';
import m4 from '../assets/images/m4.jpg';
import m5 from '../assets/images/m5.jpg';


const Menu = () => {
  const data = [
      {
          image: m1,
          caption: 'Appetizers'
      },
      {
          image: m2,
          caption: 'Sushi'
      },
      {
          image:m4,
          caption: 'Noodle'
      },
      {
        image: m3,
        caption: 'Drinks'
    },
    {
        image: m5,

        caption: 'Only For Takeout'
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
          <h1 className="m-title">Our Menu</h1>
          <hr className="line" />
          <h1 className="m-store">Sushi Maru</h1>
              
          <Carousel
            data={data}
            time={2000000000}
            width="800px"
            height="900px"
            captionStyle={captionStyle}
            // radius="10px"
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
            thumbnailWidth="50px"
            style={{
              textAlign: "center",
              maxWidth: "700px",
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
