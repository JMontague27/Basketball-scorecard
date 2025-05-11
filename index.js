let homeScoreBtnOne = document.getElementById("home-+1-btn")
let homeScoreBtnTwo = document.getElementById("home-+2-btn")
let homeScoreBtnThree = document.getElementById("home-+3-btn")
let homeSc = document.getElementById("home-score")
let homeScore = 0

function homeAddOne() {
    homeScore += 1
    homeSc.textContent = homeScore
}

function homeAddTwo() {
    homeScore += 2
    homeSc.textContent = homeScore
}
function homeAddThree() {
    homeScore += 3
    homeSc.textContent = homeScore
}

let guestScoreBtnOne = document.getElementById("guest-+1-btn")
let guestScoreBtnTwo = document.getElementById("guest-+2-btn")
let guestScoreBtnThree = document.getElementById("guest-+3-btn")
let guestSc = document.getElementById("guest-score")
let guestScore = 0

function guestAddOne() {
    guestScore += 1
    guestSc.textContent = guestScore
}

function guestAddTwo() {
    guestScore += 2
    guestSc.textContent = guestScore
}
function guestAddThree() {
    guestScore += 3
    guestSc.textContent = guestScore
}

function newGame() {
    homeScore = 0
    guestScore = 0

    homeSc.textContent = 0
    guestSc.textContent = 0
}

