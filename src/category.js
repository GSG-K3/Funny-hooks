import React, { useState, useEffect } from "react";

  const Category = () => {
const [Joke, setJoke] = useState([]);
const[category , setCategory] = React.useState({
    
    hooks: false
});

const handleChange =(event)=>{
    setCategory(event.target.value);
  }
useEffect(
    () => {
      if(category)
    fetch(`https://sv443.net/jokeapi/v2/joke/${category}`)
    .then(response => response.json())
    .then(data => {
      if(data.joke)
    setJoke(data.joke);
    else
  setJoke(`-${data.setup} -${data.delivery}`)
    console.log(data) 
    });
    },
    [category] // componentDidMount
    );
    return (
        <div>
        <div onChange={handleChange}>
         <input type='checkbox' value='Programming'  checked={category.hooks}/> 
         Programming
         <input type='checkbox' value='Any'  checked={category.hooks}/> 
        Any
        <input type='checkbox' value='Miscellaneous'  checked={category.hooks}/> 
        Miscilleneous
        <input type='checkbox' value='Dark'  checked={category.hooks}/> 
        Dark
          
          
          </div> 
        
    
    
    <p>{Joke}</p>
    
         
        </div>
      );
    };
    export default Category;  