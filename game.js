const cardsColor = [  "red",  "red",  "yellow",  "yellow",  "green","green",  "pink", "pink",  "violet",  "violet","grey","grey","teal","teal",  "royalblue","royalblue", "orange", "orange", 
]

let movement = document.querySelector('.count');

const countField = document.querySelector('.count')

let counting = 0


console.log(movement)

let cards = [...(document.querySelectorAll('div'))]

console.log(cards)

let movements = 0;


let activeCard = "";
const activeCards = []

const clickCard  = function () {

    activeCard = this

    if(activeCard == activeCards[0]){
        return
    }
    activeCard.classList.remove("hidden")
    

    if(activeCards.length === 0) {
        activeCards[0]  = activeCard
        console.log(activeCards[0])
        
        return
    }  

    else {
        cards.forEach(card =>  {
            card.removeEventListener("click", clickCard)
            
        })
        activeCards[1] = activeCard;
        console.log(activeCards[1])
        setTimeout(function (){
            if(activeCards[0].className === activeCards[1].className) {
                console.log("win")
                activeCards.forEach(card => card.classList.add('off'))
                gameResult++
                counting++
                countField.innerHTML = counting
                
                if(gameResult === gamePairs) {
                    console.log('gra wygrana')
                    location.reload();
                }else {
                    console.log('graj dalej')
                   
                }
            }else {
                console.log('lose')
                activeCards.forEach(card => card.classList.add('hidden'))
                counting++
                countField.innerHTML = counting
            }

            activeCard = "";
            activeCards.length = 0;
            cards.forEach(card => card.addEventListener("click",clickCard))
        },1000)

        
    }

}

const startTimeGame = new Date().getTime();



const gamePairs = cards.length/2
let gameResult = 0;


const start = function() {
    cards.forEach(function (item) {
        const position = Math.floor(Math.random()*cardsColor.length)
        item.classList.add(cardsColor[position])
        cardsColor.splice(position,1)
    })

    setTimeout( function () {
        cards.forEach(function (card){
            card.classList.add("hidden")
            card.addEventListener ("click", clickCard)
        })        
    }, 2000 )
}

start()