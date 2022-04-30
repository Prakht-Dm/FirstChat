import format from 'date-fns/format'

function addNewMessage(event){
    event.preventDefault();
    let message = this.firstElementChild.value;
    if (message & message.trim() !== ''){
    let message = this.firstElementChild.value;
    let messageTime=format(new Date(), 'HH:mm');
    
    this.firstElementChild.value = "";

    chatBlock.prepend(userMessage.content.cloneNode(true));
    chatBlock.firstElementChild.innerHTML = `<div>Я: ${message}<p>${messageTime}</p></div>`;   
}
}
function pressBtn(event){
    event.preventDefault();
    let emailAdress=inputEmail.value;  
    inputEmail.value="";
    const requestSwe = getEmailAndSendPost(emailAdress);
    
    logginPage.style.display = 'none';
    codePage.style.display = 'flex'
}
async function getEmailAndSendPost(emailAdress){
    try{

    return fetch('https://mighty-cove-31255.herokuapp.com/api/user',{
    method: "POST", 
    headers: {
        'content-type' : 'application/json;charset=utf-8',}, 
    body: JSON.stringify({email: emailAdress})});


    }
    catch(error){
        alert(error);
    }
}
sendMessage.addEventListener("submit", addNewMessage);
emailForm.addEventListener('submit', pressBtn);


document.cookie = "user=John";
alert( document.cookie );