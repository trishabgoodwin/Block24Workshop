import { useState } from "react";
import {puppyList} from "./data.js"

function App() {

  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  console.log("puppyList:", featPupId)
  return (
    <>
    {featPupId && (
      <h1>{featPupId}</h1>
    )}
    <div className="App">
      {
        puppies.map((puppy) => {
             return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>;
           })

       }
    </div>
    </>
  );
}

export default App
