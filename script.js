$(document).ready(onReady);


function onReady() {

    // Listeners
    $('#submitButton').on('click', pushTheInput)
    $('#')

}

// The Function That pushes the text into the box below
function pushTheInput(event) {
    event.preventDefault();
    console.log('is it working');
    //Set Values To Each Box so we can push
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let idLabel = $('#idLabel').val();
    let titleLabel = $('#titleLabel').val();
    let salaryLabel = $('#salaryLabel').val();
    $('#tableBody').append(`<tr><td>${firstName}</td><td>${lastName}</td><td>${idLabel}</td><td>${titleLabel}</td><td>${salaryLabel}</td><<td><button class "deleteButton">Delete</button></td>/tr>`)
}