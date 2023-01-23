import React from 'react'
import {FaStar} from "react-icons/fa";
import Rating from './Rating'
export default function DogAPI() {

    const [dog, setDog] = React.useState(null)
    const [dogArray, setDogArray] = React.useState([])

  
    // Se lance au debut de l'ouverture du fichier
    React.useEffect(()=> {
        console.log("Dog is running")
       
    },[])

    // Fait l'appel pour retourner l'image
    function fetchDogImage() {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                setDog(data.message)
                setDogArray(prevDogArray => [...prevDogArray,data.message])
            }).then(showList)
    }

    async function showList () {
        await console.log(dogArray)
    }

    return (
        <>
            <div className='header'>
                <h1>Random Image Generator!</h1>
            </div>
            <div className="container">
                <div className='images'>
                    <img src={dog} placeholder="Image of a dog"/>
                </div>

                <div className='buttons'>
                    <button id='btn-dog'
                    onClick={fetchDogImage}
                    >
                        Random DOG!
                    </button>
                   {dog && <Rating/>}
             
                </div>
            </div>
        </>
    )

}
