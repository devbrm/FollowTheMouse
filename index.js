


const debounce = (fn, delay) => {
  let timerID
  return function(...args) {
    
    if(timerID) clearTimeout(timerID)
    
    timerID = setTimeout(() => {
      return fn(...args)
    }, delay)
  }
}


function animate(e) {
  const {clientX: cx, clientY: cy} = e;
  const {offsetLeft: ox, offsetTop: oy} = emoji;
  let [x, y] = [ox - (cx - 96), oy - (cy - 32)]
  
  x = x/2
  y = y/2
  
  
  emoji.style.textShadow = `
  ${x*1.1}px ${y*1.1}px rgb(${arr[0]}, ${arr[1]}, ${arr[2]}) ,
  ${-x*1.2}px ${-y*1.4}px rgb(${arr[3]}, ${arr[4]}, ${arr[5]}) ,
  ${-x*1.5}px ${y*1.2}px rgb(${arr[6]}, ${arr[7]}, ${arr[8]}) ,
  ${x*1.4}px ${-y*2}px rgb(${arr[9]}, ${arr[10]}, ${arr[11]}) 
  `
}


const changeColor = debounce( () => {
  arr = arr.map ( x => Math.floor(Math.random()* 256) ) 
  console.log("object");
}, 100 )



let arr = new Array(12).fill(255)
const emoji = document.querySelector(".emoji")
const container = document.querySelector(".container")
container.addEventListener("mousemove", animate )
container.addEventListener("touchmove", animate )
container.addEventListener("touchstart", animate )

container.addEventListener("mousemove", changeColor )
container.addEventListener("touchmove", changeColor )
container.addEventListener("touchstart", changeColor )