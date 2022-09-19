const drawingCanvas = document.getElementById('canvas'); 
const pickedColor = document.getElementById('picked-color'),
black = document.getElementById('black'),
random = document.getElementById('random'),
erase = document.getElementById('erase'),
reset = document.getElementById('reset'),
sizeInput = document.getElementById('size-input'),
body = document.querySelector('body'),
warningTxt = document.querySelector('.warning'),
inputSizeContainer= document.querySelector('.change-size');
let selectedColor = '';



    //Set grid & div's to canvas
function setSize(boxSize){
    let boxes = drawingCanvas.querySelectorAll('div');
    boxes.forEach(boxDiv => boxDiv.remove())

    drawingCanvas.style.display = `grid`
    drawingCanvas.style.gridTemplateColumns = `repeat(${boxSize}, 1fr)`;
    drawingCanvas.style.gridTemplateRows = `repeat(${boxSize}, 1fr)`;

    const totalBoxes = `${boxSize}` * `${boxSize}`;

    for(let i = 0;i < totalBoxes;i++){
        let box = document.createElement('div'); 
        box.style.backgroundColor = 'rgb(254, 254, 254)'
        box.addEventListener('mouseover', (e) => {e.target.style.backgroundColor = "black"})   
        drawingCanvas.append(box);
    }
}

setSize('16');

//Use input to set box number
function inputSize(){
    
    sizeInput.addEventListener('change',function(e){
        let valueInput = e.target.value;
        if(+valueInput > 1 && +valueInput <= 100){
            inputSizeContainer.style.marginBottom = `0`
            warningTxt.style.display = 'none'
            sizeInput.style.border =  `2px solid rgba(255, 255, 255, 0.418)`
            setSize(valueInput);
        } else {
            inputSizeContainer.style.marginBottom = `1em`
            warningTxt.style.display = 'block'
            sizeInput.style.border = '5px solid rgb(255, 1, 1)'
            return;
        }
    })
    
}

inputSize();



