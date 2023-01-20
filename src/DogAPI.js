import React from 'react'

export default function DogAPI() {

    const [dog, setDog] = React.useState(null)
    const [dogbtn, setDogBtnState] = React.useState(true)

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
            })
    }


    return (
        <>
            <div class='header'>
                <h1>Random Image Generator!</h1>
            </div>
            <div class="container">
                <div class='images'>
                    <img src={dog} placeholder="Image of a dog"/>
                </div>

                <div class='buttons'>
                    <button id='btn-dog'
                    onClick={fetchDogImage}
                    >
                        Random DOG!
                    </button>

                </div>
            </div>
        </>
    )

}
