const perfectSquare = (num)=>{
    let answer = Math.sqrt(num)
    if( answer - Math.floor(answer)!==0){
        return -1
    } else{
        return((answer+1)**2)
    }

}

const perfectOne = num => Number.isInteger(Math.sqrt(num))? (Math.sqrt(num+1)**2) : -1
//a simple one liner to accomplish the same tast

console.log(perfectSquare(9)) // should return 16 (3x3=9, 4x4=16)

console.log(perfectSquare(289)) // should return 324 (17x17=289 18x18=324)

console.log(perfectSquare(3000)) // should return -1 (sq root of 3000 is 54.77)

//string in reverse 
// const reverseStr = (str) =>{
//     let arr = []
//     let split = str.split('')
//     console.log(split)
//     for(let i =0; i< split.length; i++){
//         arr.unshift(split[i])
//     }
//     return arr.join('')
// }

// console.log(reverseStr(`world`))