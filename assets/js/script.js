//logic for movie rating range 1-10
document.getElementById("rating").addEventListener("input", function () {
  document.getElementById("ratingValue").innerText = this.value;
});

// Validate email function
function isValidEmail(email) {
  // Regular expression to help with email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
// Function to add a row to the review table during saving output
function addReviewToTable(title, releaseDate, rating, genre, studioEmail) {
  const tableBody = document.getElementById("reviewTableBody");

  const row = tableBody.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  const cell5 = row.insertCell(4);

  cell1.textContent = title;
  const formattedDate = new Date(releaseDate).toLocaleDateString("en-US", {
    //created this to format the date during output 
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  cell2.textContent = formattedDate;
  cell3.textContent = rating;
  cell4.textContent = genre;
  cell5.textContent = studioEmail;
}

// Function to clear the form after submission, allowing new entry
function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("releaseDate").value = "";
  document.getElementById("rating").value = "";
  document.getElementById("genre").value = "";
  document.getElementById("studioEmail").value = "";
}

// Modified submitForm function to add review to table
function submitForm() {

  // Validate email before submitting
  const emailInput = document.getElementById("studioEmail");
  const emailError = document.getElementById("emailError");

  if (!isValidEmail(emailInput.value)) {
    emailError.innerText = "Invalid email address";
    return; // Prevent form submission if email is invalid
  } else {
    // Clear previous error message if email is valid
    emailError.innerText = "";
  }

  //form values
  const title = document.getElementById("title").value;
  const releaseDate = document.getElementById("releaseDate").value;
  const rating = document.getElementById("rating").value;
  const genre = document.getElementById("genre").value;
  const studioEmail = document.getElementById("studioEmail").value;

  // Add the review to the table
  addReviewToTable(title, releaseDate, rating, genre, studioEmail);

  // Clear the form
  clearForm();
}
