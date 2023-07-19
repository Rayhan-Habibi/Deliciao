import Homepage from './components/Homepage';
import './App.css';
import Intro from './components/Intro';
import Baristas from './components/Baristas';
import Poeple from './components/Poeple';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-[#D4A276] m-10 lg:m-0 md:m-0">
      <Homepage />
      <div className="lg:mx-40 lg:mt-40 lg:mb-20 md:mx-20 md:mt-20 md:mb-10 ">
        <Intro />
        <Baristas />
        <Poeple />
        <Footer />
      </div>
    </div>
  );
}

export default App;
