var count = 4;
var minesAll = 8;
var permit = false;
var beginTime, endTime, timer;

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
		currentGame.createMines();
		permit = true;

});

$(".item").on("mousedown", function(event) {
	var parI, parJ, parentLine, items;
	if (permit) {
		parentLine = $(this).parents(".line");
		parI = $(".line").index(parentLine);

		items = parentLine.find(".item");
		parJ = items.index(this);
		if (event.which == 1) {
			if (currentGame.this.cells == -1)
				currentGame.explosionEnd();
			else {
				$(this).addClass("open");
				$(this).text(currentGame.cells[parI][parJ]);

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
});

function Game() {
	this.cells = [
		[
			{ bomb: false, selected: false, value: null },
			{ bomb: false, selected: false, value: null },
			{ bomb: false, selected: false, value: null },
			{ bomb: false, selected: false, value: null },
		],
		[
			{ bomb: false, selected: false, value: null, id:null},
			{ bomb: false, selected: false, value: null, id:null},
			{ bomb: false, selected: false, value: null, id:null },
			{ bomb: false, selected: false, value: null, id:null },
		],
		[
			{ bomb: false, selected: false, value: null, id:null },
			{ bomb: false, selected: false, value: null, id:null },
			{ bomb: false, selected: false, value: null, id:null },
			{ bomb: false, selected: false, value: null, id:null },
		],
		[
			{ bomb: false, selected: false, value: null, id:null },
			{ bomb: false, selected: false, value: null, id:null },
			{ bomb: false, selected: false, value: null, id:null },
			{ bomb: false, selected: false, value: null, id:null },
		],

	];

	this.createMines = function() {
		var indI, indJ, cond;
		var indArr = [];
		var elem = [];
		for (var i = 0; i < count; i++) {
			this.cells[i] = [];

		}
		for (var i = 0; i < minesAll; i++) {
			do {
				indI = Math.floor(Math.random()*count);
				indJ = Math.floor(Math.random()*count);
				elem = [indI, indJ];
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
			this.cells[indI][indJ] = { bomb: true, selected: true, value: 1, id:2};
			console.log(indArr);
		}
	},

	this.explosionEnd = function() {
		this.showMines();
		permit = false;
	},

	this.showMines = function() {
		$(".item").html("").removeClass("green").addClass("open");
		for (var i = 0; i < count; i++) {
			for (var j = 0; j < count; j++) {
				if (this.cells== -1)
					$(".line").eq(i).find(".item").eq(j)
					.html("&#x2602;").addClass("bold");
					console.log("thank you");
			}
		}

	}
 }
