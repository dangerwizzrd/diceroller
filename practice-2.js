let myCharOne = {
    name: 'Zolda',
    class: 'Wizard',
    maxHp: 90,
    currentHp: 75,
    armorClass: 16,
    atkBonus: 7,
    magicBonus: 10
}

let myCharTwo = {
    name: 'Rollo',
    class: 'Sorcerer',
    maxHp: 100,
    currentHp: 85,
    armorClass: 15,
    atkBonus: 6,
    magicBonus: 11
}


//  Version 2

function diceRoll(min, max) {
    let mathLogic = Math.floor(Math.random() * (max - min + 1)) + min;
    return mathLogic
}

function atkRoll(diceResult) {
    return diceResult += myCharOne.atkBonus;
}

function makeAtk(minimum, maximum) {
    let theRoll = diceRoll(minimum, maximum);
    let addingBonus = atkRoll(theRoll);
    let printedStatement = `You rolled a ${theRoll} for a total of ${addingBonus}!`;
    if (theRoll == 20) {
        return `Critical Hit!! ` + printedStatement;
    } else if (theRoll == 1){
    return `Critical Miss!! ` + printedStatement;
    } else
    return printedStatement;
}

console.log(makeAtk(1, 20))