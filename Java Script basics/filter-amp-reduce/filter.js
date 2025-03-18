const arr = [1,2,3,4,5,6,7,8,9,10] ;
// used to filter the array 
const filter = arr.filter((nums) => {
    console.log(nums);
    
    return nums >= 5}) ;
console.log(filter);
