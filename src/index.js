import './scss/style.scss';

// const sizeInput = document.getElementById('size')
const canvas = document.getElementById('fibonacci')
const ctx = canvas.getContext('2d')

let number = 0
let scale = 16
let size = 10
let angleNumber = .08

canvas.width = window.innerWidth
canvas.height = window.innerHeight

function draw(){
 let angle = number * angleNumber
 let radius = scale * Math.sqrt(number)
 let positionX = radius * Math.sin(angle) + canvas.width / 2
 let positionY = radius * Math.cos(angle) + canvas.height / 2

 ctx.strokeStyle = `rgb(0, 0, 255)`
 ctx.lineWidth = 2

 ctx.beginPath()
 ctx.arc(positionX, positionY, size, 0, Math.PI * 2)
 ctx.closePath()
 ctx.stroke()

 if(size >= 110) return

 number+=0.5
 size+=0.2
}

function animate(){
  draw()
  requestAnimationFrame(animate)
}
animate()

