import logo from '../../logo.svg';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import Formats from '../Formats/Formats'
import './App.css';
import About from '../About/About';
import How from '../How/How';
import Gallery from '../Gallery/Gallery';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="page">
      <Header />
      <Intro />
      <Formats />
      <About />
      <How />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
