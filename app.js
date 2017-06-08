var count = 5;
var minesAll = 10;
var permit = false;
//=================================Create a table
$(document).ready(function() {
	var container = $(".field");
	var row = $("<div class='line'></div>");
	var item = $("<div class='item'></div>");
	var currentRow;
	var currentItem;
//===============================append items
	for (var i = 0; i < count; i++) {
		currentRow = row.clone();
		container.append(currentRow);
		for (var j = 0; j < count; j++) {
			currentItem = item.clone();
		 currentRow.append(currentItem);
		}
	}
//==============================================
	$(".new-game button").on("click", function() {
		currentGame = new Game();
		currentGame.createMines();
		currentGame.setValues();
		permit = true;

});
//==============

	$(".item").on("mousedown", function(event) {
		var parI, parJ, parentLine, items;
		if (permit) {
			parentLine = $(this).parents(".line");//

			parI = $(".line").index(parentLine);//get rows index

			items = parentLine.find(".item");

			parJ = items.index(this);//get column index

			if (event.which == 1) {
				if (currentGame.cells[parI][parJ].bomb)//where i put mines
					currentGame.explosionEnd();
				else {
					$(this).addClass("open");

					$(this).text(currentGame.cells[parI][parJ].value);

				}
			}
		}
	});
});
//=====================
function Game() {
	this.cells = [
  [
    {bomb: false, value: null},
    {bomb: false, value: null},
    {bomb: true, value: null},
    {bomb: false, value: null},
		{bomb: false, value: null},
  ],
  [
    {bomb: false, value: null},
    {bomb: true, value: null},
    {bomb: false, value: null},
    {bomb: false, value: null},
		{bomb: false, value: null},
  ],
  [
    {bomb: false, value: null},
    {bomb: false, value: null},
    {bomb: true, value: null},
    {bomb: true, value: null},
		{bomb: false, value: null},
  ],
  [
    {bomb: false, value: null},
    {bomb: false, value: null},
    {bomb: false, value: null},
    {bomb: false, value: null},
		{bomb: false, value: null},
  ],
	[
		{bomb: false, value: null},
		{bomb: false, value: null},
		{bomb: false, value: null},
		{bomb: false, value: null},
		{bomb: false, value: null},
	],
]
	this.createMines = function() {
		var indI, indJ, cond;
		var indArr = [];
		var elem = [];
		for (var i = 0; i < minesAll; i++) {
			do {

				indI = Math.floor(Math.random()*count);
				indJ = Math.floor(Math.random()*count);
				elem = [indI, indJ];
				console.log(elem)
				cond = false;
				for (var j = 0; j < indArr.length; j++) {

			if (indArr[j][0] == elem[0]&& indArr[j][1] == elem[1]) {
						cond = true;
						break;
					}
				}
				console.log(elem[1]);
			} while (cond);
			this.cells[indI][indJ].bomb = true;
		}
	},


// ================================explosion clicked all display
	this.explosionEnd = function() {
		this.showMines();
		permit = false;

	},
//============================================
	this.showMines = function() {
		$(".item").html("").removeClass("red").addClass("open");
		for (var i = 0; i < count; i++) {
			for (var j = 0; j < count; j++) {
				if (this.cells[i][j].bomb)
					$(".line").eq(i).find(".item").eq(j)
					.html("&#128163;");
			}
		}
	},
	//=================show mines when clicked
	this.showSumsMines = function() {
		for (var i = 0; i < count; i++) {
			for (var j = 0; j < count; j++) {
				if (this.cells[i][j] == -3)
					$(".line").eq(i).find(".item")
					.eq(j).removeClass("red");
			}
		}
	}

	//==================== set values
	this.setValues = function() {
		this.cells = this.cells.map((row, rowIndex, rowArr) => {
		  row.map((square, squareIndex, squareArr) => {
		    if(square.bomb) {
		      return square
		    }
		    let count = 0
		    if(squareArr[squareIndex - 1]) {
		      count += squareArr[squareIndex - 1].bomb ? 1 : 0
		    }
		    if(squareArr[squareIndex + 1]) {
		      count += squareArr[squareIndex + 1].bomb ? 1 : 0
		    }
		    if(rowArr[rowIndex + 1]&& rowArr[rowIndex + 1][squareIndex]) {
		      count += rowArr[rowIndex + 1][squareIndex].bomb ? 1 : 0
		    }
		    if(rowArr[rowIndex + 1]&& rowArr[rowIndex + 1][squareIndex - 1]) {
		      count += rowArr[rowIndex + 1][squareIndex - 1].bomb ? 1 : 0
		    }
		    if(rowArr[rowIndex + 1]&& rowArr[rowIndex + 1][squareIndex + 1]) {
		      count += rowArr[rowIndex + 1][squareIndex + 1].bomb ? 1 : 0
		    }
		    if(rowArr[rowIndex - 1] && rowArr[rowIndex - 1][squareIndex]) {
		      count += rowArr[rowIndex - 1][squareIndex].bomb ? 1 : 0
		    }
		    if(rowArr[rowIndex - 1] && rowArr[rowIndex - 1][squareIndex + 1]) {
		      count += rowArr[rowIndex - 1][squareIndex + 1].bomb ? 1 : 0
		    }
		    if(rowArr[rowIndex - 1] && rowArr[rowIndex - 1][squareIndex - 1]) {
		      count += rowArr[rowIndex - 1][squareIndex - 1].bomb ? 1 : 0
		    }
		    square.value = count
		    return square
		  })
		  return row
		})
	}

}
