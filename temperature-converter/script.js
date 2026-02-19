function convertTemp() {

    let degrees = document.getElementById("degrees").value;
    let type = document.getElementById("type").value;
    let result = document.getElementById("result");

    if (degrees === "" || isNaN(degrees)) {
        alert("Enter a valid number");
        return;
    }

    degrees = parseFloat(degrees);

    if (type === "fahrenheit") {
        let celsius = (degrees - 32) * 5/9;
        result.value = celsius.toFixed(4) + " °C";
    } else {
        let fahrenheit = (degrees * 9/5) + 32;
        result.value = fahrenheit.toFixed(4) + " °F";
    }
}
