var score = 0;
var scorePerSecond = 0;
var clickingPower = 1;
var clickingPowerMultiplier = 0;
var cursors = 0;
var cursorValue = 1;
var cursorCost = 10;
var grannys = 0;
var grannyValue = 3;
var grannyCost = 250;
var ovens = 0;
var ovenValue = 8;
var ovenCost = 5000;
var factorys = 0;
var factoryValue = 50;
var factoryCost = 100000;

function addScore(amount) {
    score = score + amount;
    document.getElementById('score').innerHTML = score.toFixed(2)
}

function buyCursor() {
    if (score >= cursorCost) {
        scorePerSecond += cursorValue * .75
        clickingPowerMultiplier = (clickingPower / 15) + (cursorValue / 10)

        clickingPower = clickingPower + (clickingPowerMultiplier / 5)
        amount = cursorCost
        cursors = cursors + 1
        score = score - cursorCost
        cursorCost = Math.round(cursorCost * 1.22)
        document.getElementById('score').innerHTML = score.toFixed(2)
        document.getElementById('cursorCost').innerHTML = cursorCost
        document.getElementById('cursors').innerHTML = cursors
        document.getElementById('cps').innerHTML = scorePerSecond
        document.getElementById('cpc').innerHTML = clickingPower.toFixed(2)
    }
}

function buyGranny() {

    if (score >= grannyCost) {
        scorePerSecond += grannyValue * .75
        clickingPowerMultiplier = (clickingPower / 15) + (grannyValue / 10)

        clickingPower = clickingPower + (clickingPowerMultiplier / 5)
        amount = grannyCost
        grannys = grannys + 1
        score = score - grannyCost
        grannyCost = Math.round(grannyCost * 1.22)
        document.getElementById('score').innerHTML = score.toFixed(2)
        document.getElementById('grannyCost').innerHTML = grannyCost
        document.getElementById('grannys').innerHTML = grannys
        document.getElementById('cps').innerHTML = scorePerSecond
        document.getElementById('cpc').innerHTML = clickingPower.toFixed(2)

    }
}

function buyOven() {
    if (score >= ovenCost) {
        scorePerSecond += ovenValue * .75
        clickingPowerMultiplier = (clickingPower / 15) + (ovenValue / 10)
        clickingPower = clickingPower + (clickingPowerMultiplier / 5)
        amount = ovenCost
        ovens = ovens + 1
        score = score - ovenCost
        ovenCost = Math.round(ovenCost * 1.22)
        document.getElementById('score').innerHTML = score.toFixed(2)
        document.getElementById('ovenCost').innerHTML = ovenCost
        document.getElementById('ovens').innerHTML = ovens
        document.getElementById('cps').innerHTML = scorePerSecond
        document.getElementById('cpc').innerHTML = clickingPower.toFixed(2)

    }
}

function buyFactory() {
    if (score >= factoryCost) {
        scorePerSecond += factoryValue * .5
        clickingPowerMultiplier = (clickingPower / 15) + (factoryValue / 10)
        clickingPower = clickingPower + (clickingPowerMultiplier / 5)
        amount = factoryCost
        factorys = factorys + 1
        score = score - factoryCost
        factoryCost = Math.round(factoryCost * 1.22)
        document.getElementById('score').innerHTML = score.toFixed(2)
        document.getElementById('factoryCost').innerHTML = factoryCost
        document.getElementById('factorys').innerHTML = factorys
        document.getElementById('cps').innerHTML = scorePerSecond
        document.getElementById('cpc').innerHTML = clickingPower.toFixed(2)

    }
}
setInterval(function() {
    score = score + scorePerSecond
    document.getElementById('score').innerHTML = score.toFixed(2)

}, 1000)