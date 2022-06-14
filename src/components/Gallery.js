import React from "react";
import '../styles/gallery.css';
import data from './menulist';

class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <div className='containerG'>
        <div>
            <h1 className="g-title">The Gallery</h1>
            <hr className="line" />
        </div>
        {data.map((item, i) => 
          <button key={i} calssname="popup_original" onClick={this.togglePopup.bind(this)}>
            <img src={item.image} width="350" height="350" alt="no-images" />
            <div className="bottom-left"> { item.caption } </div>
          </button>
        )}
      </div>
    );
  }
};

export default Gallery;
