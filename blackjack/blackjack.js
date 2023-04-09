
let message = " ";
let firstCard;
let secondCard;
let sum = 0;
let messageEl = document.getElementById("message-el");
//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#card-el");

function startGame()
{
    firstCard=parseInt(10*Math.random()) + 2;
    secondCard = parseInt(10*Math.random()) + 2;
    sum= firstCard + secondCard;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    }    
    else if (sum === 21) {
        message = "Blackjack!";
    }
    else
    {
        message = "Game over";
    }
    cardEl.textContent += firstCard +" "+ secondCard;
    messageEl.textContent = message;
    sumEl.textContent += sum;
}

function newCard()
{
    if(sum <= 20)
    {
        let thirdCard= parseInt(10*Math.random()) + 2;
        sum += thirdCard;
        if(sum == 21)
        {
            message = "Blackjack";
        }
        else if(sum > 21)
        {
            message = "Game over";
        }
        sumEl.textContent = "Sum :";
        sumEl.textContent +=" "+ sum;
        cardEl.textContent += " " + thirdCard;
        messageEl.textContent = message;
    }
    else if(sum>=21)
    {
        messageEl.textContent = "Cant have any more cards. Sum is over 21";
    }
}

function reset()
{
    
    messageEl.textContent = "Want to play a round?";
    cardEl.textContent = "Cards :";
    sumEl.textContent = "Sum : ";
}