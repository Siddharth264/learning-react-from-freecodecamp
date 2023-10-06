import './App.css';
import Navbar from './components/Navbar';
import GridImage from './components/GridImage';
import Experiences from './components/Experiences';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <GridImage/>
      <Experiences/>
      <Card
        img = 'Katie.png'
        rating = {5}
        numOfReviews = {6}
        country = 'USA'
        title = 'Life lessons with Katie Zaferes'
        price = {100}  
      />
    </div>
  );
}

export default App;
