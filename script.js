
//// GENERATE SUDOKU ARRAY SECTION /////
let sudokuArray=[];

// generate non repeating set of array
function generateSudokuArray(){
for(let i=0; i<9; i++){
    sudokuArray[i] = [];
    for(let j=0; j<9; j++){
        sudokuArray[i][j] = (i * 3 + Math.floor(i / 3) + j) % 9 + 1;
    }    

}
return sudokuArray
}

// randomized loop untuk ubah kedudekan elemenyt dalam array
function shuffleArray(array) {
    
    for (let i = array.length - 1; i > 0; i--) {
        const m = Math.floor(Math.random() * (i + 1));
        const n = Math.floor(Math.random() * (i + 1));
        // [array[i], array[m]] = [array[m], array[i]];
        [array[m], array[i]] = [array[i], array[m]];
        [array[m], array[n]] = [array[n], array[m]];

    }
    return array;
}



//
// function untuk check kalau ade duplicate dlm row generated sudoku array
// kalau ade, call balik fungsion shuffle  array
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
    checkValidCol(array) // ROw dah ok, check Column pulak

    }else{
        console.log('Row elements are not unique');
        return checkValidRow(shuffleArray(array));
            }

        }

}

// function untuk check kalau ade duplicate dlm column generated sudoku array
// kalau ade, call balik fungsion shuffle  array
// TODO: IMprove checking function so it wont crash the website
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
        return array // here returns a valid sudoku array
        }else{
            console.log('Col elements are not unique');
            return checkValidCol(shuffleArray(array));
                }
            }

}



const boxes = document.querySelectorAll(".box");

const boxIds = ["box-1", "box-2", "box-3", "box-4", "box-5", "box-6", "box-7", "box-8", "box-9"];
const boxElements = boxIds.map(id => document.getElementById(id));


function sudokuStart(sudokuArray){
   
   
    for(let i = 0; i<boxElements.length ; i++){
        boxElements[i].innerHTML = `
        <tr>
            <td><input   type="text" maxlength="1" autocomplete="off"  onkeypress="return /[0-9]/i.test(event.key)" id="cell-${i}-0"/></td>
            <td><input  type="text" maxlength="1" autocomplete="off"  onkeypress="return /[0-9]/i.test(event.key)" id="cell-${i}-1"/></td>
            <td><input  type="text" maxlength="1" autocomplete="off"  onkeypress="return /[0-9]/i.test(event.key)" id="cell-${i}-2"/></td>
        </tr>
        <tr>
            <td><input  type="text" maxlength="1" autocomplete="off"  onkeypress="return /[0-9]/i.test(event.key)" id="cell-${i}-3"/></td>
            <td><input  type="text" maxlength="1" autocomplete="off"  onkeypress="return /[0-9]/i.test(event.key)" id="cell-${i}-4"/></td>
            <td><input  type="text" maxlength="1" autocomplete="off"  onkeypress="return /[0-9]/i.test(event.key)" id="cell-${i}-5"/></td>
        </tr>
        <tr>
            <td><input  type="text" maxlength="1" autocomplete="off"  onkeypress="return /[0-9]/i.test(event.key)" id="cell-${i}-6"/></td>
            <td><input  type="text" maxlength="1" autocomplete="off"  onkeypress="return /[0-9]/i.test(event.key)" id="cell-${i}-7"/></td>
            <td><input  type="text" maxlength="1" autocomplete="off"  onkeypress="return /[0-9]/i.test(event.key)" id="cell-${i}-8"/></td>
        </tr>
        `

 }
   

}

document.addEventListener("DOMContentLoaded", function(){
    // console.log(numbers)
    generateSudokuArray();
    shuffleArray(sudokuArray)
    checkValidRow(sudokuArray)
    // checkValidCol(sudokuArray)
    sudokuStart(sudokuArray);
    console.log("sudokuArray at DOMLoaded :",sudokuArray)
    clueStart(sudokuArray);
})


//// GENERATE SUDOKU ARRAY SECTION END /////


//////  ANSWER HANDLING SECTION //////

///click button
/// call value input dari semua input field, save dlm array.
// compare array inputted dgn sudoku array

const buttonCheck = document.getElementById("button-check");
let userAnswer = []


//fungsion untuk convert input ke dlalam array jawapan.
//nnti array jawapn ni akan dicopare dgn array yang dah digenerate
function inputToArray(){
    for(let i=0; i<9; i++){
        userAnswer[i]=[]
        for(let j= 0 ; j<9; j++){
            let inputElement = document.getElementById(`cell-${i}-${j}`);
            userAnswer[i].push(parseInt(inputElement.value));
                }

    }
    console.log("user has inputted :", userAnswer);
    return userAnswer
}

function checkAnswer(){
    console.log('checkAnswer is working')
    console.log("userAnswer is", userAnswer );
    console.log("sudokuArray is", sudokuArray );
    let inputs = document.querySelectorAll(`input[type="text"]`);
    inputs.forEach(input=>{
        input.style.backgroundColor = `white`;
        
    })
    
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            let input = document.getElementById(`cell-${i}-${j}`);

            if(userAnswer[i][j]!==sudokuArray[i][j]){
                input.style.backgroundColor = `salmon`;
            }else{
                if(input.disabled!==true){
                input.style.backgroundColor = `lightgreen`;
                }

            }
        }
    }

    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){

            if(userAnswer[i][j]!==sudokuArray[i][j]){
                return false;
            }
        }
    }

    return true;
    // return sudokuArray===userAnswer;


}

function showResult(bool){
    if(bool){
        console.log("true")
        alert("Congrats, you got it right!!")
    }else{
        console.log("false")
        alert("Oh no you got it worng!")


    }
}

buttonCheck.addEventListener("click",function(){
    inputToArray();
    let isCorrect = checkAnswer(userAnswer);
    showResult(isCorrect);
    // location.reload();
  
})

//////  ANSWER HANDLING SECTION END //////

function clueStart(sudokuArray){
    for(let i=0;i<9;i++){

        for(let j=0;j<9;j++){
            let input = document.getElementById(`cell-${i}-${j}`);
            let random = (Math.floor((Math.random()*2.13)+0.1+3.2)+1+(Math.floor((Math.random()*5)+0.6+6.9)))+(Math.floor(Math.random()*i))+(Math.floor(Math.random()*j))+(i*j);
            //random yang pajang ni untuk randomized kan value hint kat sudoku
            //saje wat panjang
            //aku try Math.floor(Math.random*2)+1 dekat if else dia jadi appear dekat certain box semua box filled, certain box totally xde hint
            // bila pakaikan nilai i dgn j dlm random baru dia jadi nampak cam random
            
            //use even or uneven to decide wetehr to show hint or not
            if(random%2!==0){
                // input.value = `OK`
                input.value = `${sudokuArray[i][j]}`
                 input.disabled = true;

            }else{
                // input.value = ``
                // return
            }
        }
    }
    console.log("sudokuArray at clueStart :",sudokuArray)

    

}

