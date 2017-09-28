var getButton = document.getElementsByClassName('button')
for (var i = 0; i < getButton.length ; i++) {
    var navigation = document.getElementById('btn');
    console.log(navigation.nextElementSibling);
    navigation.innerHTML = 'To jest button';
    console.log(navigation)
}