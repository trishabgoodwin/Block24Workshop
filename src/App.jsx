import { useState } from "react";
import {puppyList} from "./data.js"

function App() {

  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)

  console.log("puppyList:", featPupId)
  console.log(featuredPup)
  return (
    <>
    {featPupId && (
      <div>
      <h1>{featuredPup.name}</h1>
      <ul>
        <li>Age: {featuredPup.age}</li>
        <li>Email: {featuredPup.email}</li>
      </ul>
      </div>
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
