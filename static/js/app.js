// test app.js validation
console.log('app.js is launched.');


// from data.js
var tableData = data;

console.log(data);

// YOUR CODE HERE!
var resultPresent = d3.select("tbody");

var filterButton = d3.select('#filter-btn');
var form = d3.select('#form');
var checkBox = d3.select('#check-boxes');


// Create event handlers 
checkBox.on('change',focus);//show the input according to the chick boxes
filterButton.on("click", filterTable); //use filter button to grigger function
form.on("submit",filterTable); //use enter key to trigger function


//function search type select


function focus(){
    
    var checkDate=d3.select('#check-date').property('checked')
    console.log(checkDate)
    var checkCity=d3.select('#check-city').property('checked')
    console.log(checkCity)
    var checkState=d3.select('#check-state').property('checked')
    console.log(checkState)
    var checkCountry=d3.select('#check-country').property('checked')
    console.log(checkCountry)
    var checkShape=d3.select('#check-shape').property('checked')
    console.log(checkShape)
    var inputBox=d3.select('#input-section')

    inputBox.html('')

    if (checkDate===true){
        inputBox.append('label').attr('for','date').text('Enter a Date');
        inputBox.append('input').attr('id','datetime').attr('placeholder','1/11/2011');
      
    }

    if (checkCity===true){
        inputBox.append('label').attr('for','date').text('Enter a City');
        inputBox.append('input').attr('id','city').attr('placeholder','la mesa');

    }
    if (checkState===true){
        inputBox.append('label').attr('for','date').text('Enter a State');
        inputBox.append('input').attr('id','state').attr('placeholder','fl');

    }
    if (checkCountry===true){
        inputBox.append('label').attr('for','date').text('Enter a Country');
        inputBox.append('input').attr('id','country').attr('placeholder','us');

    }
    if (checkShape===true){
        inputBox.append('label').attr('for','date').text('Enter a Shape');
        inputBox.append('input').attr('id','shape').attr('placeholder','triangle');


    };

};

//function
function filterTable(){
    //prevent page from refreshing
    d3.event.preventDefault();
    resultPresent.html("");
    console.log('filter function triggered.');

    var checkDate=d3.select('#check-date').property('checked')
    console.log(checkDate)
    var checkCity=d3.select('#check-city').property('checked')
    console.log(checkCity)
    var checkState=d3.select('#check-state').property('checked')
    console.log(checkState)
    var checkCountry=d3.select('#check-country').property('checked')
    console.log(checkCountry)
    var checkShape=d3.select('#check-shape').property('checked')
    console.log(checkShape)
    var inputBox=d3.select('#input-section')

    if (checkDate===true){
        var inputElement = d3.select('#datetime');
        var inputValue = inputElement.property('value');
        var filteredData = data.filter(cases => cases.datetime === inputValue);
        console.log(filteredData);
    }

    if (checkCity===true){
        var inputElement = d3.select('#city');
        var inputValue = inputElement.property('value');
        var filteredData = filteredData.filter(cases => cases.city === inputValue);
        console.log(filteredData);
    }
    if (checkState===true){
        var inputElement = d3.select('#state');
        var inputValue = inputElement.property('value');
        var filteredData = filteredData.filter(cases => cases.city === inputValue);
        console.log(filteredData);
    }
    if (checkCountry===true){
        var inputElement = d3.select('#country');
        var inputValue = inputElement.property('value');
        var filteredData = filteredData.filter(cases => cases.country === inputValue);
        console.log(filteredData);
    }
    if (checkShape===true){
        var inputElement = d3.select('#shape');
        var inputValue = inputElement.property('value');
        var filteredData = filteredData.filter(cases => cases.shape === inputValue);
        console.log(filteredData);
    };


    filteredData.forEach((cases) => {
    var row = resultPresent.append("tr");
    Object.entries(cases).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
        });
    });
};