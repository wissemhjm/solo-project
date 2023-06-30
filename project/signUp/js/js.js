const login = document.querySelector('.login');
login.onclick = (e) => {
  e.preventDefault();
  const emailAddress=document.getElementById("emailAddress").value;
  const passWord=document.getElementById("passWord").value;

  const Email=localStorage.getItem("gmail");
  const Password=localStorage.getItem("password");

  if(emailAddress === "" || passWord === ""){
    alert('Please enter both email and password');
  }else{
    if(emailAddress === Email && passWord === Password){
      alert('Login successful!');
     
      window.location.href = "./index2.html";
    }else{
      alert('Invalid email or password');
    }
  }
};


