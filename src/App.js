import './App.css';
import Popup from './components/Popup'
import Main from './components/Main'
import About from './components/About'
import Menu from './components/Menu'
import Contact from './components/Contact'
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
      <Main />     
      <About />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
