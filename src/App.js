import './App.css';
import Popup from './components/Popup'
import Navbar from './components/Navbar'
import About from './components/About'
import Gallery from './components/Gallery'
import Gallery1 from './components/Gallery1'
import Menu from './components/Menu'
import Menu1 from './components/Menu1'
import Footer from './components/Footer';

import { useState, useEffect } from 'react';

function App() {
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 1000)
  }, []);

  return (
    <div className="App">  
      <Popup trigger={timedPopup} setTrigger={setTimedPopup} />
      <Navbar />     
      <About />
      <Gallery1 />
      <Menu />
      <Menu1 />
      <Footer />
    </div>
  );
}

export default App;
