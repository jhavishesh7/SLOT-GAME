//1.Deposit some money
//2.Determine the number of line to bet on
//3.Collect the bet amount
//4.Spin the slot machine
//5.Check the user(loss or win)
//6.give the user the winning amount
//play again or quit

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLUMNS = 3;
const SYMBOL_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8,
};

const SYMBOLS = Object.keys(SYMBOL_COUNT);
const SYMBOL_VALUE = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2,
};

function deposit() {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);
        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid Input, Try again");
        } else {
            return numberDepositAmount;
        }
    }
}

function getNumberOfLines() {
    while (true) {
        const lines = prompt("Enter the number of lines you wanna bet on (1-3): ");
        const numberOfLines = parseFloat(lines);
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid Input, Try again");
        } else {
            return numberOfLines;
        }
    }
}

function getBet(balance, lines) {
    while (true) {
        const bet = prompt("Enter the total amount you wanna bet per line: ");
        const numberBet = parseFloat(bet);
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Invalid Input, Try again");
        } else {
            return numberBet;
        }
    }
}

function spin() {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOL_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }

    const reels = [];
    for (let i = 0; i < COLUMNS; i++) {
        reels.push([]);
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }
    return reels;
}

function transpose(reels) {
    const rows = [];
    for (let i = 0; i < ROWS; i++) {
        rows.push([]);
        for (let j = 0; j < COLUMNS; j++) {
            rows[i].push(reels[j][i]);
        }
    }
    return rows;
}

function printRows(rows) {
    for (const row of rows) {
        let rowString = "";
        for (const [i, symbol] of row.entries()) {
            rowString += symbol;
            if (i != row.length - 1) {
                rowString += " | ";
            }
        }
        console.log(rowString);
    }
}

function getWinnings(rows, bet, lines) {
    let winnings = 0;

    for (let row = 0; row < lines; row++) {
        const symbols = rows[row];
        let allSame = true;
        for (const symbol of symbols) {
            if (symbol != symbols[0]) {
                allSame = false;
                break;
            }
        }
        if (allSame) {
            winnings += bet * SYMBOL_VALUE[symbols[0]];
        }
    }
    return winnings;
}

function game() {
    let balance = deposit();
    while (true) {
        console.log("You have a balance of $" + balance);
        const numberOfLines = getNumberOfLines();
        const bet = getBet(balance, numberOfLines);
        balance -= bet * numberOfLines;
        const reels = spin();
        const rows = transpose(reels);
        printRows(rows);
        const winnings = getWinnings(rows, bet, numberOfLines);
        balance += winnings;
        console.log("You won $" + winnings.toString());

        if (balance <= 0) {
            console.log("You ran out of balance");
            break;
        }
        const playAgain = prompt("Wanna play again (y/n)? ");
        if (playAgain.toLowerCase() !== "y") break;
    }
}

game();
