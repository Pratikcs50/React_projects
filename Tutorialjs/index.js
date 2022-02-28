let player={
    name : "Pratik",
    chips: "500"
}
let card=[]
let sum =0 
let hasBlackJack = false
let isAlive = false
let message = ""
// let sumEl = document.getElementById("sum-el")
let playerEl=document.querySelector("#player-el")
let messageEL = document.getElementById("message-el")
playerEl.textContent=player.name+": $"+player.chips
// cardEl.textContent= firstCard + " " + secondCard
let newEL=document.querySelector("#new-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")
function startGame(){
    isAlive=true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    card=[firstCard,secondCard]
    sum = card[0] + card[1]


    renderGame()
}
function getRandomCard(){
    let rangen= Math.floor(Math.random()*12 + 1)
    if(rangen===1){
        return 11
    }else if(rangen>10){
        return 10
    }else{
        return rangen
    }
}
function renderGame() {

    if (sum <= 20) {
        cardEl.textContent="CARDS: "
        for(let i=0;i<card.length;i++){
            cardEl.textContent+=card[i]+" "
        }

        sumEl.textContent="SUM: "+sum
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        cardEl.textContent="CARDS: "
        for(let i=0;i<card.length;i++){
            cardEl.textContent+=card[i]+" "
        }
        sumEl.textContent="SUM: "+sum
        message = "Wohoo! You've got Blackjack!🥳"
        hasBlackJack = true
    } else {
        cardEl.textContent="CARDS: "
        for(let i=0;i<card.length;i++){
            cardEl.textContent+=card[i]+" "
        }
        sumEl.textContent="SUM: "+sum
        message = "You're out of the game!😭"
        isAlive = false
    }
    messageEL.textContent=message;   
}
function newCard(){
    if(isAlive===true && hasBlackJack===false){
    let card1=getRandomCard()
    card.push(card1)
    sum=sum+card1
    renderGame()
    }
}