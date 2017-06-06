var count = 4;
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
    //showMines();
		permit = true;
	});
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
				console.log(indArr.length);
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

	}
	this.showMines = function() {

		for (var i = 0; i < count; i++) {
			for (var j = 0; j < count; j++) {
				if (this.cells[i][j] == -2)
					$(".line").eq(i).find(".item").eq(j)
					.html("&#x2602;").addClass("bold");
						$(".bold").css("background-color", 'yellow');
			}
		}

	}
};
