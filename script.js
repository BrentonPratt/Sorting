function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let n = 0; n < arr.length-i-1; n++){
            if(arr[n] > arr[n+1]){
                let temp = arr[n];
                arr[n] = arr[n+1];
                arr[n+1] = temp;
            }
        }
    }
}

let myArray = [2, 3, 5, 1, 4];

bubbleSort(myArray);

console.log(myArray);