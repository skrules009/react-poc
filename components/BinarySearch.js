export const BinarySearch = ()=>{
    
    const arr = [2,8,1,9,5,7,3,6,8,7,6,9,1];

    // SORT the array 
    const sortArray = arr.sort((a, b)=> a-b);
    console.log(new Set(sortArray));

    // SORT by bable sort
    for(let i=arr.length; i>0; i--) {
        for(let j=0; j<i-1; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    console.log(arr);

    const binarySearch = (arr, num)=> {
    // SEARCH by BTree
    let min=0;
    let max=arr.length;
    while(min<max) {
        let midLen = Math.floor((min + max) /2);
        if(arr[midLen] > num) {
            max = midLen -1;
        } else if (arr[midLen]< num) {
            min = midLen+1;
        } else {
            return arr[midLen];
        }
    }
    return -1;
}
console.log(binarySearch([...new Set(sortArray)], 8));
    
 return (<div>
    
    <div className="border-box">border-box</div>
    <div className="content-box">content-box</div>
 </div>)
};
