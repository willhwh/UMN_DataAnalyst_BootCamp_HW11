// test app.js validation
console.log('app.js is launched.');


// from data.js
var tableData = data;

console.log(data);

// YOUR CODE HERE!
var resultPresent = d3.select("tbody");

var filterButton = d3.select('#filter-btn');
var form = d3.select('#form');
var searchType=d3.select('.selectpicker');
var labelType=d3.select('#select-type');
var inputPlace=d3.select('input');

// Create event handlers 
filterButton.on("click", filterTable); //use filter button to grigger function
form.on("submit",filterTable); //use enter key to trigger function
searchType.on('change',focus);

var focusType = searchType.property('value');
//function search type select
function focus(){
    focusType = searchType.property('value');
    
    if (focusType==='Date'){
        labelType.attr('for','date');
        labelType.text('Enter a Date');
        inputPlace.attr('id','datetime');
        inputPlace.attr('placeholder','1/11/2011');
    }
    else if (focusType==='City'){
        labelType.attr('for','city')
        labelType.text('Enter a City')
        inputPlace.attr('id','city');
        inputPlace.attr('placeholder','la mesa');
    }
    else if (focusType==='State'){
        labelType.attr('for','state')
        labelType.text('Enter a State')
        inputPlace.attr('id','state');
        inputPlace.attr('placeholder','fl');
    }
    else if (focusType==='Country'){
        labelType.attr('for','country')
        labelType.text('Enter a Country')
        inputPlace.attr('id','country');
        inputPlace.attr('placeholder','us');
    }
    else if (focusType==='Shape'){
        labelType.attr('for','shape')
        labelType.text('Enter a Shape')
        inputPlace.attr('id','shape');
        inputPlace.attr('placeholder','triangle');
    }

}

//function
function filterTable(){
    //prevent page from refreshing
    d3.event.preventDefault();

    console.log(`Using ${focusType} as filter`);
    console.log('filter function triggered.');
    console.log(`Search Term: ${inputValue}`);



    

    if (focusType==='Date'){
        var inputElement = d3.select('#datetime');
        var inputValue = inputElement.property('value');
        var filteredData = data.filter(cases => cases.datetime === inputValue);
        console.log(filteredData);
    }
    else if (focusType==='City'){
        var inputElement = d3.select('#city');
        var inputValue = inputElement.property('value');
        var filteredData = data.filter(cases => cases.city === inputValue);
        console.log(filteredData);
    }
    else if (focusType==='State'){
        var inputElement = d3.select('#state');
        var inputValue = inputElement.property('value');
        var filteredData = data.filter(cases => cases.state === inputValue);
        console.log(filteredData);
    }
    else if (focusType==='Country'){
        var inputElement = d3.select('#country');
        var inputValue = inputElement.property('value');
        var filteredData = data.filter(cases => cases.country === inputValue);
        console.log(filteredData);
    }
    else if (focusType==='Shape'){
        var inputElement = d3.select('#shape');
        var inputValue = inputElement.property('value');
        var filteredData = data.filter(cases => cases.shape === inputValue);
        console.log(filteredData);
    }






    filteredData.forEach((cases) => {
    var row = resultPresent.append("tr");
    Object.entries(cases).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
        });
    });
};