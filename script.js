

let board=[];

function generateSudokuBoard(){
for(let i=0; i<9; i++){
    board[i] = [];
    for(let j=0; j<9; j++){
        board[i][j] = (i * 3 + Math.floor(i / 3) + j) % 9 + 1;
    }    

}
return board
}

function shuffleArray(array){
    for(let i=array.length-1; i>0; i--){
        const j = Math.floor(Math.random()*(i+1));
        [array[i],array[j]]=[array[j],array[i]]

    }
    // console.log(array)


    return array;
}


function checkValidRow(array){
    ///scans each row
for(let i=0; i<9; i+=3){
    let arrayHolderRow =[]
    for(let j=0; j<3; j++){
        for(let k=0; k<3; k++){
            arrayHolderRow.push(array[i+j][k]);
        }

    }
    let uniqueEl = new Set(arrayHolderRow)
if (uniqueEl.size === arrayHolderRow.length){
    console.log('Row Element OK');
    checkValidCol(array)

}else{
    console.log('Row elements are not unique');
    return checkValidRow(shuffleArray(array));
}

}

}


function checkValidCol(array){
    ///scans each row
for(let i=0; i<9; i+=3){
    let arrayHolderRow =[]
    for(let j=0; j<3; j++){
        for(let k=0; k<3; k++){
            arrayHolderRow.push(array[k][i+j]);
        }

    }
    let uniqueEl = new Set(arrayHolderRow)
    
if (uniqueEl.size === arrayHolderRow.length){
    console.log('Col Element OK');
    return array

}else{
    console.log('Col elements are not unique');
    return checkValidCol(shuffleArray(array));
}

}

}





const boxes = document.querySelectorAll(".box");

const boxIds = ["box-1", "box-2", "box-3", "box-4", "box-5", "box-6", "box-7", "box-8", "box-9"];
const boxElements = boxIds.map(id => document.getElementById(id));


document.addEventListener("DOMContentLoaded", function(){
    // console.log(numbers)
    generateSudokuBoard();
    shuffleArray(board)
    checkValidRow(board)
    // checkValidCol(board)
    sudokuStart(board);
    keyCheck();



    // console.log(board)

    // console.log(arrayNew)
})



function sudokuStart(board){
    for(let i = 0; i<boxElements.length ; i++){
        boxElements[i].innerHTML = `
        <tr>
            <td><input   type="text" maxlength="1"  onkeypress="return /[0-9]/i.test(event.key)" id="cell-${i}-0"/></td>
            <td><input  type="text" maxlength="1"  onkeypress="return /[0-9]/i.test(event.key)" id="cell-${i}-1"/></td>
            <td><input  type="text" maxlength="1"  onkeypress="return /[0-9]/i.test(event.key)" id="cell-${i}-2"/></td>
        </tr>
        <tr>
            <td><input  type="text" maxlength="1"  onkeypress="return /[0-9]/i.test(event.key)" id="cell-${i}-3"/></td>
            <td><input  type="text" maxlength="1"  onkeypress="return /[0-9]/i.test(event.key)" id="cell-${i}-4"/></td>
            <td><input  type="text" maxlength="1"  onkeypress="return /[0-9]/i.test(event.key)" id="cell-${i}-5"/></td>
        </tr>
        <tr>
            <td><input  type="text" maxlength="1"  onkeypress="return /[0-9]/i.test(event.key)" id="cell-${i}-6"/></td>
            <td><input  type="text" maxlength="1"  onkeypress="return /[0-9]/i.test(event.key)" id="cell-${i}-7"/></td>
            <td><input  type="text" maxlength="1"  onkeypress="return /[0-9]/i.test(event.key)" id="cell-${i}-8"/></td>
        </tr>
        `


    //     boxElements[i].innerHTML = `
    //     <tr> 
    //         <td id="cell-${i}-1"></td>
    //         <td id="cell-${i}-2"></td>
    //         <td id="cell-${i}-3"></td>
    //     </tr>
    //     <tr> 
    //         <td id="cell-${i}-4"></td>
    //         <td id="cell-${i}-5"></td>
    //         <td id="cell-${i}-6"></td>
    //     </tr>
    //     <tr> 
    //         <td id="cell-${i}-7"></td>
    //         <td id="cell-${i}-8"></td>
    //         <td id="cell-${i}-9"></td>
    //     </tr>
    //     `
    // 
}
   

}


function keyCheck(){
    var inputFields = document.querySelectorAll('input[type="text"]');
    
    inputFields.forEach(function(inputField) {
        inputField.addEventListener("keypress", function(event) {
            var keyCode = event.keyCode;
            
            // Allow numbers (0-9) and backspace (8) key
            if ((keyCode < 48 || keyCode > 57) && keyCode !== 8) {
                event.preventDefault();
            }
        });
    });

}
