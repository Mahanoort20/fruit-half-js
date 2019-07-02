let increment=0;
function getInput() {
   let userMoney=document.querySelector('#getMoney').value;
   console.log(userMoney);
}
function updateBill() {
    const totalApplePrice = Apples * 10;
    const totalMangoPrice = Mango * 15;
    const totalOrangePrice = Orange* 7;
    let bill = parseInt(document.querySelector('#bill input').value);

    bill = totalApplePrice + totalMangoPrice + totalOrangePrice;
    document.querySelector('#bill input').value = bill;
}
// For buying apples
