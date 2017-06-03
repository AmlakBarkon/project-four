var count = 5;
var container;
$(document).ready(function() {
  container = $('.feild');
  var row = $("<div calss='line'></div");
  var item = $("<div class ='item'></div>");
  var currentrow;
  var currentitem;
  for(var x=0; x < count; x ++) {
    currentrow = row.clone();
    container.append(currentrow);
    for(var y =0; y< count; y ++) {
      currentitem = item.clone();
      currentrow.append(currentitem);

    }
  }
})
