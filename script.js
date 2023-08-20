$(document).ready(onReady);


function onReady() {

    // Listeners
    $('#submitButton').on('click', pushTheInput);
    $('#tableBody').on('click', '#deleteButton', removeRow);

}

// The Function That pushes the text into the box below
function pushTheInput(event) {
    event.preventDefault();
    // console.log('is it working');
    //Set Values To Each Box so we can push
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let idLabel = $('#idLabel').val();
    let titleLabel = $('#titleLabel').val();

    // Figuring out how to get the monthly total to update
    // It seems to me that you should be able to push the value of the input into
    // another container but the problem i am having is that it is turnign it into 
    // a string.

    // finalMonthly.toLocaleString() //TODO STRETCH: $10,000.00
    let salaryInput = Number($('#salaryLabel').val());
    let monthlyStatus = Number($('#totalMonthlyInput').text());
    let finalMonthly = (salaryInput / 12) + monthlyStatus;
    finalMonthly = finalMonthly.toFixed(2);
    $('#totalMonthlyInput').text(finalMonthly)



    //Table Row Function
    $('#tableBody').append(`<tr id="tableRow"><td>${firstName}</td><td>${lastName}</td><td>${idLabel}</td><td>${titleLabel}</td><td>${salaryInput}</td><<td><button id="deleteButton">Delete</button></td>/tr>`)

    // Reset the Value to blank
    $('#firstName').val("");
    $('#lastName').val("");
    $('#idLabel').val("");
    $('#titleLabel').val("");
    $('#salaryLabel').val("");
}

//Function for Delete Items
// Problem Solving:
// $('#tableBody').on('click', git add .'#tableRow', deleteButton); Listener
// Updating delete button from class to ID, the class was not set up properly
// $$('#tableBody').on('click', '#deleteButton', deleteButton); Listener updated to correct text
// --We want the button to be what clears the row
// now set up a function, that reads "When the delete button is clicked, remove the same row"


function removeRow(event) {
    $('#tableRow').remove();
}