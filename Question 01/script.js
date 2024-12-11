//======================================49-52==================================//

//1. Create a signup form and display form data in your web
//page on submission.


document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
 
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    document.getElementById('display-username').textContent = username;
    document.getElementById('display-email').textContent = email;
    document.getElementById('display-password').textContent = password;

    
    document.getElementById('user-info').style.display = 'block';
 
    document.getElementById('signup-form').reset();
  });
  