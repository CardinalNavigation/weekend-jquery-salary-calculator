$(document).ready(onReady);


function onReady() {

    // Listeners
    $('#submitButton').on('click', pushTheInput)

}

function pushTheInput() {
    console.log('is it working');
    $('#tableBody').append('<tr><td>hi</td><td>hi</td><td>hi</td><td>hi</td><td>hi</td><<td>hi</td>/tr>')
}