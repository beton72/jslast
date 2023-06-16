function showItems(category) {

    const items = document.getElementsByClassName('items');
    for (let i = 0; i < items.length; i++) {
      items[i].classList.add('hidden');
    }
  
    const selectedItems = document.getElementById(category);
    selectedItems.classList.remove('hidden');
  }