// test app.js validation
console.log('app.js is launched.');


// from data.js
var tableData = data;

console.log(data);

// YOUR CODE HERE!
var resultPresent = d3.select("tbody");

var filterButton = d3.select('#filter-btn');
var form = d3.select('#form')

// Create event handlers 
filterButton.on("click", filterTable); //use filter button to grigger function
form.on("submit",filterTable); //use enter key to trigger function


//function
function filterTable(){
    //prevent page from refreshing
    d3.event.preventDefault();
    console.log('filter function triggered.')
    var inputElement = d3.select('#datetime')
    var inputValue = inputElement.property('value')
    console.log(`Search Term: ${inputValue}`)



};
