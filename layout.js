function switchBlur(){
    blurBlock.style.display = (blurBlock.style.display === 'none') ? 'block' : 'none'; 
}
settingsButton.addEventListener("click", switchBlur);
leaveSettings.addEventListener("click", switchBlur);

