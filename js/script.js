var adds = 5;

var listIds = ['cheese', 'tomato', 'egg', 'lettuce', 'mustard', 'ketchup'];




document.getElementById('buttonCalculate').addEventListener("click", myFunction);

function myFunction() {
  var nomeInput = document.getElementById('namePerson');
  if (nomeInput.value.trim() == '') {
    alert("Please insert your name");
  } else {

    for (var i = 0; i < listIds.length; i++) {
      if (document.getElementById(listIds[i]).checked) {
        adds += 1;
      }
    }

    var couponInput = document.getElementById('coupon');
    if (couponInput.value == "ALE2021") {
      adds = adds * 80 / 100;
    }

    document.getElementById('price').innerHTML = adds;
    adds = 5;

  }

}
