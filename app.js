const button = document.getElementById("get_location");

async function getLoc(position) {
    const result = await getData(position.coords.latitude, position.coords.longitude);
    console.log(result);
}

function notGetLoc() {
    console.log("not get the location ");

}

async function getData(lat, long) {
    const promise = await fetch (
        `http://api.weatherapi.com/v1/current.json?key=34a629a087cd460cbfb123641240411&q=${lat},${long}&aqi=yes` 
    );
    return await promise.json();
}

button.addEventListener("click", async () => {
    navigator.geolocation.getCurrentPosition(getLoc, notGetLoc)
}
)