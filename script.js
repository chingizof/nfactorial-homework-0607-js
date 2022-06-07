//букмекерская контора BetArystan

import { countProfit } from "./profit.js"

let player = {
    name: String,
    balance: int,
    profit,
    currentBets
}

let events = [BvR, WvsLA, KvsN] //сейчас есть 3 ивента доступные для ставки

let Nurbek = {
    name : "Nurbek",
    surname: "Bainazarov",
    balance : 2500,
    profit: 0,
    currentBid,
    BidResult,
}

delete Nurbek.surname;

let BvsR = {
    name: "Barca vs Real",
    category: "football",
    win1: 1.75,
    draw: 3.5,
    win2: 2.1,
    result: 3,
    finalProfit: 2.1
}

let WvsLA = {
    name: "Washington vs Los Asngeles",
    category: "hockey",
    win1: 1.2,
    draw: 5.5,
    win2: 4.1,
    result: 1,
    finalProfit: 1.2
}

let KvsN = {
    name: "Khabib vs Nurmagomedov",
    category: "mma",
    win1: 1.03,
    draw: 10.5,
    win2: 7.1,
    result: 2,
    finalProfit: 10.5
}

function makeBet(player, result,  ...events) {
    let customerChoice
    let event = true ? events[customerChoice] : events[0]

    player.currentBid = event.name
    player.BidResult = result

    console.log("event has started:")
    console.log("===============")

    if (event.result == player.BidResult) { //если ставка выиграла
        console.log("Congratulation! You have won!")
        player.balance *= event.finalProfit
    } else {
        player.balance /= 2
        console.log("You have lost")
    }

    console.log("your balance:", player.balance)

    if (player.balance > 5000) {
        console.log(`WOW! LOOKS LIKE YOU HAVE INCREASED YOUR INITIAL BALANCE BY ${countProfit(player)}`)
    }
}

let mmaEvents = events.filter( event => event.category ==="mma" ) 

