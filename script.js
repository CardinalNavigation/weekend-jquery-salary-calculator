$(document).ready(onReady);


function onReady() {

    // Listeners
    $('#submitButton').on('click', pushTheInput);
    $('#tableBody').on('click', '#tableRow', deleteButton);

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

    let salaryInputString = $('#salaryLabel').val();
    // let variable = $('target').operation();
    // WRITE (replace)updated target monthly = read input + read target monthly 
    let monthlyTotal = $('#totalMonthlyInput').val();

    let salaryInput = Number(salaryInputString);
    console.log(typeof salaryInput)


    $('#totalMonthlyInput').append(salaryInput);


    $('#tableBody').append(`<tr id="tableRow"><td>${firstName}</td><td>${lastName}</td><td>${idLabel}</td><td>${titleLabel}</td><td>${salaryInputString}</td><<td><button class "deleteButton">Delete</button></td>/tr>`)

}

//trying to delete the items but its deleting the first in the line
// i dont know why
function deleteButton() {
    $(this).remove();
}