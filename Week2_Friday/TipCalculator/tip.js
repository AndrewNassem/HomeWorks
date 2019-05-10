function calcTip() {
    var subTotal = document.getElementById("subtotal") ; 
    var tip = document.getElementById("tip") ; 
    var total = document.getElementById("total") ; 
    total.innerHTML =  (parseInt(((tip.value / 100) * subTotal.value)) + parseInt(subTotal.value) ) + "$" ; 
}
