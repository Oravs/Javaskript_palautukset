window.onload = function () {
  var isStudent = confirm("Are you a student?");

  var messageContainer = document.getElementById("message");

  if (isStudent) {
    messageContainer.innerHTML = "<h2>Welcome student</h2>";
  } else {
    messageContainer.innerHTML =
      "<h2>Sorry, this page is for students only</h2>";
  }
};
