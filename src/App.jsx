import { useState } from "react"


function App(){
let [number, setNumber] = useState(0);

function increment (){
  setNumber (number + 1);
}

function decrement (){
  if (number !==0)
  setNumber (number - 1);
}

function IncrementBy5 (){
  setNumber (number + 5)
}

function decrementBy5 (){
  if(number <= 4){
    // reset ()
     setNumber (0)
  }
  else {
  setNumber (number - 5)
  }
}

function reset (){
  setNumber (0);
}

  return (
    <>

  <div className="Headingdiv">
    <h1>Count: {number} </h1>
    </div>

  <div className="Buttondiv">
    <button  onClick={increment}>Increment</button>
    <button  onClick={decrement}>Decrement</button>
    <button  onClick={IncrementBy5}>Increment By 5</button>
    <button  onClick={decrementBy5}>Decrement By 5</button>
    <button  onClick={reset}>Reset</button>
  </div>
  </>
  )
}

export default App;


