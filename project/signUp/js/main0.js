const button=document.getElementById('button');
button.addEventListener('click',function(){
    const fname=document.getElementById('firstName').value;
    const lname=document.getElementById('lastName').value;
    const email=document.getElementById('mail').value;
    const Pass=document.getElementById('pass').value;
    const ConfirmPass=document.getElementById('confirmPass').value;

localStorage.setItem('FirstName',fname);
localStorage.setItem('LastName',lname);
localStorage.setItem('gmail',email);
localStorage.setItem('password',Pass);
localStorage.setItem('confirm password',ConfirmPass);

if(fname === '' && lname ==='' & email === '' & Pass === '' && ConfirmPass){
    alert('Input has no value');
    (!button)
}
else
{
    if(Pass !== ConfirmPass){
        alert('password not matching')
        (!button)
    }else{
        alert('successful operation')
        (button)
}
    }   
  })

