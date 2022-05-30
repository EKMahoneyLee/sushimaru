import './App.css';
import Navbar from './components/Navbar'
import About from './components/About'
import Gallery from './components/Gallery'
import Menu from './components/Menu'
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">  
      <Navbar />     
      <About />
      <Menu />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
