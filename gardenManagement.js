const temperature = 90;
const timeOfDay = "morning";
let lightStatus 
let soilMoisture = 30;


//conditional statements
if (temperature > 80 ){
    console.log("Watering on");

//if-else statement
} else {
    console.log("Watering off");
}

//time of day lights
if (timeOfDay === "evening") {
    lightStatus = "Lights on";
}
else if (timeOfDay === "night") {
    lightStatus = "Lights on";
}
else {
    lightStatus = "Lights off";
}
console.log (lightStatus);


//loops 
while (soilMoisture < 40) {
    soilMoisture += 5; 
    console.log(soilMoisture);
}
console.log(soilMoisture);
//for loop  

