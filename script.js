const slideRed = document.querySelector('#slide-red')
const redNumber= document.querySelector('#red-number')
const slideGreen = document.querySelector('#slide-green')
const greenNumber = document.querySelector('#green-number')
const slideBlue = document.querySelector('#slide-blue')
const blueNumber = document.querySelector('#blue-number')


let red = slideRed.value
let green = slideGreen.value
let blue = slideBlue.value

redNumber.innerText = red
greenNumber.innerText = green
blueNumber.innerText = blue


function updateColor(red, green, blue) {
    let colorRGB = `rgb(${red}, ${green}, ${blue})`
    document.body.style.backgroundColor = colorRGB
}

slideRed.addEventListener('change', (e) => {
    red = e.target.value
    redNumber.innerText = red
    updateColor(red, green, blue)
})

slideGreen.addEventListener('change', (e) => {
    green = e.target.value
    greenNumber.innerText = green
    updateColor(red, green, blue)
})

slideBlue.addEventListener('change', (e) => {
    blue = e.target.value
    blueNumber.innerText = blue
    updateColor(red, green, blue)
})