const display_content = document.getElementById("display")
display_content.style.color = "red"
display_content.innerText = "ddddd"

const button_ca = document.getElementById("bt-ca")
button_ca.style.background = "green"

const button8 = document.getElementById("bt-8")
button8.style.fontSize = "70px"

const btnNr = document.getElementsByClassName("button-number")
for (let i = 0; i < btnNr.length; i++) {
    if (i % 2 === 0) {
        btnNr[i].style.background = "pink"
    } else {
        btnNr[i].style.background = "yellow"
    }
}
function dzielenie (a,b) {
    const wynik = a/b
    console.log(wynik)
    return wynik;
}

dzielenie (10,2)

