// console.log('login function');
document.getElementById('btn-login').addEventListener('click',function()
{
    // 1. Get the mobile number input
    const numberInput = document.getElementById('input-number');
    const contactNumber = numberInput.value;
    console.log(contactNumber);
    // 2. Get the pin input
    const pinInput= document.getElementById('input-pin');
    const pinNumber = pinInput.value;
    console.log(pinNumber);
    // 3. Match mobile number and pin
    if(contactNumber == "01984910007" && pinNumber == "5798")
        {// 3- true: homepage
        alert('Login Success!!')
        // window.location.replace("/home.html");
        window.location.assign("./home.html");
        }
    
    // 3- false: return
    else{
        alert('Login Failed');
        return; 
    }
        
})