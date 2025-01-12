import {Authorize} from "./authorize.js";

// UI

const resetpasswordform = document.getElementById('resetpasswordform');
const msg = document.getElementById('msg');

// Register 
resetpasswordform.addEventListener('submit',(e)=>{
    e.preventDefault();

    const resetemail = document.getElementById('resetemail').value.trim();

    // const authorize = Authorize();
    // authorize.loginUser(signinemail,signinpassword);

    const {resetPassword} = Authorize();
    resetPassword(resetemail,msg);

});
