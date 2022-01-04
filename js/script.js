//Choose a random color
const button = document.querySelector('button')
const container = document.querySelector('.container')
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

container.style.backgroundColor = 'violet'
button.addEventListener('click', changeBackground)

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length)
container.style.backgroundColor = colors[colorIndex]
}


