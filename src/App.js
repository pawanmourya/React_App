// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="WoodPecker Solutions" />
      <div className="container my-3">
        <TextForm heading="Structure - Testing is on the wayy!" />
      </div>
      <div className="container my-5">
        <About />
      </div>
    </>
  );

}

export default App;
