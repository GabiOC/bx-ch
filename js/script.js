//Write a javascript snippet that can be run in the console of a browser that does the following:
//Extract the number of items in the cart, the cart total, and item images from the page.
//Store them in javascript variables.

$(function(){
  // only get cart data and trigger overlay if user is on homepage & cart isn't empty
  if(window.location.href == "http://marmot.com/" && getNumItems() > 0){
    var numItems = getNumItems();
    var cartTotal = getCartTotal();
    var itemImages = getItemImages();
    triggerOverlay(numItems, cartTotal, itemImages);
  }
});

function getNumItems(){
  return $("#cartItems").children(".item").length;
}

function getCartTotal(){
  var $items = $("#cartItems").children(".item");
  // parse html for items' prices, inclusive of decimal
  var prices = $items.find("li:contains('Price')").map(function(){
    return parseFloat($(this).html().match(/[0-9]+(\.[0-9][0-9]?)?/));
  })
  // sum total prices
  return prices.reduce(function(a, b) { return a + b; })
}

function getItemImages(){
  var $items = $("#cartItems").children(".item");
  var images = $items.find(".itemImg").map(function(){
    return $(this).children("img").attr("src");
  })
  return images;
}

//Create a trigger that activates when the user scrolls into the bottom 10% of the page.
function triggerOverlay(){
  $(window).scroll(function () {
     if ($(window).scrollTop() + $(window).height() > $(document).height() * 0.9 ) {
        openOverlay();
     }
  });
}

//The trigger should show a centered overlay on top of the site that displays the information
// gathered above and two buttons. One button closes the overlay and the other takes the user to
// the cart page.
function openOverlay(){
  $(function() {
    $("#dialog-confirm").dialog({
      resizable: false,
      height:140,
      modal: true,
      buttons: {
        "Delete all items": function() {
          $( this ).dialog( "close" );
        },
        Cancel: function() {
          $( this ).dialog( "close" );
        }
      }
    });
  });
}
