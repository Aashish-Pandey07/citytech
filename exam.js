function mergeAndCount(arr, tempArr, left, right) {
    let invCount = 0;
    if (left < right) {
        const mid = Math.floor((left + right) / 2);

        
        invCount += mergeAndCount(arr, tempArr, left, mid);
        invCount += mergeAndCount(arr, tempArr, mid + 1, right);

        
        invCount += merge(arr, tempArr, left, mid, right);
    }
    return invCount;
}


function merge(arr, tempArr, left, mid, right) {
    let i = left;    
    let j = mid + 1; 
    let k = left;    
    let invCount = 0;

    
    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            tempArr[k] = arr[i];
            i++;
        } else {
            
            tempArr[k] = arr[j];
            invCount += (mid - i + 1);
            j++;
        }
        k++;
    }

    
    while (i <= mid) {
        tempArr[k] = arr[i];
        i++;
        k++;
    }

    
    while (j <= right) {
        tempArr[k] = arr[j];
        j++;
        k++;
    }

    
    for (let i = left; i <= right; i++) {
        arr[i] = tempArr[i];
    }

    return invCount;
}


function countInversions(arr) {
    const tempArr = new Array(arr.length);
    return mergeAndCount(arr, tempArr, 0, arr.length - 1);
}


const arr = [1, 20, 6, 4, 5];
console.log(`Total inversions: ${countInversions(arr)}`);
