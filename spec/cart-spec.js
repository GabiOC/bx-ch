'use-strict';
describe('Cart', function() {
  beforeEach(function() {
    setFixtures('<div id="cartItems"><div class="item"><div class="itemImg"><img src="http://cdnmedia.marmot.com/images/product/tile/46200_2975_f.jpg" alt="Women\'s PreCip Jacket" title="Women\'s PreCip Jacket">   </div>   <div class="itemDtls">    <ul>     <li class="itemTitle">Women\'s PreCip Jacket</li>     <li>Price: $100.00</li>     <li>Arctic Navy</li>     <li>Small</li>     <li>Qty: 1&nbsp;&nbsp;<a id="rm-d45e227b-17f9-40ff-9e63-83d2857fd9b4" class="itemRemove" href="#"><img alt="Remove" src="/includes/img/interface/icon-trash.jpg"></a></li>    </ul>   </div>  </div><div class="item">   <div class="itemImg">    <img src="http://cdnmedia.marmot.com/images/product/tile/78050_001_f.jpg" alt="Women\'s Hailey Jacket" title="Women\'s Hailey Jacket">   </div>   <div class="itemDtls">    <ul>     <li class="itemTitle">Women\'s Hailey Jacket</li>     <li>Price: $250.00</li>     <li>Black</li>     <li>Small</li>     <li>Qty: 1&nbsp;&nbsp;<a id="rm-a775ed15-a35e-4b04-be5e-9011984cbec9" class="itemRemove" href="#"><img alt="Remove" src="/includes/img/interface/icon-trash.jpg"></a></li>    </ul>   </div>  </div></div>  <div id="coBlock"><div id="coBlock" style="display: block;"><div id="hdrCartSubtotal">Subtotal <span id="subTotal">$350.00</span></div>');
  });

  it('#getNumItems should return number of cart items', function() {
    expect(getNumItems()).toBe(2);
  });

  it('#getCartTotal should return cart total', function() {
    expect(getCartTotal()).toBe("$350.00");
  });

  it('#getItemImages should select all item images', function() {
    expect(getItemImages().length).toBe(2);
  });

  it('#getItemImages should return an array of image links', function() {
    expect(getItemImages()[0]).toBe("http://cdnmedia.marmot.com/images/product/tile/46200_2975_f.jpg");
  });
});

describe('Modal', function() {
  beforeEach(function() {
    setFixtures('<div id="cart-modal" class="modal fade" role="dialog" data-backdrop="static" data-keyboard="false"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h1 class="modal-title">Do You Want to Keep These Items?</h1></div><div class="modal-body"><div class="cart-content"></div></div><div class="modal-footer"><button type="button" class="btn" id="dismiss" data-dismiss="modal">Heck no I don\'t</button><a href="https://marmot.com/checkout/cart"><button class="btn" id="success" type="submit">Heck yeah I do!</button></a></div></div></div></div><div id="cartItems"><div class="item"><div class="itemImg"><img src="http://cdnmedia.marmot.com/images/product/tile/46200_2975_f.jpg" alt="Women\'s PreCip Jacket" title="Women\'s PreCip Jacket">   </div>   <div class="itemDtls">    <ul>     <li class="itemTitle">Women\'s PreCip Jacket</li>     <li>Price: $100.00</li>     <li>Arctic Navy</li>     <li>Small</li>     <li>Qty: 1&nbsp;&nbsp;<a id="rm-d45e227b-17f9-40ff-9e63-83d2857fd9b4" class="itemRemove" href="#"><img alt="Remove" src="/includes/img/interface/icon-trash.jpg"></a></li>    </ul>   </div>  </div><div class="item">   <div class="itemImg">    <img src="http://cdnmedia.marmot.com/images/product/tile/78050_001_f.jpg" alt="Women\'s Hailey Jacket" title="Women\'s Hailey Jacket">   </div>   <div class="itemDtls">    <ul>     <li class="itemTitle">Women\'s Hailey Jacket</li>     <li>Price: $250.00</li>     <li>Black</li>     <li>Small</li>     <li>Qty: 1&nbsp;&nbsp;<a id="rm-a775ed15-a35e-4b04-be5e-9011984cbec9" class="itemRemove" href="#"><img alt="Remove" src="/includes/img/interface/icon-trash.jpg"></a></li>    </ul>   </div>  </div></div>  <div id="coBlock"><div id="coBlock" style="display: block;"><div id="hdrCartSubtotal">Subtotal <span id="subTotal">$350.00</span></div>');
  });

  it('#bottom10prcntOfPage should be true when user is in bottom 10% of page', function() {
    var currentScroll = 700;
    expect(bottom10prcntOfPage(currentScroll)).toBe(true);
  });

  it('#isScrollDown should be true when current scroll is greater than last ', function() {
    var currentScroll = 705;
    var lastScroll = 700;
    expect(isScrollDown(currentScroll, lastScroll)).toBe(true);
  });
});
