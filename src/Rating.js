import React, {useState} from 'react'
import {FaStar} from "react-icons/fa";
import './RatingStyle.css'


const Rating= () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  
 
return(

<div> 

{[...Array(15)].map((star, i ) =>  {  
  const ratingValue= i+1;
    return (
    <label>
    <input type = "radio" name="rating" id="rat" value={ratingValue} 
    onClick={()=> setRating(ratingValue)}
    
    />
<FaStar className="star"  color={ratingValue<= (hover || rating) ? "#ffc107" : "#e4e5e9"}  size={15}
onMouseEnter={()=> setHover(ratingValue)}
onMouseLeave={()=>setHover(null)}
/>
    </label>);
  })}

<button onClick={()=>(window.location.reload())}>Submit</button>

</div>
);

};


export default  Rating;
