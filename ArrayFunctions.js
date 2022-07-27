let arr = [2, 8, 4, 3, 6, 9, 1]

// const updatedArray = arr.map((a) => {
//     return a*a
// })

// console.log(updatedArray)

// const filteredArray = arr.filter((a) => {
//     return a  %2==0
// })

// console.log(filteredArray);

// const slicedArray = arr.slice(0, 2)
// console.log(slicedArray);

//sort in accending order

// const sr = arr.sort((a, b) => {
//     return a-b
// })

// console.log(sr)

//sort in decending order

// const srt = arr.sort((a, b) => {
//     return b-a
// })

// console.log(srt)

let updatedArray = arr.map((a,index)=>{
    return a+" at "+index
})
console.log(updatedArray);