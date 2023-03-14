
import './App.css';
 import Home from './pages/Home.js'
 import Add from './pages/Add.js'
 import Update from './pages/Update';
 
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
 
  return (
    <div className="App">
     
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Add/>}/>
        <Route path="/" element={<Update/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
