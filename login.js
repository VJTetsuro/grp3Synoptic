document.getElementById('loginform').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission
  
  const userID = document.getElementById('UserID').value;
  const password = document.getElementById('UserP').value;
  
  const validUserID = "admin";
  const validPassword = "1234";
  
  if (userID === validUserID && password === validPassword) {
    window.location.href = "main.html";
  } else {
    alert("Invalid userID or password. Please try again.");
  }
});


