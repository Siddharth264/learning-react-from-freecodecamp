import './App.css';
import Navbar from './components/Navbar';
import GridImage from './components/GridImage';
import Experiences from './components/Experiences';
import Card from './components/Card';
import data from './assets/data';

function App() {
  const cardElements = data.map((card)=> {
    return( 
    <Card 
    key = {card.id}
    card = {card}      
    />)
  })
  return (
    <div className="App">
      <Navbar/>
      <GridImage/>
      <Experiences/>
      <div className='cardssection'>
        {cardElements}
      </div>
      
    </div>
  );
}

export default App;
