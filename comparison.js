
let obj1 = {name: "person1", age:5};
let obj2 = {age:5, name: "person2"};

// step 1 : convert object into strings

let obj1string = JSON.stringify(obj1);
let obj2string = JSON.stringify(obj2);

//compare the string representations
if(obj1string===obj2string) {
    console.log("the JSON object are equal")
} else {
    console.log("the JSON onject are not equal")
}
