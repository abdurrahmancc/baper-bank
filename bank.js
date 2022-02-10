const inputEmail = document.getElementById("input-email");
const inputPass = document.querySelector("#input-pass");
const button = document.getElementById("button");
button.addEventListener("click", function(){
    if (inputEmail.value=="rahman@gmail.com" && inputPass.value=="secreat"){
        alert("hello");
        window.open ('banking.html');
    }
    else{
        alert("please Enter your currect password")
    }
})
