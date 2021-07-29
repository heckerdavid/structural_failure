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
        alert("too bad, I need this for a grade =)")
    } else {
        alert('invalid input but ok.')
    }
}

function annoyUserwithNumbers() {
    input = prompt("enter 'yes'")
    if (input === 'yes') {
        alert('thank you for following directions! goodbye')
    } else {
        alert("INVALID INPUT. Your failure to follow instructions puts us right back where we started")
        annoyUserwithNumbers()
    }
}
annoyUser();
annoyUserwithNumbers();