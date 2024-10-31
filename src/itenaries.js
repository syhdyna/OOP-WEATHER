// Function to fetch current temperature and weather description based on destination .
function fetchWeather(destination) {
    const apiKey = '38ab9bfbefc9405cb2e33252241410'
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${destination}`

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const temperature = data.current.temp_c
            const weatherDescription = data.current.condition.text

            document.getElementById("displayWeather").innerText = `${temperature} °C`
            document.getElementById("displayDescription").innerText = weatherDescription
        })
}

// CREATE PROCESS: Declares an empty object . 
let currentItinerary = {}

// Function to display itinerary details .
function displayItinerary() {
    const name = document.getElementById("name").value
    const phone = document.getElementById("phone").value
    const destination = document.getElementById("destination").value
    const startDate = document.getElementById("startDate").value
    const endDate = document.getElementById("endDate").value
    const hotelName = document.getElementById("hotelName").value
    const checkInTime = document.getElementById("checkInTime").value
    const checkOutTime = document.getElementById("checkOutTime").value
    const activities = document.getElementById("activities").value
    const budget = document.getElementById("budget").value

    // Now currentItinerary is not empty . 
    currentItinerary = {
        name,
        phone,
        destination,
        startDate,
        endDate,
        hotelName,
        checkInTime,
        checkOutTime,
        activities,
        budget
    }

    // Display itinerary details .
    document.getElementById("displayName").innerText = name
    document.getElementById("displayPhone").innerText = phone
    document.getElementById("displayDestination").innerText = destination
    document.getElementById("displayStartDate").innerText = startDate
    document.getElementById("displayEndDate").innerText = endDate
    document.getElementById("displayHotelName").innerText = hotelName
    document.getElementById("displayCheckInTime").innerText = checkInTime
    document.getElementById("displayCheckOutTime").innerText = checkOutTime
    document.getElementById("displayActivities").innerText = activities
    document.getElementById("displayBudget").innerText = budget

    // Fetch and display weather data .
    fetchWeather(destination)

    // Make the itinerary details visible to the user .
    document.getElementById("displayItinerary").style.display = "block"

    // Alert for successful "CREATE" .
    alert("Successfully created the itinerary !")
}


// UPDATE PROCESS : Function to EDIT the itinerary .
function editItinerary() {
    document.getElementById("name").value = currentItinerary.name
    document.getElementById("phone").value = currentItinerary.phone
    document.getElementById("destination").value = currentItinerary.destination
    document.getElementById("startDate").value = currentItinerary.startDate
    document.getElementById("endDate").value = currentItinerary.endDate
    document.getElementById("hotelName").value = currentItinerary.hotelName
    document.getElementById("checkInTime").value = currentItinerary.checkInTime
    document.getElementById("checkOutTime").value = currentItinerary.checkOutTime
    document.getElementById("activities").value = currentItinerary.activities
    document.getElementById("budget").value = currentItinerary.budget
}


// Function to UPDATE the itinerary details .
function updateItinerary() {

    // Fetch updated values from user input . 
    const name = document.getElementById("name").value
    const phone = document.getElementById("phone").value
    const destination = document.getElementById("destination").value
    const startDate = document.getElementById("startDate").value
    const endDate = document.getElementById("endDate").value
    const hotelName = document.getElementById("hotelName").value
    const checkInTime = document.getElementById("checkInTime").value
    const checkOutTime = document.getElementById("checkOutTime").value
    const activities = document.getElementById("activities").value
    const budget = document.getElementById("budget").value

    // Update current itinerary with new values .
    if (name) currentItinerary.name = name
    if (phone) currentItinerary.phone = phone
    if (destination) currentItinerary.destination = destination
    if (startDate) currentItinerary.startDate = startDate
    if (endDate) currentItinerary.endDate = endDate
    if (hotelName) currentItinerary.hotelName = hotelName
    if (checkInTime) currentItinerary.checkInTime = checkInTime
    if (checkOutTime) currentItinerary.checkOutTime = checkOutTime
    if (activities) currentItinerary.activities = activities
    if (budget) currentItinerary.budget = budget

    document.getElementById("displayName").innerText = currentItinerary.name
    document.getElementById("displayPhone").innerText = currentItinerary.phone
    document.getElementById("displayDestination").innerText = currentItinerary.destination
    document.getElementById("displayStartDate").innerText = currentItinerary.startDate
    document.getElementById("displayEndDate").innerText = currentItinerary.endDate
    document.getElementById("displayHotelName").innerText = currentItinerary.hotelName
    document.getElementById("displayCheckInTime").innerText = currentItinerary.checkInTime
    document.getElementById("displayCheckOutTime").innerText = currentItinerary.checkOutTime
    document.getElementById("displayActivities").innerText = currentItinerary.activities
    document.getElementById("displayBudget").innerText = currentItinerary.budget

    // Fetch and display updated weather data
    fetchWeather(currentItinerary.destination)

    // Alert for successful "UPDATE" .
    alert("Successfully updated the itinerary !")
}


// READ PROCESS : Function to read the itinerary details .
function readItinerary() {
    alert("Successfully read the itinerary !\n\n" +
        `Name: ${currentItinerary.name}\n` +
        `Phone: ${currentItinerary.phone}\n` +
        `Destination: ${currentItinerary.destination}\n` +
        `Start Date: ${currentItinerary.startDate}\n` +
        `End Date: ${currentItinerary.endDate}\n` +
        `Hotel Name: ${currentItinerary.hotelName}\n` +
        `Check-in Time: ${currentItinerary.checkInTime}\n` +
        `Check-out Time: ${currentItinerary.checkOutTime}\n` +
        `Activities: ${currentItinerary.activities}\n` +
        `Budget: ${currentItinerary.budget}`)
}


// DELETE PROCESS : Function to delete the itinerary .
function deleteItinerary() {
    currentItinerary = {}

    // Clear displayed fields
    document.getElementById("displayName").innerText = ''
    document.getElementById("displayPhone").innerText = ''
    document.getElementById("displayDestination").innerText = ''
    document.getElementById("displayStartDate").innerText = ''
    document.getElementById("displayEndDate").innerText = ''
    document.getElementById("displayHotelName").innerText = ''
    document.getElementById("displayCheckInTime").innerText = ''
    document.getElementById("displayCheckOutTime").innerText = ''
    document.getElementById("displayActivities").innerText = ''
    document.getElementById("displayBudget").innerText = ''
    document.getElementById("displayWeather").innerText = ''
    document.getElementById("displayDescription").innerText = ''

    document.getElementById("displayItinerary").style.display = "none"

    // Alert for successful "DELETE" .
    alert("Successfully deleted the itinerary !")
}


// Add event listeners to the buttons . 
document.getElementById("btnCreate").addEventListener("click", displayItinerary)
document.getElementById("btnEdit").addEventListener("click", editItinerary)
document.getElementById("btnUpdate").addEventListener("click", updateItinerary)
document.getElementById("btnRead").addEventListener("click", readItinerary)
document.getElementById("btnDelete").addEventListener("click", deleteItinerary)

