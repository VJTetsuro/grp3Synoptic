document.getElementById('loginform').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting normally
  
    const userID = document.getElementById('UserID').value;
    const password = document.getElementById('UserP').value;
  
    // Replace these with your valid credentials or better validation method
    const validUserID = "admin";
    const validPassword = "1234";
  
    if (userID === validUserID && password === validPassword) {
      // Credentials match, redirect to next page
      window.location.href = "main.html";
    } else {
      alert("Invalid userID or password. Please try again.");
    }
  });

  const img = document.getElementById('PrintTag');
  console.log(img);