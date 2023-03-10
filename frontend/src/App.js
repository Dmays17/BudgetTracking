
import './App.css';

function App() {
  const handlesubmit=(e)=>{
    e.preventDefault();
    console.log("you submited")
  }
  return (
    <div className="App">
     <h1>Track My Budget</h1>

     <div>
      <form onSubmit={handlesubmit}>
      <label htmlFor="Item">Item</label><br/>
      <input type="text" id='Item' name='Item' required></input><br/>
      <label htmlFor="Price">Price</label><br/>
      <input type="number"  min="0.00" max="10000.00" step="0.01"required></input><br/>
      <label htmlFor="Date">Date</label><br/>
      <input type="date" id='Date' name='Date'required></input><br/>
      <input type="submit" value="Add"/>
      </form>
     </div>
    </div>
  );
}

export default App;
