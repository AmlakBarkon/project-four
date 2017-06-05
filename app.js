var count = 5;
var minesAll = 10;
var permit = false;

$(document).ready(function() {
	var container = $(".field");
	var row = $("<div class='line'></div>");
	var item = $("<div class='item'></div>");
	var currentRow;
	var currentItem;

	for (var i = 0; i < count; i++) {
		currentRow = row.clone();
		container.append(currentRow);
		for (var j = 0; j < count; j++) {
			currentItem = item.clone();
		 currentRow.append(currentItem);
		}
	}

	$(".new-game button").on("click", function() {
		currentGame = new Game();
		currentGame.MinesCreate();
    currentGame.showMines();
		permit = true;
	});

});

function Game() {
	this.cells = [];
  console.log(this);
	this.MinesCreate = function() {
		var indexindexJ, cond;
		var indArr = [];
		var elem = [];
		for (var i = 0; i < count; i++) {
			this.cells[i] = [];

		}
		for (var i = 0; i < minesAll; i++) {
			do {
				indexI = Math.floor(Math.random()*count);
				indexJ = Math.floor(Math.random()*count);
				elem = [indexI, indexJ];
				cond = false;
				for (var j = 0; j < indArr.length; j++) {

					if (indArr[j][0] == elem[0]

						&& indArr[j][1] == elem[1]) {
						cond = true;
						break;
					}
				}
			} while (cond);
			indArr.push(elem);
			this.cells[indexI][indexJ] = -1;
      console.log(elem);

		}
	},



	this.showMines = function() {
		$(".item").html("").removeClass("green").addClass("open");

		for (var i = 0; i < count; i++) {
			for (var j = 0; j < count; j++) {
				if (this.cells[i][j] == -1)
					$(".line").eq(i).find(".item").eq(j)
					.html("&#x2602;").addClass("bold");


			}

		}
    $(".bold").css("background-color", 'red');

	},

  this.clearGame = function() {
		$(".item").html("").removeClass("open")
		.removeClass("red").removeClass("bold").removeClass("yellow");
	}
}
