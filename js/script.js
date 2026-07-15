document.addEventListener("DOMContentLoaded", function () {

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

bookingForm.addEventListener("submit", function (e) {

e.preventDefault();

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const phone = document.getElementById("phone").value.trim();
const destination = document.getElementById("destination").value.trim();

if (
name === "" ||
email === "" ||
phone === "" ||
destination === ""
) {
alert("Please fill all required fields.");
return;
}

alert(
"Thank you, " +
name +
"! Your booking request has been submitted successfully."
);

bookingForm.reset();

});

}

});
