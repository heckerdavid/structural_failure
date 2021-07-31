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
        alert('You said the magic word! Great work')
    } else {
        alert("INVALID INPUT. restarting. (sorry)")
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

let link_list = ['<a href="https://cardano.org/">Have you ever heard of Cardano?</a>', '<a href="https://bitcoin.org/bitcoin.pdf">Learn about Bitcoin</a>', '<a href="https://polkadot.network/">Learn about Polkadot here</a>', '<a href="https://ethereum.org/en/">Read about the Ethereum network</a>']
let used_links = []

function addRandLink() {
    let position = Math.floor(Math.random() * (link_list.length));
    let choice = link_list[position];
    if (used_links.includes(choice)) {
        addRandLink();
        console.log('continue');
    } else {
        document.write(choice);
        console.log(choice);
        used_links.push(choice);
        console.log(used_links);
    }
}