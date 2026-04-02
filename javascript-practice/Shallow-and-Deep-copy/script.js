// Shallow Copy : You copy an object, but inside objects (nested data) are
//  still connected to the original.

let original = {
    name : "Ahmad" ,
    address : {
        city: "Lahore"
    }
}
 
const shallowCopy = {...original}
original.address.city = "Karachi"

console.log(shallowCopy);

//deep-copy : You copy an object and everything inside it is also copied.


const originalCopy = {
    name : "Ahmad" ,
    address : {
        loacation : "Lahore"
    }
}

const deepCopy = structuredClone(originalCopy)

originalCopy.address.loacation = "Sindth"
console.log(deepCopy);
