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

let awayScoreBtnOne = document.getElementById("away-+1-btn")
let awayScoreBtnTwo = document.getElementById("away-+2-btn")
let awayScoreBtnThree = document.getElementById("away-+3-btn")
let awaySc = document.getElementById("away-score")
let awayScore = 0

function awayAddOne() {
    awayScore += 1
    awaySc.textContent = awayScore
}

function awayAddTwo() {
    awayScore += 2
    awaySc.textContent = awayScore
}
function awayAddThree() {
    awayScore += 3
    awaySc.textContent = awayScore
}

function newGame() {
    homeScore = 0
    awayScore = 0

    homeSc.textContent = 0
    awaySc.textContent = 0
}

