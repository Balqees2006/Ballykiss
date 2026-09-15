const input = document.querySelector("#input")
const search = document.querySelector("#search")
const city = document.querySelector("#city")
const weathericon = document.querySelector("#weatherIcon")
const degree = document.querySelector("#degree")
const degree2 = document.querySelector("#degree2")
const icon2 = document.querySelector("#icon2")
const kilometer = document.querySelector("#kilometer")
const icon = document.querySelector("#icon")
const rain = document.querySelector("#rain")
const apikey ="ff708158a8de4047ba2143144260709"
// ...............................................
function inputScreen() {
    input.value ="";
}
async function fetchData() {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${input.value}&aqi=no`);
        if (response.status === 200){
            const data = await response.json();
            console.log(data);
            city.innerHTML = data.location.name
            degree.innerHTML = data.current.temp_c
            sun.innerHTML = data.current.condition.text
            degree2.innerHTML = data.current.humidity
            kilometer.innerHTML = data.current.wind_kph


        }


    } catch (error) {
        console.log(error)
    }

}

search.addEventListener("click", () => {
    fetchData()
})