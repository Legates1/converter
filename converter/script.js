let inputEl = document.getElementById("input-el")
inputEl.oninput = convert
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")


function convert(e){
    let value = Number(e.target.value)
    let metersToFeet =  (value * 3.28084).toFixed(3)
    let feetToMeters = (value * 0.3048).toFixed(3) 
    let litersToGallons = (value *  0.264172).toFixed(3) 
    let gallonsToLiters = (value * 3.785411784).toFixed(3) 
    let kilosToPounds = (value * 2.20462).toFixed(3)
    let poundsToKilos = (value * 0.453592).toFixed(3)


    lengthEl.textContent =  inputEl.value + " meters = " + metersToFeet +" feet | " + inputEl.value + " feet = " + feetToMeters + " meters"
    volumeEl.textContent =  inputEl.value + " liters = " + litersToGallons +" gallons | " + inputEl.value + " gallons = " + gallonsToLiters + " liters"
    massEl.textContent =  inputEl.value + " kilos = " + kilosToPounds +" pounds | " + inputEl.value + " pounds = " + poundsToKilos + " kilos"
}