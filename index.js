const button = document.getElementById("button")
const activity = document.getElementById("activity")

button.addEventListener("click", function() {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => renderActivity(data))
})

function renderActivity(data) {
    activity.innerText = data.activity
}