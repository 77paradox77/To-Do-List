// BUSINESS LOGIC
function items(item, place) {
  this.newItem = item;
  this.newPlace = place;
}
items.prototype.returner = function() {
  return this.newItem;
}
// USER INTERFACE LOGIC
$(document).ready(function() { 
  $("form#toDoList").submit(function(event) {
    var item1 = $("input#list1").val();
    var item2 = $("input#list2").val();
    var newObject = new items(item1, item2);
    $("#display").append("<li><span class='listItem'>" + newObject.returner() + "</span>" + ' ... ' + "<span class='closer'>" +'[x]' + "</span></li>")
    $('.listItem').last().click(function(){
      $('#show-place').show();
      $('.doThis').text(newObject.newItem);
      $('.doWhere').text(newObject.newPlace);
    })
    $('.closer').last().click(function(){
      this.closest('li').remove();
    });
  });
});
