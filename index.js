const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

const lengthRes = document.getElementById("lengthResult")
const volumeRes = document.getElementById("volumeResult")
const massRes = document.getElementById("massResult")

const LengthBtn = document.getElementById("convertLength-btn")
const VolumeBtn = document.getElementById("convertVolume-btn")
const MassBtn = document.getElementById("convertMass-btn")


LengthBtn.addEventListener("click", function(){
    const lengthMeterCalc = lengthEl.value * 3.28084
    const lengthFeetCalc = lengthEl.value / 3.28084
    lengthRes.innerHTML = `
        <p style="font-size:15pt; margin-top:-20px">
        ${lengthEl.value} meter(s) = ${Number(lengthMeterCalc).toFixed(3)} feet 
        | ${lengthEl.value} feet = ${Number(lengthFeetCalc).toFixed(3)} meter(s)
        </p>
    `
})

VolumeBtn.addEventListener("click", function(){
    const volumeLitersCalc = volumeEl.value / 3.78541
    const volumeGallCalc = volumeEl.value * 3.78541
    volumeRes.innerHTML = `
        <p style="font-size:15pt; margin-top:-20px">
        ${volumeEl.value} Liter(s) = ${Number(volumeLitersCalc).toFixed(3)} Gallon(s) 
        | ${volumeEl.value} Gallon(s) = ${Number(volumeGallCalc).toFixed(3)} Liter(s)
        </p>
    `
})

MassBtn.addEventListener("click", function(){
    const massKiloCalc = massEl.value * 2.20462
    const massPoundsCalc = massEl.value * 0.45359237
    massRes.innerHTML = `
        <p style="font-size:15pt; margin-top:-20px"> 
        ${massEl.value} Kilo(s) = ${Number(massKiloCalc).toFixed(3)} Pound(s) 
        | ${massEl.value} Pound(s) = ${Number(massPoundsCalc).toFixed(3)} Kilo(s)
        </p>
    `
})