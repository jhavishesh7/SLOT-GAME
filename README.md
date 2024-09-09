Slot Machine Game
Description
This is a simple command-line slot machine game implemented in JavaScript. The game allows users to deposit money, choose the number of lines to bet on, place bets, spin the slot machine, and check if they have won. The game continues until the user decides to quit or runs out of balance.

Features
Deposit an initial amount of money.
Choose the number of lines to bet on (1-3).
Bet a specific amount per line.
Spin the slot machine and view the results.
Calculate winnings based on matching symbols.
Play again or quit when desired.
Requirements
Node.js (for running the JavaScript code)
prompt-sync package (for user input)

Follow the on-screen prompts:

Enter a deposit amount: Specify the amount of money to start with.
Choose the number of lines to bet on: Enter a number between 1 and 3.
Enter the bet amount per line: Specify how much to bet on each line.
Spin the slot machine: The results will be displayed, and you will see if you have won.
Play again or quit: Decide whether to continue playing or exit the game.
Game Mechanics
Symbols: The slot machine uses four symbols (A, B, C, D) with varying frequencies.
Winning Calculation: You win if all symbols in a line match. The winnings are calculated based on the symbol value and the bet amount.


Enter a deposit amount: 100
You have a balance of $100
Enter the number of lines you wanna bet on (1-3): 2
Enter the total amount you wanna bet per line: 10
Spinning the slot machine...
A | A | B
B | C | A
A | B | A
You won $20
Wanna play again (y/n)? n
