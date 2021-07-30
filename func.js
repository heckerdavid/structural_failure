function incrementButton() {
    let element = document.getElementById('incrementText');
    let value = element.innerHTML;
    let num = parseInt(value);

    num += 1;

    console.log(num);
    document.getElementById('incrementText').innerHTML = num;
}

function annoyUser() {
    input = prompt("do you like pop-ups? (yes/no)")
    if (input.toLowerCase() == "yes" ) {
        alert('good, here\'s another')
    } else if (input.toLowerCase() == "no") {
        alert("I am sorry but I need this for a grade =)")
    } else {
        alert('invalid input. Goodbye')
    }
}

function annoyUserwithNumbers() {
    input = prompt("please enter 'yes'")
    if (input === 'yes') {
        alert('You said the magic word! Welcome to the site')
    } else {
        alert("INVALID INPUT. restarting")
        annoyUserwithNumbers()
    }
}

function addImage() {
    let x = prompt('How many stars would you give cryptocurrency?');
    let num = parseInt(x)
    for (let i = 0; i < num; i++) {
        document.write('<img src="https://freesvg.org/img/3D-Spiral-Star.png"></img>' + (i+1));
    }

}
annoyUser();
annoyUserwithNumbers();