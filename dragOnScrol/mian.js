let mousePosition
let startX
let isMouseDown
const mousePositionElement = document.getElementById('mouse-position')
const parentDistance = document.getElementById('parent-distance')

const container = document.querySelector('.container')
container.addEventListener('mousedown', (e) => {
    isMouseDown = true
    mousePosition = e.pageX //position of the mouse including the distance to the parent
    parentDistance.textContent = container.offsetLeft
    startX = e.pageX - container.offsetLeft
    mousePositionElement.textContent = startX
})

container.addEventListener('mouseup', () => {
    isMouseDown = false
})
container.addEventListener('mousemove', (e) => {
    if(!isMouseDown) return
    let walk = e.pageX - container.offsetLeft
    console.log('walk', walk);
    parentDistance.textContent = walk - startX
    container.scrollLeft = walk
})