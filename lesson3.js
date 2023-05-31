

let hasBlackJack = false
let isAlive = false
let message = ""
let cards = []
let messageEl = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

let player = {
    name: "Kalu",
    chips: 135
}

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCards() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else{
        return randomNumber
    }
    
    
}



function startGame() {
    let firstCard = getRandomCards()
    let secondCard = getRandomCards()  
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard 
    isAlive = true
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for ( let i = 0; i < cards.length; i +=1) {
        cardsEl.textContent += cards[i] + " "
    }

    if (sum < 21) {
        message = "DO you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true

    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent= message
    sumEL.textContent = "Sum: " + sum
    console.log( "Has Blackjack? : " + hasBlackJack)
    console.log("Game still alive? : " + isAlive)

}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
    let extraCard = getRandomCards()
    sum += extraCard
    cards.push(extraCard)
    renderGame()



    console.log(cards)
    }
    
 
}


//3: 21  video time


// let clubAge = 19

// console.log("Age: " + clubAge)

// if (clubAge < 21) {
//     console.log("You can not enter the club!")
// } else {
//     console.log("Welcome!")
// }

// let age = 100

// console.log("Age: " + 100)


// if (age < 100) {
//     console.log("Not elegible")
// } else if (age === 100) {
//     console.log("Here is your birhtday card from the King!")
// } else {
//     console.log("Not eligible, you have already gotten one")
// }




/* arrays are orederd list of items and are 0 indexed. They are also known as complex/composite data types
cause they mainly contain the other 3 "primitive data type": numbers, strings and buleams */

// let accountingSkiils = [
//     "financial reporting", "Tax filing", "bank reconsiliation",
//     "auditing", "payroll management", "financial analysis"
// ]

// let faturedPosts = [
//     "ceo at scrimba ", "frontend developer at xeneta", "People counter for nurstat"
// ]

// console.log(faturedPosts[2] )
// console.log(faturedPosts[1] )
// console.log(faturedPosts[0] )

// let personalInfo = ["My name is Kalu Igwe, ", "i am ", 24, "years old", "do i love pizza?", true]

// console.log(personalInfo[5])

// cards.push() is used to push additional data into the array box
// cards.pop() is used to remove the last item on an array

//  let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
//  ]

// let newMessage = "Same here!"
//  messages.push(
//     newMessage
//  )

//  console.log(messages)

//  messages.pop(
//     newMessage
//  )

//  console.log(messages)

/* counting in js: we need to specify the following:
1 where to start counting
2 where is the FINISH line?
3 whats the step size to use
e.g for (let count = 1; count < 11; count += 1) {
    console.log(count)
} */

// for (let count = 10; count < 21; count += 1) {
//     console.log(count)
// }


// for (let count = 10; count < 101 ; count += 10) {
//     console.log(count)
// }

// let cards1 = [7, 3, 9]

// for (let i = 0; i < cards1.length; i += 1) {
//     console.log(cards1[i])
// }

// let sentence = ["Hello", "my", "name", "is", "Kalu"]

// let greetingEl = document.getElementById("greeting-el")


// for (let i = 0; i < sentence.length; i += 1 ) {
//    greetingEl.textContent += sentence[i] + " "

// }

// let player1Time = 102
// let player2Time = 107

// function getTotalRaceTime() {
//    return player1Time + player2Time

// }

// let TotalRaceTime = getTotalRaceTime()

// console.log(TotalRaceTime)




// let randomNumber = Math.random() * 6

// console.log(randomNumber)

// Match.random generates a random number
// between 0 and 1 (not inclusive of 1)



// function rollDice() {
//     let flooredNumber = Math.floor(Math.random() * 6) + 1
//     return flooredNumber
    
// }
// console.log(rollDice())

// logical operator:&& operator

// let hasSolvedChallange = false
// let hasHintLeft = false


//     if (hasSolvedChallange === false && hasHintLeft === false) {
//         showSolution()
//     } else {
//         console.log("hehehe")
//     }

// function showSolution() {
//     console.log("show the solution")
// } 

// or operators:

// let likesDocumentaries = false
// let likesStartups = true

// if (likesDocumentaries ===false || likesStartups === false) {
//     console.log(recommendMovie())
// }

// function recommendMovie() {
//     console.log("Hey, chaeck out this new film we think you will like!")
// }

/*Object data type: known as composite data type cos of its ability to 
contain various data types. eg:

let player = {
    name: "Kalu",
    chips: 135
}


playerEl.textContent = player.name + ": $" + player.chips
*/

// let airBnb = {
//     name: "Kalusha Palace",
//     Address: "No 48 Okeke Street",
//     roomsAvailable: true,
//     charge: 50, 
//     operationTime: ["Mondays 2-4pm", "tuesday from 6pm", "wednesday 24hrs"]
// }
 
// console.log(airBnb.name)
// console.log(airBnb.operationTime[1])



// PRACTICE:

// let person = {
//     name: "Kalulusha",
//     age: 35,
//     country: "Nigeria",
//     single: true
// }

// function logData() {
//     console.log(person.name + " is " + person.age 
//     + " years old, " + "and lives in " + person.country)
// }



// logData()




// let age = 67


// if (age < 6) {
//     message = "free"
// } else if
// (age < 18) {
//     message = "child discount"
// } else if (age < 27) {
//     message = "student discount"
// } else if (age < 67) {
//     message = "full price"
// } else if (age > 66) {
//     message = "senior citizen discount"
// }

// console.log(age)
// console.log(message)


// let largeCountries = [
//     "china", "india", "USA", "indonesia", "pakistan"
// ]
// console.log("The 5 Largest countries in the world:")

// for (let i = 0; i < largeCountries.length; i += 1)
// console.log("- " + largeCountries[i])

// let largeCountries = ["Tuvalu", "India","USA", "indonesia", "Monaco"]
// for (let i = 0; i < largeCountries.length; i +=1)
// console.log(largeCountries[i])

// console.log("---")
// largeCountries.shift()
// largeCountries.unshift("China")
// largeCountries.pop()
// largeCountries.push("Pakistan")
// for (let i = 0; i < largeCountries.length; i +=1)
// console.log(largeCountries[i])


// let dayOfMonth = 13
// let weekday = "Friday"

// if (dayOfMonth === 13 && weekday === "Friday" )
// {console.log("HEHEHE>>>!@@@")} else {
//     console.log("Ok kontinu")
// }

// let hands = ["rock", "paper", "sciccors"]

// function game() {
//    let randomItems = Math.floor(Math.random() * 3) 
//     return hands[randomItems]
   
// }
// console.log(game())

// let fruit = ["orange", "apple", "orange", "orange", "apple"]
// let appleShelf = document.getElementById("apple-el")
// let orangeShelf = document.getElementById("orange-el")

// function arrangeFruits() {
//     for (let i = 0; i < fruit.length; i ++)
//     if (fruit[i] === "orange") {
//         orangeShelf.textContent += "Orange"+ " "
//     } else if (fruit[i] === "apple") {
//         appleShelf.textContent += "Apple"+ " "
//     }
// }

// arrangeFruits()





let myLead = `["www.awesomeleads.com]`

myLead = JSON.parse(myLead)

myLead.push("www.Obi.com")

myLead = JSON.stringify(myLead)

console.log(typeof myLead)