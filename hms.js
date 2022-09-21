// Javascript page for the all pages

// Function to popup a purchase window when purchase button is clicked
function popUp(){
    var purchaseWindow = window.open("purchaseWindow.html","", "width = 200", "height=150");
}

// Function that will alert thank you message and will close the window
function makePurchase(){
    alert("Thanks for making the Purchase!")
    window.close();
}

// Function that will update the user review input on the page when submitted
function reviewSubmit(){
    var text;
    text = document.getElementById("inputReview").value;
    document.getElementById("userInput").innerHTML = text;
    document.getElementById("userInputContainer").style.display = "block";
}
