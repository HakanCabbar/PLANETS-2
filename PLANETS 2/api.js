const space = {
    mercury: {
        gravity: 0.38,
        image: "mercury.png"
    },
    venus: {
        gravity: 0.91,
        image: "venus.png"
    },
    earth: {
        gravity: 1.0,
        image: "earth.png"
    },
    mars: {
        gravity: 0.38,
        image: "mars.png"
    },
    jupiter: {
        gravity: 2.34,
        image: "jupiter.png"
    },
    saturn: {
        gravity: 0.93,
        image: "saturn.png"
    },
    uranus: {
        gravity: 0.92,
        image: "uranus.png"
    },
    neptune: {
        gravity: 1.12,
        image: "neptune.png"
    },
    pluto: {
        gravity: 1.43,
        image: "pluto.png"
    }
}

let kg = document.getElementById("kg")
const select = document.getElementById("Planets")
const hesapla = document.getElementById("calculate")
let text = document.getElementById("text")
const img = document.getElementById("planetImage")


hesapla.addEventListener("click", function () {

    if (kg.value == 0 || kg.value === "") {


        text.textContent = `Mass is required `
    } else {


        let imgSrc = space[select.value].image
        img.src = `images/${imgSrc}`;

        let gravity = space[select.value].gravity
        let name = select.value


        let weight = Number(kg.value) * gravity
        text.style.color = "black"

        text.textContent = `The weigh of the object  on ${name}  ${weight} N.`
        kg.value = ""

    }

})