// Function to get food&drinks recommendations and display images when the user enter temperature in food.html .
function getFoodDrinkRecommendations() {
    const temperature = parseInt(document.getElementById('temperatureInput').value)
    let recommendation = ''
    let images = ''

    // Set recommendations and images based on different temperature ranges.
    if (temperature >= 25) {
        recommendation = "Recommended food & drinks: Ice Cream, Iced Coffee, Fresh Salads, Smoothies."
        images = `
            <div class="image-container">
                <img src="store/images/food1.jpg" alt="Ice Cream" class="food-image">
                <img src="store/images/food2.jpg" alt="Iced Coffee" class="food-image">
                <img src="store/images/food3.jpg" alt="Fresh Salad" class="food-image">
                <img src="store/images/food4.jpg" alt="Smoothie" class="food-image">
            </div>
        `
    } 

    else if (temperature >= 10 && temperature < 25) {
        recommendation = "Recommended food & drinks: Hot Beverages, Pasta, Fruits, Noodle."
        images = `
            <div class="image-container">
                <img src="store/images/food5.jpg" alt="Hot Beverage" class="food-image">
                <img src="store/images/food6.jpg" alt="Pasta" class="food-image">
                <img src="store/images/food7.jpg" alt="Fruits" class="food-image">
                <img src="store/images/food8.jpg" alt="Noodle" class="food-image">
            </div>
        `
    }

    else {
        recommendation = "Recommended food & drinks: Hot Soups, Spicy Foods, Herbal Teas, Oats."
        images = `
            <div class="image-container">
                <img src="store/images/food9.jpg" alt="Hot Soup" class="food-image">
                <img src="store/images/food10.jpg" alt="Spicy Food" class="food-image">
                <img src="store/images/food11.jpg" alt="Herbal Tea" class="food-image">
                <img src="store/images/food12.jpg" alt="Oats" class="food-image">
            </div>
        `
    }

    // Display the recommendation text and images on the website. 
    document.getElementById('foodDrinkOutput').innerHTML = recommendation + images
}

