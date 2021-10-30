const handleClick = () => {
    let buttons = document.getElementsByClassName("button");
    for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
       return console.log(buttons[i].innerHTML);
      });
}
}

    