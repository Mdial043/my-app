import React from 'react'
import DogAPI from './DogAPI'
import Rating from './Rating'
import  './RatingStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    

    // Check si l'app run
    React.useEffect(()=> {
        console.log("App is running")
    },[])

    return (
        <>
       
            <DogAPI/>
            
        </>
    )
}



/*<div id= "img-box">
<img id = "cat-image"><br>
<button id= 
"new-cat-btn">New Random Cat</button>
</div>*/
export default App;
