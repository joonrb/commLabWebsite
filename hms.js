function popUp(){
    var purchaseWindow = window.open("purchaseWindow.html","", "width = 200", "height=150");
}

function makePurchase(){
    alert("Thanks for making the Purchase!")
    window.close();
}

function reviewSubmit(){
    var text;
    text = document.getElementById("inputReview").value;
    document.getElementById("userInput").innerHTML = text;
    document.getElementById("userInputContainer").style.display = "block";
}