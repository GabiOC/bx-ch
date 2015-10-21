$(function(){
  var numItems = getNumItems();
  var cartTotal = getCartTotal();
  var itemImages = getItemImages();
  triggerOverlay(numItems, cartTotal, itemImages);
});

function getNumItems(){
  return $("#cartItems").children(".item").length;
}

function getCartTotal(){
  return $("#hdrCartSubtotal").children("#subTotal").html();
}

function getItemImages(){
  var $items = $("#cartItems").children(".item");
  var images = $items.find(".itemImg").map(function(){
    return $(this).children("img").attr("src");
  })
  return images;
}

function triggerOverlay(numItems, cartTotal, itemImages){
  var lastScroll = 0 // compare current scroll vs. last scroll so overlay isn't re-triggered if user scrolls up
  $(window).scroll(function () {
    var currentScroll = $(window).scrollTop();
      if ((currentScroll > $(document).height() * 0.9) && (currentScroll > lastScroll)){
        $("#cart-modal").modal("show");
        // remove previous cart data if modal previously generated
        if ($(".cart-content").children().length > 0){
          removeOldData();
        }
        // append cart data to modal
        appendImages(itemImages);
        appendNumItems(numItems);
        appendTotal(cartTotal);

        lastScroll = currentScroll;
      }
  });
}

function removeOldData(){
  $(".cart-content").empty();
}

function appendImages(images){
  $(".cart-content").append("<div id='item-images'></div>");
  images.each(function(i){
    $("#item-images").append("<img src=" + images[i] + ">");
  })
}

function appendNumItems(num){
  $(".cart-content").append("<div id='item-num'></div>");
  $("#item-num").append("<p>Current Items in Cart:" + num + "</p>");
}

function appendTotal(total){
  $(".cart-content").append("<div id='item-total'></div>");
  $("#item-total").append("<p>Cart Total:" + total + "</p>");
}


// // Code for live Marmot site
// $(function(){
//   // only get cart data and trigger overlay if user is on homepage & cart isn't empty
//   if(window.location.href == "http://marmot.com/" && getNumItems() > 0){
//     var numItems = getNumItems();
//     var cartTotal = getCartTotal();
//     var itemImages = getItemImages();
//     triggerOverlay(numItems, cartTotal, itemImages);
//   }
// });
//
// function getNumItems(){
//   return $("#cartItems").children(".item").length;
// }
//
// function getCartTotal(){
//   return $("#hdrCartSubtotal").children("#subTotal").html();
// }
//
// function getItemImages(){
//   var $items = $("#cartItems").children(".item");
//   var images = $items.find(".itemImg").map(function(){
//     return $(this).children("img").attr("src");
//   })
//   return images;
// }
//
// function triggerOverlay(){
//   var lastScroll = 0 // compare current scroll vs. last scroll so modal isn't triggered if user scrolls up
//   $(window).scroll(function () {
//     var currentScroll = $(window).scrollTop();
//      if (currentScroll + $(window).height() > $(document).height() * 0.9 && (currentScroll > lastScroll)) {
//        $('#cart-modal').modal('show');
//        lastScroll = currentScroll;
//      }
//   });
// }
