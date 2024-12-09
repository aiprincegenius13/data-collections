//current lab solo

const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Split the CSV into lines
const lines = csv.split("\n");

console.log(lines);

stringToArray = csv.split("\n");     //create a variable for the string

console.log(stringToArray)  //variable active

console.log(stringToArray[4])   //row displayed without headers  check

let fourRandomPeople = [];
for (i=0; i < stringToArray.length; i++) {
    let row = stringToArray[i].split(","); // splitting string data by the comma
    fourRandomPeople.push(row); 
}
console.log(fourRandomPeople);   //check

const data = fourRandomPeople   //variable declaration

const headers = data[0];     // Extract the header row

console.log(headers);    //check

// Transform the remaining rows into objects
const formattedData = data.slice(1).map(row => {
    const obj = {};
    row.forEach((value, index) => {
        let property = headers[index].toLowerCase()
        obj[property] = value; // Use headers as keys
    });
    return obj;
});

console.log(formattedData); // check

formattedData.forEach(person => {
    console.log(`ID: ${person.id}`);
    console.log(`Name: ${person.name}`);
    console.log(`Occupation: ${person.occupation}`);
    console.log(`Age: ${person.age}`);
    console.log("----------------");
});
 
 // headers array goes here

const lowercaseHeaders = headers.map(item => item.toLowerCase());

console.log(lowercaseHeaders); // lowercase check

console.log(formattedData);

// Map the remaining lines into an array of objects
let people = lines.slice(1).map(line => {
    const values = line.split(","); // Split the line by commas
    // Create an object using headers as keys
    return headers.reduce((obj, header, index) => {
        obj[header.toLowerCase()] = values[index];
        return obj;
    }, {});
}).sort((a, b) => parseInt(a.id) - parseInt(b.id)); // Sort by ID numerically

// Remove the last element
people.pop();

// Insert a new object at index 1
const newPerson = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
people.splice(1, 0, newPerson);

// Add a new object to the end of the array
const anotherPerson = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
people.push(anotherPerson);

console.log(people);

const updatedCsv = [
    headers.join(","), // Add the header row
    ...people.map(person =>
        headers.map(header => person[header.toLowerCase()]).join(",")
    )
].join("\n");

console.log(updatedCsv);
