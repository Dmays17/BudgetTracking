import React from 'react'
import axios from 'axios'
import {useEffect} from 'react'
import{useState} from 'react'
import '../App.css';
function Home(){

    const [items,setItems]=useState([])

    useEffect(()=>{
        const fecthAllItems=async()=>{
            try{
                const res=await axios.get("http://localhost:3001/budget")
                setItems(res.data)
                
            }catch(err){
                console.log(err)
            }

        }
        fecthAllItems()
    },[])

    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log("you submited")
      }
    return(
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
      <div>
          {items.map((items) => (
            <div key={items.id}>
              <h2>{items.Items}</h2>
              
            </div>
          ))}
        </div>
     </div>
     
     </div>

    )
}
export default Home