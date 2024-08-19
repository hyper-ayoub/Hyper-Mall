let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

// click //
cartIcon.onclick = () => {
    cart.classList.add("active");
};

// remove //
closeCart.onclick = () => {
    cart.classList.remove("active");
}

// cart works //
if (document.readyState == 'loading') {
    document.addEventListener("DOMContentLoaded", ready)
} else {
    ready();
}





// function -> button remove//
function ready() {
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i]
        button.addEventListener('click', removeCartItems)
    }
    
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }

    var addCartButtons = document.getElementsByClassName('add-cart');
    for (var i = 0; i < addCartButtons.length; i++){
        var button = addCartButtons[i];
        button.addEventListener('click', addCartClicked);
    }


    // Buy button //
    document
    .getElementsByClassName("btn-buy")[0]
    .addEventListener("click", buyButtonClicked);
}



function showAlert(message) {
    var modal = document.getElementById("customAlertModal");
    var alertMessage = document.getElementById("alertMessage");
  
    alertMessage.textContent = message;
    modal.style.display = "block";
  
    var closeBtn = document.getElementsByClassName("close")[0];
    var btnClose = document.getElementsByClassName("btn-close")[0];
  
    closeBtn.onclick = function() {
      modal.style.display = "none";
    };
  
    btnClose.onclick = function() {
      modal.style.display = "none";
    };
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }







function buyButtonClicked() {
    // Add your logic here
    
    showAlert("Come to Hyper-Shop to take your order.");
  
    // Reset cart content and total price
    var cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.hasChildNodes()) {
      cartContent.removeChild(cartContent.firstChild);
    }
    
    updateTotal(); // Update total to show $0
  }
  



// remove Items //
function removeCartItems(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove();
    updateTotal();
}

// quantity changes //
function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }

    updateTotal();
}
//  add cart ///
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.querySelector(".product-title").innerText;
    var price = shopProducts.querySelector(".price").innerText;
    var productImg = shopProducts.querySelector(".product-img").src;
    addProductToCart(title, price, productImg);
    updateTotal();
}
function addProductToCart(title, price, productImg) {
    var cartRowContents = `
        <img src="${productImg}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
    </div>
    <div class="cart-actions">
        <i class='bx bxs-trash-alt cart-remove'></i>`;

    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemNames = cartItems.getElementsByClassName("cart-product-title");

    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText === title) {
            // Alert customization
            var customAlert = document.createElement("div");
            customAlert.classList.add("custom-alert");
            customAlert.innerHTML = `
                <div class="custom-alert-text">You have this item in the cart</div>
                <button class="custom-alert-btn" onclick="closeCustomAlert()">OK</button>`;
            document.body.appendChild(customAlert);
            return;
        }
    }

    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    cartShopBox.innerHTML = cartRowContents;

    cartItems.appendChild(cartShopBox);

    cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItems);
    cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
}

// Function to close the custom alert
function closeCustomAlert() {
    var customAlert = document.querySelector(".custom-alert");
    if (customAlert) {
        customAlert.remove();
    }
}


// function addProductToCart(title, price, productImg) {
//     var cartRowContents = `
    
//         <img src="${productImg}" alt="" class="cart-img">
//         <div class="detail-box">
//             <div class="cart-product-title">${title}</div>
//             <div class="cart-price">${price}</div>
//             <input type="number" value="1" class="cart-quantity">
//         </div>
//     </div>
//     <div class="cart-actions">
//         <i class='bx bxs-trash-alt cart-remove'></i>`;
    
//     var cartItems = document.getElementsByClassName("cart-content")[0];
//     var cartItemNames = cartItems.getElementsByClassName("cart-product-title");
    
//     for (var i = 0; i < cartItemNames.length; i++) {
//         if (cartItemNames[i].innerText === title) {
//             alert("You have this item in the cart");
//             return;
//         }
//     }
    
//     var cartShopBox = document.createElement("div");
//     cartShopBox.classList.add("cart-box");
//     cartShopBox.innerHTML = cartRowContents;

//     cartItems.appendChild(cartShopBox);

//     cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItems);
//     cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
// }

// update total //
function updateTotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + price * quantity;
    }
          
    document.getElementsByClassName('total-price')[0].innerText = "$" + total.toFixed(2);
}
