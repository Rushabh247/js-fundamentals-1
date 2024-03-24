s
var arr = [10, 20, "apple", 30, "banana", "orange"];

for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
        console.log("Found the First String: " + arr[i]);
        break; 
    }
}
