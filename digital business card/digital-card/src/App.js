import './App.css';
import Info from './components/Info';
import Contacts from './components/Contacts';
import About from './components/About';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <div className='container'>
        <Info/>
        <Contacts/>
        <About/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
