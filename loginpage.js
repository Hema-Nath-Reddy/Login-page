function check(){
    let a=document.getElementById("username").value;
    let b=document.getElementById("password").value;
    if(a.toLowerCase()=="admin"&&b.toLowerCase()==="password"){
        alert("Username and Password successfully authorised. Please continue.");
    }else{
        alert("Username or Password entered is wrong.");
    }
}
function clicked(){
    //this will make login page disapper and registration page appear
    document.getElementById("a").style.opacity="0";
    document.getElementById("a").style.visibility="hidden";
    document.getElementById("c").style.opacity="1";
    document.getElementById("c").style.visibility="visible";  
}
function clickeD(){
    //This will make Forgot password page disapper and login page appear
    document.getElementById("d").style.opacity="0";
    document.getElementById("d").style.visibility="hidden";
    document.getElementById("a").style.opacity="1";
    document.getElementById("a").style.visibility="visible";  
}
function Clicked(){
    //This will make registration page disapper and forgot password page appear
    document.getElementById("c").style.opacity="0";
    document.getElementById("c").style.visibility="hidden";
    document.getElementById("d").style.opacity="1";
    document.getElementById("d").style.visibility="visible";
}
function clIcked(){
    //This will make forgot password page disapper and login page appear
    document.getElementById("c").style.opacity="0";
    document.getElementById("c").style.visibility="hidden";
    document.getElementById("a").style.opacity="1";
    document.getElementById("a").style.visibility="visible";
}
