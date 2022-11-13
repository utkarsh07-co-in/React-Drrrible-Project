import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <nav>  <h3><p>BLITZ <div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">SERVICES</button>
  
 </div> <div id="myDropdown" class="dropdown-content">
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
  </div>
  
  <div><button onclick="myFunction()" class="dropbtn">PROJECTS</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
  </div>
</div>  ABOUT</p></h3></nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>They are very proactive & work to make your product even better.</p><h1>''</h1><h3>NETFLIX</h3>
        <p>
          <h4>The most experinces sppecialised team across the industry.</h4> 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Work with us
        </a>
        <p><h1>3D</h1></p><p><h1>*</h1></p>
      </header>
    </div>
  );
}

export default App;
