// Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.

function FindIntersection(strArr) { 
    
    
    // code goes here  
    const intersection = []
    let array1 = strArr[0].replace(/[" ]/g, '')
    let array2 = strArr[1].replace(/[" ]/g, '')
    array1 = array1.split(",")
    array2 = array2.split(",")

    for (let i = 0; i < array1.length; i++){
        if (array2.includes(array1[i])){
            intersection.push(array1[i])
        }
    }
    if (intersection.length > 0){
        return intersection.sort(function(a,b){return a-b})
    } else {
        return false
    }
}
     
// keep this function call here 
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));