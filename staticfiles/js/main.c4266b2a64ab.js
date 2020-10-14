const passwordInput = document.querySelector("#input-password");
const toggleButton = document.querySelector("#show-password");
const showIcon = document.querySelector("#show-icon");
const hideIcon = document.querySelector("#hide-icon");
let show = false;

toggleButton.addEventListener("click", toggleView);
function toggleView(e){
    e.preventDefault();
    if(show){
        passwordInput.setAttribute("type", "password");
        showIcon.style.display = "inline";
        hideIcon.style.display = "none";
        show = false;
    }else{
        passwordInput.setAttribute("type", "text");
        hideIcon.style.display = "inline";
        showIcon.style.display = "none";
        show = true;
    }

}