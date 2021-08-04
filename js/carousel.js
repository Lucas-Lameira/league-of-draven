let container = document.querySelector("#items-container");
let items = document.querySelector("#items");

let isPressed = false;
let startClick;
let scroll;

container.addEventListener('mousedown', (event) => {
  isPressed = true;

  //record the initial click down
  startClick = event.offsetX - items.offsetLeft;  
  container.style.cursor = 'grabbing';
});

container.addEventListener('mouseup', () => {
  isPressed = false;
  container.style.cursor = 'grab';
});

container.addEventListener('mouseleave', () => {
  isPressed = false;
});

container.addEventListener('mousemove', (event)=>{
  if(!isPressed) return;
  
  event.preventDefault();

  scroll = event.offsetX;  
  items.style.left = `${scroll - startClick}px`;  

  boundary();
});

function boundary(){
  let outer = container.getBoundingClientRect();
  let inner = items.getBoundingClientRect();  
  
  if(parseInt(items.style.left) > 0){
    items.style.left = '0px';
  }else if(inner.right < outer.right){
    items.style.left = `-${inner.width - outer.width}px`
  }
};