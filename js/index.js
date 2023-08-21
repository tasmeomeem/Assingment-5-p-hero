let total = 0 ;
function handleClickBtn (cardElement){
    // console.log(target.parentNode.childNodes[5].innerText)
    // console.log(cardElement.querySelector(".card-title").innerText);
    const ProductName = cardElement.querySelector(".card-title").innerText;
    
    const li = document.createElement('li');
    li.innerText = ProductName;
    const selectedItemsContainer = document.getElementById("selected-Items");
    selectedItemsContainer.appendChild(li);

    const price = cardElement.querySelector("#price").innerText.split(" ")[0];
    // console.log(price)

    total = parseFloat(total) + parseFloat(price);
    document.getElementById("purchase").removeAttribute("disabled");
    document.getElementById("total").innerText= total;
    if(document.getElementById("cupon-code").value){
        applyCupon();
    }
    if(total > 200){
        document.getElementById("cupon").removeAttribute("disabled");
    }
}

function applyCupon (){
    const cuponCode = document.getElementById("cupon-code").value;
    
    if(cuponCode !== "SELL200"){
        alert("your code is invalid")
        return;
    }

    if(total < 200){
        alert("minimum amount should be 200")
        return;
    }
    let totalDiscount = (total /100)*20
    document.getElementById("discount").innerText = totalDiscount;
    document.getElementById("final-total").innerText = total - totalDiscount;

}

