const drawingCanvas = document.getElementById('canvas'); 
const pickedColor = document.getElementById('picked-color'),
blackBtn = document.getElementById('black'),
randomBtn = document.getElementById('random'),
eraseBtn = document.getElementById('erase'),
resetBtn = document.getElementById('reset'),
sizeInput = document.getElementById('size-input'),
body = document.querySelector('body'),
warningTxt = document.querySelector('.warning'),
inputSizeContainer= document.querySelector('.change-size');
let divColor = 'black';



    //Set grid & div's to canvas
function setSize(boxSize){
    let boxes = drawingCanvas.querySelectorAll('div');
    boxes.forEach(boxDiv => boxDiv.remove());
    

    drawingCanvas.style.display = `grid`;
    drawingCanvas.style.gridTemplateColumns = `repeat(${boxSize}, 1fr)`;
    drawingCanvas.style.gridTemplateRows = `repeat(${boxSize}, 1fr)`;

    const totalBoxes = `${boxSize}` * `${boxSize}`;

    for(let i = 0;i < totalBoxes;i++){
        let box = document.createElement('div'); 
        box.style.backgroundColor = 'rgb(254, 254, 254)';
        drawingCanvas.append(box);
    }
    getButtons();
}

setSize('16');

//Use input to set box number
function inputSize(){
    
    sizeInput.addEventListener('change',function(e){
        let valueInput = e.target.value;
        if(+valueInput > 1 && +valueInput <= 150){
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


//Setting color on grid div on cursor movement
//Get button colors
function getButtons(){
    
    let randBoxes = drawingCanvas.querySelectorAll('div');
    
    randBoxes.forEach(function(boxDivColor){
        boxDivColor.addEventListener('mouseover', function(){
        this.style.backgroundColor = divColor;
    })});

    pickedColor.addEventListener('click', function(e){
        randBoxes.forEach(function(boxDivColor){
            boxDivColor.addEventListener('mouseover', function(){
            divColor = e.target.value
            this.style.backgroundColor = divColor;
        })});
    });

    pickedColor.addEventListener('change', function(e){
        randBoxes.forEach(function(boxDivColor){
            boxDivColor.addEventListener('mouseover', function(){
            divColor = e.target.value
            this.style.backgroundColor = divColor;
        })});
    });
    
    blackBtn.addEventListener('click', () => {
        
        randBoxes.forEach(function(boxDivColor){
            boxDivColor.addEventListener('mouseover', function(){
            divColor = 'rgb(0, 0, 0)'
            this.style.backgroundColor = divColor;
        })});
    });
    
    eraseBtn.addEventListener('click', () => {
        
        randBoxes.forEach(function(boxDivColor){
            boxDivColor.addEventListener('mouseover', function(){
            divColor = 'rgb(255, 255, 255)';
            this.style.backgroundColor = divColor;
        })});
    });
    
    resetBtn.addEventListener('click', () => {
        
        randBoxes.forEach(function(boxDivColor){
            divColor = 'rgb(255, 255, 255)';
            boxDivColor.style.backgroundColor = divColor;
        });
    });
    
    randomBtn.addEventListener('click', () => {
        randBoxes.forEach(function(boxDivColor){
            boxDivColor.addEventListener('mouseover', function(){
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            divColor = `rgb(${r}, ${g}, ${b})`;
            this.style.backgroundColor = divColor;
        })});
        
    });

};





