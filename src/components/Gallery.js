import React from "react";
import '../styles/gallery.css';


const Gallery = () => {
  return (
    <>
        <div className="containerG">
            <div>
              <h1 className="g-title">Our Gallery</h1>
              <hr className="line" />
              <h1 className="g-store">Sushi Maru</h1>
            </div>

            <div className="row">
              <a href="google.com"><div className="column f-img">Appetizers Soup/Salad</div></a>
              <a href="google.com"><div className="column s-img">Lunch/Dinner/Maru Sushi Party</div></a>
              <a href="google.com"><div className="column t-img">Sushi Roll/Nigiri Sushi/Sashimi</div></a>
              <a href="google.com"><div className="column fo-img">Ramen/Yaki-Udon/Soba</div></a>
              <a href="google.com"><div className="column fi-img">Soup/Salad/Drinks</div></a>
              <a href="google.com"><div className="column si-img">Takeout Only Menu</div></a>
            </div>
        </div> 
    </>
  )
}

export default Gallery;
