document.querySelector('form').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var guests = document.getElementById('guests').value;
    var date = document.getElementById('datetime').value;

    event.preventDefault();
    var selectedDate = new Date(document.getElementById('datetime').value);
    var today = new Date();
    if(guests>80){
        alert('We are only able to serve guests less than 80 at a time.');
    }
    else{

    
    if (selectedDate < today) {
        alert('Please select a date equal to or after today.');
    } else {
        // If date is valid, proceed with form submission
        alert('Form submitted successfully!');
        document.querySelector('form').reset();
    }
}
    
});