var score = 0;
var scorePerSecond = 0;
var clickingPower = 1;
var clickingPowerMultiplier = 0;
//new version for all buyable objects, index 1 is for quantity, 2 for value, 3 for cost
var cursor = [0, 0.1, 15]
var oven = [0, 8, 1100]
var granny = [0, 1, 100]
var factory = [0, 47, 12000]
var shipment = [0, 100, 250000]
    //upgrades, index 0 is quantity, 1 is multiplier, 2 is cost
var cursorUpgrades = [0, 1, 100]
var grannyUpgrades = [0, 1, 5000]
var ovenUpgrades = [0, 1, 11000]
var factoryUpgrades = [0, 1, 120000]
var shipmentUpgrades = [0, 1, 2500000]


function addScore(amount) {
    score = score + amount;
    document.getElementById('score').innerHTML = score.toFixed(2)
}

function buyCursor() {
    let i = 0
    if (score >= cursor[2]) {
        scorePerSecond += cursor[1]
        cursor[0] = cursor[0] + 1
        score = score - cursor[2]
        cursor[2] = Math.round(cursor[2] * 1.15)
        document.getElementById('score').innerHTML = score.toFixed(2)
        document.getElementById('cursorCost').innerHTML = cursor[2]
        document.getElementById('cursors').innerHTML = cursor[0]
        document.getElementById('cps').innerHTML = scorePerSecond.toFixed(2)
        document.getElementById('cpc').innerHTML = clickingPower.toFixed(2)
        if (cursorUpgrades[0] == 0 && cursor[0] == 15 && i == 0) {
            document.getElementById('upgrades').innerHTML += '<button onclick="cursorUpgrade()">Upgrade cursors: <br>Cost: <span id="cursorUpgradeCost">100</span> </button>' +
                '<span>Makes cursors and mouseclicks twice as efficient</span>'
            i = 1
        }
    }

}

function buyGranny() {
    let i = 0
    if (score >= granny[2]) {
        scorePerSecond += granny[1]
        granny[0] = granny[0] + 1
        score = score - granny[2]
        granny[2] = Math.round(granny[2] * 1.14)
        document.getElementById('score').innerHTML = score.toFixed(2)
        document.getElementById('grannyCost').innerHTML = granny[2]
        document.getElementById('grannys').innerHTML = granny[0]
        document.getElementById('cps').innerHTML = scorePerSecond.toFixed(2)
        document.getElementById('cpc').innerHTML = clickingPower.toFixed(2)
        if (grannyUpgrades[0] == 0 && granny[0] == 15 && i == 0) {
            document.getElementById('upgrades').innerHTML += '<button onclick="grannyUpgrade()">Upgrade grannies: <br>Cost: <span id="grannyUpgradeCost">5000</span> </button>' +
                '<span>Makes grannies twice as efficient</span>'
            i = 1
        }
    }

}

function buyOven() {
    let i = 0
    if (score >= oven[2]) {
        scorePerSecond += oven[1]
        oven[0] = oven[0] + 1
        score = score - oven[2]
        oven[2] = Math.round(oven[2] * 1.14)
        document.getElementById('score').innerHTML = score.toFixed(2)
        document.getElementById('ovenCost').innerHTML = oven[2]
        document.getElementById('ovens').innerHTML = oven[0]
        document.getElementById('cps').innerHTML = scorePerSecond.toFixed(2)
        document.getElementById('cpc').innerHTML = clickingPower.toFixed(2)
        if (ovenUpgrades[0] == 0 && oven[0] == 15 && i == 0) {
            document.getElementById('upgrades').innerHTML += '<button onclick="ovenUpgrade()">Upgrade ovens: <br>Cost: <span id="ovenUpgradeCost">11000</span> </button>' +
                '<br> <span>Makes ovens twice as efficient</span>'
            i = 1
        }
    }

}

function buyFactory() {
    let i = 0
    if (score >= factory[2]) {
        scorePerSecond += factory[1]
        factory[0] = factory[0] + 1
        score = score - factory[2]
        factory[2] = Math.round(factory[2] * 1.14)
        document.getElementById('score').innerHTML = score.toFixed(2)
        document.getElementById('factoryCost').innerHTML = factory[2]
        document.getElementById('factorys').innerHTML = factory[0]
        document.getElementById('cps').innerHTML = scorePerSecond.toFixed(2)
        document.getElementById('cpc').innerHTML = clickingPower.toFixed(2)
        if (factoryUpgrades[0] == 0 && factory[0] == 15 && i == 0) {
            document.getElementById('upgrades').innerHTML += '<button onclick="factoryUpgrade()">Upgrade factories: <br>Cost: <span id="factoryUpgradeCost">120000</span> </button>' +
                '<span>Makes factories twice as efficient</span>'
            i = 1
        }
    }


}

function buyShipment() {
    let i = 0
    if (score > shipment[2]) {
        scorePerSecond -= (shipment[1] * shipment[0])
        score = score - shipment[2]
        shipment[0] += 1
        shipment[1] = shipment[1] * 2
        shipment[2] = Math.round(shipment[2] * 3.33)
        shipment[1] = shipment[1] * 2
        scorePerSecond += (shipment[1] * shipment[0])
        document.getElementById('shipmentCost').innerHTML = shipment[2].toFixed(2)
        document.getElementById('shipments').innerHTML = shipment[0]
        document.getElementById('score').innerHTML = score.toFixed(2)
        document.getElementById('cps').innerHTML = scorePerSecond.toFixed(2)
        document.getElementById('cpc').innerHTML = clickingPower.toFixed(2)
        if (shipmentUpgrades[0] == 0 && shipment[0] == 15 && i == 0) {
            document.getElementById('upgrades').innerHTML += '<button onclick="shipmentUpgrade()">Upgrade shipments: <br>Cost: <span id="shipmentUpgradeCost">2500000</span> </button>' +
                '<span>Makes shipments twice as efficient</span>'
            i = 1
        }

    }

}

function cursorUpgrade() {
    if (score > cursorUpgrades[2]) {
        scorePerSecond -= (cursor[1] * cursor[0])
        score = score - cursorUpgrades[2]
        cursorUpgrades[0] += 1
        cursorUpgrades[1] = cursorUpgrades[1] * 2
        cursorUpgrades[2] = Math.round(cursorUpgrades[2] * 3.33)
        clickingPower = clickingPower * 2
        cursor[1] = cursor[1] + cursor[1]
        scorePerSecond += cursor[1] * cursor[0]
        document.getElementById('cursorUpgradeCost').innerHTML = cursorUpgrades[2].toFixed(2)
        document.getElementById('score').innerHTML = score.toFixed(2)
        document.getElementById('cps').innerHTML = scorePerSecond.toFixed(2)
        document.getElementById('cpc').innerHTML = clickingPower.toFixed(2)
    }
}

function grannyUpgrade() {
    if (score > grannyUpgrades[2]) {
        scorePerSecond -= (granny[1] * granny[0])
        score = score - grannyUpgrades[2]
        grannyUpgrades[0] += 1
        grannyUpgrades[1] = grannyUpgrades[1] * 2
        grannyUpgrades[2] = Math.round(grannyUpgrades[2] * 3.33)
        granny[1] = granny[1] + granny[1]
        scorePerSecond += granny[1] * granny[0]
        document.getElementById('grannyUpgradeCost').innerHTML = grannyUpgrades[2].toFixed(2)
        document.getElementById('score').innerHTML = score.toFixed(2)
        document.getElementById('cps').innerHTML = scorePerSecond.toFixed(2)
        document.getElementById('cpc').innerHTML = clickingPower.toFixed(2)
    }
}

function ovenUpgrade() {
    if (score > ovenUpgrades[2]) {
        scorePerSecond -= (oven[1] * oven[0])
        score = score - ovenUpgrades[2]
        ovenUpgrades[0] += 1
        ovenUpgrades[1] = ovenUpgrades[1] * 2
        ovenUpgrades[2] = Math.round(ovenUpgrades[2] * 3.33)
        oven[1] = oven[1] * 2
        scorePerSecond += (oven[1] * oven[0])
        document.getElementById('ovenUpgradeCost').innerHTML = ovenUpgrades[2].toFixed(2)
        document.getElementById('score').innerHTML = score.toFixed(2)
        document.getElementById('cps').innerHTML = scorePerSecond.toFixed(2)
        document.getElementById('cpc').innerHTML = clickingPower.toFixed(2)
    }
}

function shipmentUpgrade() {
    if (score > shipmentUpgrades[2]) {
        scorePerSecond -= (shipment[1] * shipment[0])
        score = score - shipmentUpgrades[2]
        shipmentUpgrades[0] += 1
        shipmentUpgrades[1] = shipmentUpgrades[1] * 2
        shipmentUpgrades[2] = Math.round(shipmentUpgrades[2] * 3.33)
        shipment[1] = shipment[1] * 2
        scorePerSecond += (shipment[1] * shipment[0])
        document.getElementById('shipmentUpgradesCost').innerHTML = shipmentUpgrades[2].toFixed(2)
        document.getElementById('score').innerHTML = score.toFixed(2)
        document.getElementById('cps').innerHTML = scorePerSecond.toFixed(2)
        document.getElementById('cpc').innerHTML = clickingPower.toFixed(2)
    }
}


function saveGame() {
    var gameSave = {
        score: score,
        scorePerSecond: scorePerSecond,
        clickingPower: clickingPower,
        clickingPowerMultiplier: clickingPower,
        cursor: cursor,
        granny: granny,
        oven: oven,
        factory: factory,
        cursorUpgrades: cursorUpgrades,
        grannyUpgrades: grannyUpgrades,
        ovenUpgrades: ovenUpgrades,
        factoryUpgrades: factoryUpgrades
    };
    localStorage.setItem('gameSave', JSON.stringify(gameSave));
}

function loadGame() {
    var savedGame = JSON.parse(localStorage.getItem('gameSave'));
    if (typeof savedGame.score !== "undefined") score = savedGame.score
    if (typeof savedGame.scorePerSecond !== "undefined") scorePerSecond = savedGame.scorePerSecond
    if (typeof savedGame.clickingPower !== "undefined") clickingPower = savedGame.clickingPower
    if (typeof savedGame.clickingPowerMultiplier !== "undefined") clickingPowerMultiplier = savedGame.clickingPowerMultiplier
    if (typeof savedGame.cursor !== "undefined") cursor = savedGame.cursor
    if (typeof savedGame.granny !== "undefined") granny = savedGame.granny
    if (typeof savedGame.oven !== "undefined") oven = savedGame.oven
    if (typeof savedGame.factory !== "undefined") factory = savedGame.factory
    if (typeof savedGame.cursorUpgrades !== "undefined") cursorUpgrades = savedGame.cursorUpgrades
    if (typeof savedGame.grannyUpgrades !== "undefined") grannyUpgrades = savedGame.grannyUpgrades
    if (typeof savedGame.ovenUpgrades !== "undefined") ovenUpgrades = savedGame.ovenUpgrades
    if (typeof savedGame.factoryUpgrades !== "undefined") factoryUpgrades = savedGame.factoryUpgrades
}
window.onload = function() {
    loadGame();
    if (cursorUpgrades[0] >= 0 && cursor[0] >= 15) {
        document.getElementById('upgrades').innerHTML += '<button onclick="cursorUpgrade()">Upgrade cursors: <br>Cost: <span id="cursorUpgradeCost">100</span> </button>' + '<br>' +
            '<span>Makes cursors and mouseclicks twice as efficient</span>'
    }
    if (grannyUpgrades[0] >= 0 && granny[0] >= 15) {
        document.getElementById('upgrades').innerHTML += '<button onclick="grannyUpgrade()">Upgrade grannies: <br>Cost: <span id="grannyUpgradeCost">5000</span> </button>' + '<br>' +
            '<span>Makes grannies twice as efficient</span>' + '<br>'
    }
    if (ovenUpgrades[0] >= 0 && oven[0] >= 15) {
        document.getElementById('upgrades').innerHTML += '<button onclick="ovenUpgrade()">Upgrade ovens: <br>Cost: <span id="ovenUpgradeCost">11000</span> </button>' + '<br>' +
            '<span>Makes ovens twice as efficient</span>'
    }
    if (factoryUpgrades[0] >= 0 && factory[0] >= 15) {
        document.getElementById('upgrades').innerHTML += '<button onclick="factoryUpgrade()">Upgrade factories: <br>Cost: <span id="factoryUpgradeCost">120000</span> </button>' +
            '<br>' + '<span>Makes factories twice as efficient</span>'
    }
    if (factoryUpgrades[0] >= 0 && shipment[0] >= 15) {
        document.getElementById('upgrades').innerHTML += '<button onclick="shipmentUpgrade()">Upgrade shipments: <br>Cost: <span id="shipmentUpgradeCost">250000</span> </button>' +
            '<br>' + '<span>Makes shipments twice as efficient</span>'
    }

    document.getElementById('score').innerHTML = score.toFixed(2)
    document.getElementById('cursorCost').innerHTML = cursor[2]
    document.getElementById('cursors').innerHTML = cursor[0]
    document.getElementById('grannyCost').innerHTML = granny[2]
    document.getElementById('grannys').innerHTML = granny[0]
    document.getElementById('ovenCost').innerHTML = oven[2]
    document.getElementById('ovens').innerHTML = oven[0]
    document.getElementById('factoryCost').innerHTML = factory[2]
    document.getElementById('factorys').innerHTML = factory[0]
    document.getElementById('shipmentCost').innerHTML = shipment[2]
    document.getElementById('shipments').innerHTML = shipment[0]
    document.getElementById('cursorUpgradeCost').innerHTML = cursorUpgrades[2].toFixed(2)
    document.getElementById('grannyUpgradeCost').innerHTML = grannyUpgrades[2].toFixed(2)
    document.getElementById('ovenUpgradeCost').innerHTML = ovenUpgrades[2].toFixed(2)
    document.getElementById('factoryUpgradeCost').innerHTML = factoryUpgrades[2].toFixed(2)
    document.getElementById('factoryUpgradeCost').innerHTML = shipmentUpgrades[2].toFixed(2)
    document.getElementById('cps').innerHTML = scorePerSecond.toFixed(2)
    document.getElementById('cpc').innerHTML = clickingPower.toFixed(2)

}

setInterval(function() {
    saveGame();
}, 30000)

function resetGame() {
    if (confirm('Are you sure you want to reset your game?')) {
        var gameSave = {}
        localStorage.setItem('gameSave', JSON.stringify(gameSave))
        location.reload()
    }
}


setInterval(function() {
    score = score + scorePerSecond
    document.getElementById('score').innerHTML = score.toFixed(2)

}, 1000)

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.which == 83) {
        event.preventDefault()
        saveGame()
    }
}, false)