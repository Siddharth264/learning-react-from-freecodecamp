import './App.css';
import Header from './components/Header';
<<<<<<< HEAD
import Entries from './components/Entries';
function App() {

  
  return (
    <div className="App">
      <Header/>
      <Entries/>
=======
import Card from './components/Card';
import Data from './assets/data';
function App() {

  const Entries = Data.map((entry)=> {
    return <Card 
      img = {entry.img}
      location = {entry.location}
      country = {entry.country}
      fromDate = {entry.fromDate}
      toDate =  {entry.toDate}
      description =   {entry.description}
      />
  })
  return (
    <div className="App">
      <Header/>
      {Entries}
>>>>>>> origin/main
    </div>
  );
}

export default App;
