how to create a minesweeper.
Let’s first break down our goal to a few smaller tasks.
Define rules
Structure game
Draw the board
        1. Draw fields
        2. Plant mines
        3.Calculate distance
4. Find a way to traverse the board
5. Implement the reveal logic

DEFINIG THE RULES

You can find complete rule with game description.
Goal of the game is to find all mines on the board
You reveal mines by clicking at board field
if you reveal a field with mine you lose the game
if you reveal field without a mine it will show exact number of mines surrounding that field.
if you reveal field without number it means that there are no mines in its surrounding.
Add a readme with
The Minesweeper has 5 by 5 table that has 25 cells and out of these, 10 cells holds mine which are restriction area. The game is over when i user click one of these mines.
