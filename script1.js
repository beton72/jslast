function updateQuantity() {
    var range = document.getElementById("quantityRange");
    var counter = document.getElementById("quantityCounter");
  
    var quantity = range.value;
    counter.innerHTML = quantity;
  }