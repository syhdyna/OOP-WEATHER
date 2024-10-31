// Function to get clothing recommendations and display clothing images when the user enter temperature in clothing.html .
function getRecommendations() {
    var temperature = parseInt(document.getElementById('temperatureInput').value)
    let recommendation = ''
    let images = ''

    // Set recommendations and images based on different temperature ranges.
    if (temperature >= 35) {
        recommendation = "Recommended clothing: Short Jeans, Sleeveless Tops, Tank Tops, Summer Dresses."
        images = `
            <div class="image-container">
                <img src="store/images/baju1.jpg" alt="Short Jeans" class="clothing-image">
                <img src="store/images/baju2.jpg" alt="Sleeveless" class="clothing-image">
                <img src="store/images/baju3.jpeg" alt="Tank Tops" class="clothing-image">
                <img src="store/images/baju4.jpeg" alt="Summer Dress" class="clothing-image">
            </div>
        `
    } 

    else if (temperature >= 21 && temperature <= 34) {
        recommendation = "Recommended clothing: T-shirts, Long sleeves, Jeans, Skirts."
        images = `
            <div class="image-container">
                <img src="store/images/baju5.jpeg" alt="T-Shirt" class="clothing-image">
                <img src="store/images/baju6.jpeg" alt="Long Sleeves" class="clothing-image">
                <img src="store/images/baju7.jpeg" alt="Jeans" class="clothing-image">
                <img src="store/images/baju8.jpeg" alt="Skirts" class="clothing-image">
            </div>
        `
    } 

    else if (temperature >= 5 && temperature <= 20) {
        recommendation = "Recommended clothing: Trench Coat, Leather Jacket, Hoodies, Beanies."
        images = `
            <div class="image-container">
                <img src="store/images/baju9.jpeg" alt="Trench Coat" class="clothing-image">
                <img src="store/images/baju10.jpeg" alt="Leather Jacket" class="clothing-image">
                <img src="store/images/baju11.jpeg" alt="Hoodies" class="clothing-image">
                <img src="store/images/baju12.jpeg" alt="Beanies" class="clothing-image">
            </div>
        `
    } 

    else if (temperature >= 0 && temperature <= 4) {
        recommendation = "Recommended clothing: Puffy Jackets, Fur Coat, Gloves, Scarves."
        images = `
            <div class="image-container">
                <img src="store/images/baju13.jpg" alt="Puffy Jacket" class="clothing-image">
                <img src="store/images/baju14.jpeg" alt="Fur Coat" class="clothing-image">
                <img src="store/images/baju15.jpeg" alt="Gloves" class="clothing-image">
                <img src="store/images/baju16.jpg" alt="Scarves" class="clothing-image">
            </div>
        `
    } 
    else {
        recommendation = "Recommended clothing: Down Jackets, Gloves, Winter Caps, Boots."
        images = `
            <div class="image-container">
                <img src="store/images/baju17.jpg" alt="Down Jackets" class="clothing-image">
                <img src="store/images/baju18.jpg" alt="Gloves" class="clothing-image">
                <img src="store/images/baju19.jpg" alt="Winter Caps" class="clothing-image">
                <img src="store/images/baju20.jpeg" alt="Boots" class="clothing-image">
            </div>
        `
    }

    // Display the recommendation text and images on the website. 
    document.getElementById('recommendationOutput').innerHTML = recommendation + images
}



