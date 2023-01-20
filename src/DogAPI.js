import React from 'react'

export default function DogAPI() {
    
  
    const dogImage = document.getElementById('dog-img');
    const dogButton = document.getElementById('btn-dog');
      
   
    dogButton.addEventListener('click', fetchDogImage);
    function fetchDogImage() {
        fetch('https://dog.ceo/api/breeds/image/random')
          .then(response => response.json())
          .then(data => {
            dogImage.innerHTML = `<img src="${data.message}"/>`;
        }) 
      }
          
         
  return (
      <>


 <div class='header'>
  <h1>Random Image Generator!</h1>
</div>
<div class="container">
  <div class='images'>
    <div id='dog-img'>
      <p>Placeholder Image</p>
    </div>
     
  </div>

  <div class='buttons'>
    <button id='btn-dog'>Random DOG!</button> 
   
  </div>   
</div>

 


   </>
  )
   
}
