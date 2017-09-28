var getButton = document.getElementsByClassName('button')
for (var i = 0; i < getButton.length ; i++) {
    var text = document.createElement('p');
    text.innerHTML = 'To jest button';
    console.log(text)
}