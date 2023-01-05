const btn=document.querySelector(".btn");

const input=document.getElementById("input");

const copyclipboard=document.querySelector(".fa-clipboard");

const alertContainer=document.querySelector(".alert-container");

copyclipboard.addEventListener("click",()=>{
    copyPassword();
    if(input.value){
        alertContainer.classList.remove("active");
        setTimeout(() => {
            alertContainer.classList.add("active");
            }, 1000);
    }
})

btn.addEventListener("click",()=>{
    createPassword();
   
})

function createPassword(){
const chars="OPQRSTUVW0987654321XYZabcdefghijklmnopqrstuvwxyz{}*&^%$#@!~\]/.,;'ˇƒ";
const passwordlength=14;
var password=" "
for(let index=0;index<passwordlength;index++){
    const randomNo=Math.floor(Math.random()*chars.length);
password+=chars.substring(randomNo,randomNo+1);
}
input.value=password;
alertContainer.innerText=password+" copied!"
}
function copyPassword(){
    input.select()
    input.setSelectionRange(0,9999);//this is for mobile
navigator.clipboard.writeText(input.value);

}







