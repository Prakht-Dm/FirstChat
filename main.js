function addNewMessage(event){
    event.preventDefault();
    if (this.firstElementChild.value){
    let message = this.firstElementChild.value;
    this.firstElementChild.value = "";
    chatBlock.append(userMessage.content.cloneNode(true));
    chatBlock.lastElementChild.firstElementChild.innerHTML = `${message}<p>TIME</p>`;
}
}
sendMessage.addEventListener("submit", addNewMessage);