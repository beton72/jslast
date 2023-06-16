function submitData() {
    var fio = document.getElementById("fio").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var card = document.getElementById("card").value;
  
    var table = document.querySelector(".table table");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = fio;
    cell2.innerHTML = phone;
    cell3.innerHTML = address;
    cell4.innerHTML = card;
  
    clearForm();
  }
  
  function clearForm() {
    document.getElementById("fio").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
    document.getElementById("card").value = "";
  }
  
  function confirmData() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "flex";
  }