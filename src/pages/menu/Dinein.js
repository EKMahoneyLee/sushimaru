import React, {useState} from "react";
import AnimateHeight from 'react-animate-height'

import './dinein.scss';
import DineInData from './DineInData';

const Dinein = () => {  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [item, setItem] = useState(DineInData);
  const menuItems = [...new Set(DineInData.map((Val) => Val.category))];

  const next = () => {
     setCurrentIndex((currentIndex + 1) % item.length);
  };

  const prev = () => {
     setCurrentIndex((currentIndex - 1 + item.length) % item.length);
  };

  const filterItem = (category) => {
    const newItem = DineInData.filter(newVal => newVal.category === category);
    setItem(newItem);
  };

  const [showResults, setShowResults] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="dinein" id="top">
        <div className="top">
          <h3 className="dinein-title">Dine In</h3>
          <p >Spice level can be adjusted for Noodle, Yaki-Udon and Maru Don Special</p>
          <p >Substitute soy sheet $1.00/Extra sauce $1.00/Extra rice $2.50</p>
          <p >Prices are subject to change without notice</p>
          <h6>Please speak to a member of our staff about the allergies before placing orders</h6>
        </div>

        <div className="sort">
          <button
              className="open-category"
              onClick={() => setIsOpen(!isOpen)}
            >By Category
          </button>
          <AnimateHeight height={isOpen ? 'auto' : 0}>
            <div className="category-mobile">
              {menuItems.map((Val, id) => {
                return (
                  <button
                    className={`btn ${Val === 'Appetizers' ? 'active' : ''}}`}
                    key={id}
                    onClick={() => {filterItem(Val); setShowResults(false);}}
                  >{Val}</button>
                );})}
              <button
                className="btn all-btn"
                onClick={() => {setItem(DineInData); setShowResults(true);}}
              > All </button>
            </div>
          </AnimateHeight>
          <div className="category">
            {menuItems.map((Val, id) => {
              return (
                <button
                  className={`btn ${Val === 'Appetizers' ? 'active' : ''}}`}
                  key={id}
                  onClick={() => {filterItem(Val); setShowResults(false);}}
                >{Val}</button>
              );})}
            <button
              className="btn all-btn"
              onClick={() => {setItem(DineInData); setShowResults(true);}}
            > All </button>
          </div>
        </div>
    
        <div className="items">
          {item.length > 0  && item.map((dinein) => (
            <div key={dinein.id} className="item">
              <div className="title">
                <h4> {dinein.title} </h4>
                <p>{dinein.price}</p>
              </div>
              <div>
                <p>{dinein.desc}</p>
                <p>{dinein.desc1}</p>
                <p>{dinein.desc2}</p>
                <p>{dinein.desc3}</p>
              </div>
            </div>
          ))}
        </div> 
        {showResults? null : 
        <button
            className="open-Images"
            onClick={() => setIsOpen(!isOpen)}>See Images
        </button>}
        <AnimateHeight height={isOpen ? 'auto' : 0}>
          {showResults? null : 
            <div className="item-img">
              {item.length > 0  && item.map((dinein) => (
                dinein.img? <div className="img-container" key={dinein.id}><img src={dinein.img} alt={dinein.title} />{dinein.title}</div>: null
              ))}      
          </div>}
        </AnimateHeight>
       
        {showResults? <button className="to-top"><a href="#top">To the Top</a></button> : null} 
      </div>
{/*       
      <div className="gallery">
        <div className='slider-container'>
          {item.length > 0 && item.map((photo) => (
              photo.img? 
            <div
              key={photo.id}
              className={
                item[currentIndex].id === photo.id ? 'fade' : 'slide fade'
              }
            >
              <img src={photo.img} alt={photo.alt} className='photo' />
              <div className='caption'>{photo.title}</div>
            </div> : null
          ))}

          <div className='dots'>
            {item.map((photo) => (
                    photo.img? 
              <span
                key={photo.id}
                className={
                  item[currentIndex].id === photo.id ? 'dot active' : 'dot'
                }
                onClick={() => setCurrentIndex(item.indexOf(photo))}
              ></span> : null
            ))}
          </div> 



          <button onClick={prev} className='prev'>
            &lt;
          </button>
          <button onClick={next} className='next'>
            &gt;
          </button>
        </div>
      </div> */}
    </>
  )
}

export default Dinein;
