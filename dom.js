var getButton = document.getElementsByClassName('button')
for (var i = 0; i < getButton.length ; i++) {
    console.log(getButton.indexOf(getButton[i]))
    getButton.innerHTML = 'To jest button';
    console.log(getButton)
}