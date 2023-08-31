function merge(arr1, arr2) {
    // result array
    let resArray = [];
    let i = 0;
    let j = 0;

    // choose which element to push to result array
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            resArray.push(arr1[i]);
            i++;
        } else {
            resArray.push(arr2[j]);
            j++;
        }
    }

    // push remaining elements from arr1
    while (i < arr1.length) {
        resArray.push(arr1[i]);
        i++;
    }

    // push remaining elements from arr2
    while (j < arr2.length) {
        resArray.push(arr2[j]);
        j++;
    }

    return resArray;
}

function mergeSort(arr) {
    // array with only 1 element is already sorted, return it
    if (arr.length <= 1) return arr;

    // find middle of array
    const mid = Math.floor(arr.length / 2);

    // split array into 2
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

module.exports = { merge, mergeSort};