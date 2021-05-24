function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

// let arr = [1,1,1,2,2,3]
// let arr = [9,9,9,9,9,9]
// let arr = [6,4,1,1,4,1]
let arr = [10,5,3,6,10,3,2,2,8, 5, 7, 9, 5, 4, 5, 9, 8, 5, 1, 6, 10, 9, 8, 5, 5, 8, 8, 2, 2, 4, 6, 10]
// let arr = [6,5, 5, 10, 1, 7, 1, 10, 2, 4, 9, 9, 1, 3, 6, 9, 10, 1, 9, 4, 7, 3, 8, 6, 3, 7, 10, 3, 10]
let cutarr = []

while(1){
    
    let uniArr = arr.filter(onlyUnique)

    let sum =   uniArr.reduce((a, b) => a + b, 0)

    let avg = sum / uniArr.length
    
    let arrx = arr.filter(e => {
        if(e > avg) {
            // console.log(e);
            cutarr.push(e)
        }
        return e <= avg
    })

    if(arr.length <= arrx.length) {
        break
    }
    //     cut++
    // }

    arr = arrx 
    // console.log(arr);
}

console.log(cutarr.length);




