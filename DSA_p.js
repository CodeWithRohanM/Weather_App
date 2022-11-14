
// BINARY SEARCH


// const arr = [12,54,67,87,102];

// let start = 0;
// let end = arr.length - 1;

// let mid = Math.floor(start + (end - start) / 2);

// function binaryFunction(key){
//     while(start <= end){
//         if(arr[mid] == key){
//             return mid;
//         }

//         if(key > arr[mid]){
//             start = mid + 1;
//         }else{
//             end = mid - 1;
//         }

//         mid =  Math.floor(start + (end - start) / 2);
//     }
//     return -1;
// }

// let noteVAlue = binaryFunction(67);
// if(noteVAlue == -1)
// {
//     console.log("Item Not Found.");
// }else{
//     console.log("Item Found at "+noteVAlue);
// }


// ------------


// FIRST & LAST OCCURANCE OF AN ELEMENT IN AN ARRAY

// const arr = [23, 55, 67, 89, 89, 89, 89, 89, 89, 90, 91];

// function leftSearch(key) {
//     let start = 0;
//     let end = arr.length - 1;
//     let mid = Math.floor((start + (end - start) / 2));
//     let note = -1;

//     while (start <= end) {
//         if (arr[mid] == key) {
//             note = mid;
//             end = mid - 1;
//         }
//         else if (key > arr[mid]) {
//             start = mid + 1;
//         }
//         else {
//             end = mid - 1;
//         }

//         mid = Math.floor((start + (end - start) / 2));
//     }
//     return note;
// }


// function rightSearch(key) {
//     let start = 0;
//     let end = arr.length - 1;
//     let mid = Math.floor((start + (end - start) / 2));
//     let note = -1;

//     while (start <= end) {
//         if (arr[mid] == key) {
//             note = mid;
//             start = mid + 1;
//         }
//         else if (key > arr[mid]) {
//             start = mid + 1;
//         }
//         else {
//             end = mid - 1;
//         }

//         mid = Math.floor((start + (end - start) / 2));
//     }
//     return note;
// }


// console.log("Array is = " + arr);
// let key = 89;
// let getLeftValue = leftSearch(key);
// console.log("First Occurance of " + key + " is " + getLeftValue);

// let getRightValue = rightSearch(key);
// console.log("Last Ocuurance of " + key + " is " + getRightValue);




// ----------------------------------------------------

// TOTAL NUMBER OF ELEMENTS IN AN ARRAY


// const arr = [23, 55, 67, 89, 89, 89, 89, 90, 91];

// function leftSearch(key) {
//     let start = 0;
//     let end = arr.length - 1;
//     let mid = Math.floor((start + (end - start) / 2));
//     let note = -1;

//     while (start <= end) {
//         if (arr[mid] == key) {
//             note = mid;
//             end = mid - 1;
//         }
//         else if (key > arr[mid]) {
//             start = mid + 1;
//         }
//         else {
//             end = mid - 1;
//         }

//         mid = Math.floor((start + (end - start) / 2));
//     }
//     return note;
// }


// function rightSearch(key) {
//     let start = 0;
//     let end = arr.length - 1;
//     let mid = Math.floor((start + (end - start) / 2));
//     let note = -1;

//     while (start <= end) {
//         if (arr[mid] == key) {
//             note = mid;
//             start = mid + 1;
//         }
//         else if (key > arr[mid]) {
//             start = mid + 1;
//         }
//         else {
//             end = mid - 1;
//         }

//         mid = Math.floor((start + (end - start) / 2));
//     }
//     return note;
// }

// let key = 89;

// let firstValue = leftSearch(89);
// let lastValue = rightSearch(89);

// let totalCount = (lastValue - firstValue) + 1;

// console.log("Total number of occurances of "+key+" are "+totalCount);




// ----------------------------------------------------

// FINDING MOUNTAIN ELEMENT IN A ARRAY

// const arr = [91, 50, 45, 30, 20, 10];

// let start = 0;
// let end = arr.length - 1;
// let mid = Math.floor((start + end) / 2);

// function findMountainElement() {        
//     while (start < end) {
//         if (arr[mid] < arr[mid + 1]) {
//             start = mid + 1;
//         } else {
//             end = mid;
//         }

//         mid = Math.floor((start + end) / 2);
//     }
//     return mid;
// }

// let mountainElement = findMountainElement();            //[23, 55, 50, 40, 20, 15]

// console.log("The Mountain Element in the Array is "+arr[mountainElement]);




// ----------------------------------------------------


const arr = [5, 10, 12, 2, 6];


let start = 0;
let end = arr.length - 1;
let mid = Math.floor((start+end)/2);

function findPivotElement(){
    while(start < end){
        if(arr[mid] > arr[0]){
            start = mid + 1;
        }else{
            end = mid;
        }

        mid = Math.floor((start + end)/2);
    }
}