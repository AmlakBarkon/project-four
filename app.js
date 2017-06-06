var count = 3;
var minesAll = 4;
var permit = false;

$(document).ready(function() {
	var container = $(".field");
	var row = $("<div class='line'></div>");//create row has class line
	var item = $("<div class='item'></div>");// create cell for the row
	var RowCurrent;
	var currentItem;

	for (var i = 0; i < count; i++) {
		RowCurrent = row.clone();// clone row and append to container
		container.append(RowCurrent);
		for (var j = 0; j < count; j++) {
			currentItem = item.clone();
		 RowCurrent.append(currentItem);
		}
	}
	$(".new-game button").on("click", function() {
		 Game();
		MinesCreate();
    showMines();
		permit = true;
	});

});

	$(".item").on("mousedown", function(event) {
		var parI, parJ, parentLine, items;
		if (permit) {
			parentLine = $(this).parents(".line");
			parI = $(".line").index(parentLine);

			items = parentLine.find(".item");
			parJ = items.index(this);
			if (event.which == 1) {
				if (currentGame.cells[parI][parJ] == -2)
					currentGame.explosionEnd();
				else {
					$(this).addClass("open");
					$(this).text(currentGame.cells[parI][parJ]);
					currentGame.checkEnd();
				}
			} else if (event.which == 3) {
				if ($(this).hasClass("red")) {
					$(this).removeClass("red").html("");
					ourPlayer.removeMine();
				} else {
					$(this).html("&#9967;").addClass("red");
				    ourPlayer.addMine();
					currentGame.checkEnd();
				}
			}
		}
	});
function Game() {
	this.cells = [];
	this.MinesCreate = function() {
		var indexI, indexJ, BoolCond;
		var indArr = [];
		var elem = [];
		for (var i = 0; i < count; i++) {
			this.cells[i] = [];
      console.log(this.cells[i]);
		}
		for (var i = 0; i < minesAll; i++) {
			do {
				indexI = Math.floor(Math.random()*count);
				indexJ = Math.floor(Math.random()*count);
				elem = [indexI, indexJ];
				BoolCond = false;
				for (var j = 0; j < indArr.length; j++) {

					if (indArr[j][0] == elem[0]

						&& indArr[j][1] == elem[1]) {
						BoolCond = true;
						break;
					}
				}
			} while (BoolCond);
			indArr.push(elem);
			this.cells[indexI][indexJ] = -2;

		}

	},
	this.showMines = function() {
		$(".item").html("").removeClass("green").addClass("open");
		for (var i = 0; i < count; i++) {
			for (var j = 0; j < count; j++) {
				if (this.cells[i][j] == -2)
					$(".line").eq(i).find(".item").eq(j)
					.html("&#x2602;").addClass("bold");

			}
		}

	}
}
