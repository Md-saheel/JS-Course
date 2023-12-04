// const nums = [10,20,30]
// nums[2] = 99;
// console.log(nums);

// function getLastValue(array){
//   lastIndex=array.length-1;
//   console.log(array[lastIndex]);
// }
// getLastValue([1,20,22,24,5]);
// getLastValue(['hi','hello','good']);

// function arraySwap(array){
//   lastIndex=array[array.length-1];
//   firstIndex = array[0];
//   array[0] = lastIndex;
//   array[array.length-1] = firstIndex;
//   console.log(array);
// }
// arraySwap([1,20,22,24,5]);
// arraySwap(['hi','hello','good']);

// for(i=0;i<=10;i+=2){
//   console.log(i);
// }

// for(i=5;i>=0;i--){
//   console.log(i);
// }

// let i =0;
// while(i<=10){
//   console.log(i);
//   i+=2;
// }

// let i =5;
// while(i>=0){
//   console.log(i);
//   i--;
// }

// function addOne(array){
//   for(i=0;i<array.length;i++){
//     array[i]+= 1;
//   }
//   console.log(array);
// }
// addOne([1,2,3]);
// addOne([-2,-1,0,99]);

// function addNum(array,num){
//   for(i=0;i<array.length;i++){
//     array[i]+= num;
//   }
//   console.log(array);
// }
// addNum([1,2,3],2);
// addNum([1,2,3],3);
// addNum([-2,-1,0,99],2);

// function countPositive(nums){
//   let count = 0;
//   for(i=0;i<nums.length;i++){
//     if(nums[i]>0){
//       count++;
//     }
//   }
//   console.log(count);
// }
// countPositive([1,-3,5]);
// countPositive([-2,3,-5,7,10]);

// function minMax(nums){
//   const result = {
//     min: nums[0],
//     max: nums[0]
//   };
//   for (let i = 0; i < nums.length; i++) {
//     const value = nums[i];
//     if (value < result.min) {
//       result.min = value;
//     }
//     if (value > result.max) {
//       result.max = value;
//     }
//   }
//   return result;
// }
// console.log(minMax([1, -3, 5]));
// console.log(minMax([-2, 3, -5, 7, 10]));

// function addArrays(array1, array2) {
//   const result = [];
//   for (let i = 0; i < array1.length; i++) {
//     result.push(array1[i] + array2[i]);
//   }
//   return result;
// }
// console.log(addArrays([1, 1, 2], [1, 1, 3]));
// console.log(addArrays([1, 2, 3], [4, 5, 6]));

// function minMax(nums) {
//   const result = {
//     min: null,
//     max: null
//   };
//   for (let i = 0; i < nums.length; i++) {
//     const value = nums[i];
//     if (result.min === null || value < result.min) {
//       result.min = value;
//     }
//     if (result.max === null || value > result.max) {
//       result.max = value;
//     }
//   }
//   return result;
// }
// console.log(minMax([1, -3, 5]));
// console.log(minMax([-2, 3, -5, 7, 10]));

// console.log(minMax([]));
// console.log(minMax([3]));

// function countWords(words) {
//   const result = {};
//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     if (!result[word]) {
//       result[word] = 1;
//     } else {
//       result[word]++;
//     }
//   }
//   return result;
// }
// console.log(countWords(['apple', 'grape', 'apple', 'apple']));