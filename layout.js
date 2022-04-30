function switchBlur(){
    blurBlock.style.display = (blurBlock.style.display === 'block') ? 'none' : 'block'; 
    settingsBlock.style.display = (settingsBlock.style.display === 'flex') ?'none' : 'flex';
    codePage.style.display = 'none';
}
function closeLogginPageAndOpenCodePage(){
    logginPage.style.display = 'none';
    codePage.style.display = 'flex'
}
settingsButton.addEventListener("click", switchBlur);
leaveSettings.addEventListener("click", switchBlur);
leaveCode.addEventListener("click", switchBlur);
leaveLoggin.addEventListener("click", closeLogginPageAndOpenCodePage);

