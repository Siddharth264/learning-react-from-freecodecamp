import './App.css';
import Navbar from './components/Navbar';
import GridImage from './components/GridImage';
import Experiences from './components/Experiences';
import CardsSection from "./components/CardsSection";
function App() {

  return (
    <div className="App">
      <Navbar/>
      <GridImage/>
      <Experiences/>
      <CardsSection/>
    </div>
  );
}

export default App;
