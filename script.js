

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


function checkValid(array){
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
    return array

}else{
    console.log('Row elements are not unique');
    return checkValid(shuffleArray(array));
}

}



// for(let i=0; i<3; i++){
//     for(let j=0; j<3; j++){
//     arrayHolderRow.push(array[i][j])

//     }
// }


// let uniqueEl = new Set(arrayHolderRow)
// if (uniqueEl.size === arrayHolderRow.length){
//     console.log('Row Element OK');

    

// }else{
//     console.log('Row elements are not unique');
//     return checkValid(shuffleArray(array));
// }

// arrayHolderRow=[]
// for(let i=3; i<6; i++){
//     for(let j=0; j<3; j++){
//     arrayHolderRow.push(array[i][j])

//     }
// }

// uniqueEl = new Set(arrayHolderRow)
// if (uniqueEl.size === arrayHolderRow.length){
//     console.log('Row Element OK');


// }else{
//     console.log('Row elements are not unique');
//     return checkValid(shuffleArray(array));
// }
// arrayHolderRow=[]
// for(let i=6; i<9; i++){
//     for(let j=0; j<3; j++){
//     arrayHolderRow.push(array[i][j])

//     }
// }

// uniqueEl = new Set(arrayHolderRow)
// if (uniqueEl.size === arrayHolderRow.length){
//     console.log('Row Element OK');

//     return array

// }else{
//     console.log('Row elements are not unique');
//     return checkValid(shuffleArray(array));
// }



}





const boxes = document.querySelectorAll(".box");

const boxIds = ["box-1", "box-2", "box-3", "box-4", "box-5", "box-6", "box-7", "box-8", "box-9"];
const boxElements = boxIds.map(id => document.getElementById(id));


document.addEventListener("DOMContentLoaded", e=>{
    // console.log(numbers)
    generateSudokuBoard();
    shuffleArray(board)
    checkValid(board)
    sudokuStart(board)


    // console.log(board)

    // console.log(arrayNew)
})



function sudokuStart(board){
    for(let i = 0; i<boxElements.length ; i++){
        boxElements[i].innerHTML = `
        <tr> 
            <td id="cell-01">${board[i][0]}</td>
            <td id="cell-02">${board[i][1]}</td>
            <td id="cell-03">${board[i][2]}</td>
        </tr>
        <tr> 
            <td id="cell-04">${board[i][3]}</td>
            <td id="cell-05">${board[i][4]}</td>
            <td id="cell-06">${board[i][5]}</td>
        </tr>
        <tr> 
            <td id="cell-07">${board[i][6]}</td>
            <td id="cell-08">${board[i][7]}</td>
            <td id="cell-09">${board[i][8]}</td>
        </tr>
        `
    }
   

}

