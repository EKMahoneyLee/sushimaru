import React from "react";
import '../styles/menu1.css';

// import m1 from '../assets/images/m1.jpg';
// import m2 from '../assets/images/m2.jpg';
// import m3 from '../assets/images/m3.jpg';
// import m4 from '../assets/images/m4.jpg';
// import m5 from '../assets/images/m5.jpg';


const Menu1 = () => {   
  return (
    <div className="containerM1">
      <article>
      <h1 className="m-title">The Menu</h1>
      <hr/>
        <div id="panels">
            <input id="appetizer" type="radio" name="panel_select"  />
            <input id="noodle" type="radio" name="panel_select"  checked readOnly/>
            <input id="takeout" type="radio" name="panel_select"  />
            
            <nav>
              <label htmlFor="appetizer">Appetizer</label>
              <label htmlFor="noodle">Noodel</label>
              <label htmlFor="takeout">Takeout</label>
            </nav>
            <div id="panel1">
              <p>Appetizer</p>
            </div>
            <div id="panel2">
              <div>
                <div className="price">
                  <p>Noodel</p>
                  <p> ----------</p>
                  <p> 3.99</p>
                </div>
                <p>this is the noodle with veg and beef</p>
              </div>

              <div>
                <div className="price">
                  <p>Udon</p>
                  <p> ----------</p>
                  <p> 4.99</p>
                </div>
                <p>this is the noodle with veg and beef</p>
              </div>

              <div>
                <div className="price">
                  <p>Noodel</p>
                  <p> ----------</p>
                  <p> 5.99</p>
                </div>
                <p>this is the noodle with veg and beef</p>
              </div>
              </div>
              <div>
              <p>Noodel<span> ---------- 3.99</span></p>
              <p>Udon<span> ------------ 3.99</span></p>
              <p><span> ---------- 3.99</span></p>
             
            </div>
            <div id="panel3">
              <p>Takeout</p>
            </div>
        </div>
      </article>
    </div> 
  )
}

export default Menu1;
