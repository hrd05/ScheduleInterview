function showForm(slot) {
    // Display the form and set the slot in the form's title
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.style.display = 'block';
    document.getElementById('slotInfo').textContent = `Booking for ${slot}`;
}

function bookSlot() {
    // Handle the booking logic here, e.g., sending data to a server
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    // You can send the data to your backend or perform other actions here
    alert(`Booking successful!\nName: ${name}\nEmail: ${email}`);
}

function showUserDetail() {
    const name = document.getElementById('name').value;
    const meetingLink = generateMeetingLink(); // Replace this with your logic to generate the meeting link

    const userMessage = document.getElementById('userMessage');
    userMessage.textContent = `Hi ${name}, please join at ${meetingLink} at the meet time.`;

    // Show the userDetails div
    const userDetails = document.getElementById('userDetails');
    userDetails.style.display = 'block';
}

// Function to generate a meeting link (replace this with your logic)
function generateMeetingLink() {
    // Replace this with your meeting link generation logic
    return 'https://meet.google.com/vgk-gppx-okb';
}
