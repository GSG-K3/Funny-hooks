import React ,{ useState, useEffect } from "react";
import axios from 'axios' ;

const HomePage = () => {
  const {catigory, setCatigory} = useState('')
  const {jokes , setJokes} = useState('')

  useEffect = ()=>{

    axios.get("https://sv443.net/jokeapi/v2/joke/Any")
    .then(Response => {
      console.log(Response)
    })
    .catch(error => {
      console.log(error)
    })
  }
 
const handleCheckClick =(e)=> {
const catigory = e.target.name

}


  return (
  <div>
  <h1>funny hooks</h1>
  <p>your daily dose of jokes</p>
  <h1>chose your catigory</h1>
  <input type="checkbox" id="1" name="programming" value="programming" checkCheckBox={handleCheckClick} />
  <label>programming</label>
  <input type="checkbox" id="2" name="Miscellaneous" value="Miscellaneous"/>
  <label>Miscellaneous</label>
  <input type="checkbox" id="3" name="Dark" value="Dark"/>
  <label >Dark</label>
  <input type="checkbox" id="4" name="Any" value="Any"/>
  <label>Any</label>
  
  <h1> here we go !</h1>
  <section></section>
  </div>
)
}
export default HomePage;