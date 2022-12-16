import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.scss';
import Popup from './components/popup/Popup'
import Header from './components/header/Header'
import About from './pages/about/About'
import Dinein from './pages/menu/Dinein'
import Takeout from './pages/menu/Takeout'
import Lunch from './pages/menu/Lunch'
import Footer from './components/footer/Footer';

function App() {
  const [timedPopup, setTimedPopup] = useState(false);


  // useEffect(() => {
  //   setTimeout(() => {
  //     setTimedPopup(true);
  //   }, 1000)
  // }, []);

  return (
    <div className="App">  
      <Popup trigger={timedPopup} setTrigger={setTimedPopup} />
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<About />}/>
        <Route path='/dinein' exact element={<Dinein/>}/>
        <Route path='/takeout' exact element={<Takeout />}/>
        <Route path='/lunch' exact element={<Lunch />}/>
        {/* <Route path='/gallery' exact element={<Gallery />}/> */}
      </Routes>  
      </BrowserRouter>   
      <Footer />
    </div>
  );
}

export default App;
