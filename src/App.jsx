import { useState } from "react";
import {puppyList} from "./data.js"
import './index.css'

function App() {

  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)

  console.log("puppyList:", featPupId)
  console.log(featuredPup)
  return (
    <>
    {featPupId && (
      <div className="selectedPup">
      <h1>{featuredPup.name}</h1>
      <ul>
        <li><strong>Age: </strong> {featuredPup.age}</li>
        <li><strong>Email: </strong> {featuredPup.email}</li>
      </ul>
      </div>
    )}
    <div className="App">
      <h2>Click a pup to learn more!</h2>
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
