"use strict";

//responsive navigation
function navReveal(){
    document.getElementsByClassName("navLinks")[0].classList.toggle("active");
}

document.getElementById("toggle-button").addEventListener("click", navReveal);

//product display
//store elements that will be changed on click
let featuredImage = document.querySelector("#featuredProduct img");
let featuredHeading = document.querySelector("#featuredText h3");
let featuredDescription = document.querySelector("#featuredText p:first-of-type");


function featuredNecklace(){//change to necklace display
    featuredHeading.textContent = "Crystal Pendant Necklace";
    featuredDescription.textContent = "Manifest the energy you want with the Solid Gold Crystal Pendant Necklace. These solid gold crystal necklaces are made with natural crystals that each have their own unique energy. Wear each necklace to manifest the properties of the crystal."
    featuredImage.src = "featured_necklace.png";
    featuredImage.alt = "crystal pendant necklace";
}


function featuredEarrings(){//change to earring display
    featuredHeading.textContent = "Diamond Huggie Hoops";
    featuredDescription.textContent = "The Solid Gold Diamond Huggie Hoops are a pair you'll keep forever. Mini huggie hoop earrings showcase a row of shimmering diamonds along the front. We love layering these with other hoops and studs from the Family Gold collection."
    featuredImage.src = "featured_earrings.png";
    featuredImage.alt = "Diamond hoops";
}

function featuredBracelet(){//Change to bracelet display
    featuredHeading.textContent = "Colorful Mixed Stone Bracelet";
    featuredDescription.textContent = "Dress up your wrists! The Colorful Mixed Stone Bracelet features a center shimmering opal surrounded on either side by sparkling candy colored CZ's. Color us impressed."
    featuredImage.src = "featured_bracelet.png";
    featuredImage.alt = "Colorful Mixed Stone Bracelet";
}

function featuredRing(){//Change back to ring display (default on page load)
   featuredHeading.textContent = "Gold Birth Flower Ring";
   featuredDescription.textContent = "Our birth flower ring collection is a way to celebrate your growth each year. Like a flower, nurture yourself and watch as you grow. This Solid Gold Birth Flower Ring features a detailed yet delicate bloom set with a natural gem in each month's birthstone. The perfect piece for gifting, both to others and yourself."
   featuredImage.src = "featured_ring.png";
   featuredImage.alt = "Birth flower ring";
}

//Add event listeners to icons
document.getElementById("necklaceIcon").addEventListener("click", featuredNecklace);
document.getElementById("earringsIcon").addEventListener("click", featuredEarrings);
document.getElementById("braceletIcon").addEventListener("click", featuredBracelet);
document.getElementById("ringIcon").addEventListener("click", featuredRing);


//shopping cart & cost calculator
//assign variables
let checkboxes = document.querySelectorAll("input[type='checkbox']");
let productList = document.getElementById("productList");
let items = new Array();
let subtotalPrice = document.getElementById("subTotal");
let totalPrice = document.getElementById("total");

//create object for cart totals
let cartTotals = {
    subtotal: 0,
    total: 0
};


//subtotal helper functions
function addSubtotal(amount){
    this.subtotal = this.subtotal + amount;
}

function removeSubtotal(amount){
    this.subtotal = this.subtotal - amount;
}

function displaySubtotal() {
    return this.subtotal;
}

//total helper functions
function addTotal(amount) {
    this.total = (this.subtotal) + (this.subtotal * 0.086)
}

function removeTotal(amount) {
    this.total = (this.subtotal) + (this.subtotal * 0.086)
}

function displayTotal() {
    return this.total;
}

//assign methods with object
cartTotals.addSubtotal = addSubtotal;
cartTotals.removeSubtotal = removeSubtotal;
cartTotals.displaySubtotal = displaySubtotal;
cartTotals.addTotal = addTotal;
cartTotals.removeTotal = removeTotal;
cartTotals.displayTotal = displayTotal;


function shoppingCart(event){
    let html = "";

    //for Drops of Spring Necklace
    if(event.target.id === "check1" && event.target.checked){
        //adds item to items array for product list
        items.push(event.target.value);

        //updates label to remove
        event.target.nextElementSibling.innerHTML = "Remove from Cart";

        //update & display subtotal
        cartTotals.addSubtotal(90);
        subtotalPrice.innerHTML = `$${cartTotals.displaySubtotal().toFixed(2)}`;

        //update & display total
        cartTotals.addTotal(90);
        totalPrice.innerHTML = `$${cartTotals.displayTotal().toFixed(2)}`;

        //removes error message
        document.getElementById("checkOut").nextElementSibling.innerHTML = "";

    }else if(event.target.id === "check1" && !(event.target.checked)){
        //removes item from items array & product list
        let index = items.indexOf(event.target.value);
        items.splice(index, 1);

        //resets label to add
        event.target.nextElementSibling.innerHTML = "Add to Cart";

        //update & display subtotal
        cartTotals.removeSubtotal(90);
        subtotalPrice.innerHTML = `$${cartTotals.displaySubtotal().toFixed(2)}`;

        //update & display total
        cartTotals.removeTotal(90);
        totalPrice.innerHTML = `$${cartTotals.displayTotal().toFixed(2)}`;
    }

    //for Florina Earrings Set
    if(event.target.id === "check2" && event.target.checked){
        //adds item to items array for product list
        items.push(event.target.value);

        //updates label to remove
        event.target.nextElementSibling.innerHTML = "Remove from Cart";

        //update & display subtotal
        cartTotals.addSubtotal(85);
        subtotalPrice.innerHTML = `$${cartTotals.displaySubtotal().toFixed(2)}`;

        //update & display total
        cartTotals.addTotal(85);
        totalPrice.innerHTML = `$${cartTotals.displayTotal().toFixed(2)}`;

        //removes error message
        document.getElementById("checkOut").nextElementSibling.innerHTML = "";

    }else if(event.target.id === "check2" && !(event.target.checked)){
        //removes item from items array & product list
        let index = items.indexOf(event.target.value);
        items.splice(index, 1);

        //resets label to add
        event.target.nextElementSibling.innerHTML = "Add to Cart";

       //update & display subtotal
        cartTotals.removeSubtotal(85);
        subtotalPrice.innerHTML = `$${cartTotals.displaySubtotal().toFixed(2)}`;

        //update & display total
        cartTotals.removeTotal(85);
        totalPrice.innerHTML = `$${cartTotals.displayTotal().toFixed(2)}`;
    }

    //For Gold Mushroom Necklace
    if(event.target.id === "check3" && event.target.checked){
        //adds item to items array for product list
        items.push(event.target.value);

        //updates label to remove
        event.target.nextElementSibling.innerHTML = "Remove from Cart";

        //update & display subtotal
        cartTotals.addSubtotal(100);
        subtotalPrice.innerHTML = `$${cartTotals.displaySubtotal().toFixed(2)}`;

        //update & display total
        cartTotals.addTotal(100);
        totalPrice.innerHTML = `$${cartTotals.displayTotal().toFixed(2)}`;

        //removes error message
        document.getElementById("checkOut").nextElementSibling.innerHTML = "";

    }else if(event.target.id === "check3" && !(event.target.checked)){
        //removes item from items array & product list
        let index = items.indexOf(event.target.value);
        items.splice(index, 1);

        //resets label to add
        event.target.nextElementSibling.innerHTML = "Add to Cart";

       //update & display subtotal
        cartTotals.removeSubtotal(100);
        subtotalPrice.innerHTML = `$${cartTotals.displaySubtotal().toFixed(2)}`;

        //update & display total
        cartTotals.removeTotal(100);
        totalPrice.innerHTML = `$${cartTotals.displayTotal().toFixed(2)}`;
    }

    //For Perfect Peach Ring
    if(event.target.id === "check4" && event.target.checked){
        //adds item to items array for product list
        items.push(event.target.value);

        //updates label to remove
        event.target.nextElementSibling.innerHTML = "Remove from Cart";

        //update & display subtotal
        cartTotals.addSubtotal(75);
        subtotalPrice.innerHTML = `$${cartTotals.displaySubtotal().toFixed(2)}`;

        //update & display total
        cartTotals.addTotal(75);
        totalPrice.innerHTML = `$${cartTotals.displayTotal().toFixed(2)}`;

        //removes error message
        document.getElementById("checkOut").nextElementSibling.innerHTML = "";

    }else if(event.target.id === "check4" && !(event.target.checked)){
        //removes item from items array & product list
        let index = items.indexOf(event.target.value);
        items.splice(index, 1);

        //resets label to add
        event.target.nextElementSibling.innerHTML = "Add to Cart";

       //update & display subtotal
        cartTotals.removeSubtotal(75);
        subtotalPrice.innerHTML = `$${cartTotals.displaySubtotal().toFixed(2)}`;

        //update & display total
        cartTotals.removeTotal(75);
        totalPrice.innerHTML = `$${cartTotals.displayTotal().toFixed(2)}`;
    }
    
    //iterates through items array & formats items to display in product list
    for(let i = 0; i < items.length; i++){
        html += items[i] + "<br> ";
      }

    productList.innerHTML = html;

    //adds border style to product list if items are in cart
    if(!(productList.innerHTML === "")){
        productList.style.borderTop = "2px solid #93b8db";
        productList.style.borderBottom = "2px solid #93b8db";
    }

    if(productList.innerHTML === ""){
        productList.style.borderTop = "";
        productList.style.borderBottom = "";
    }
};

function checkOut(){
    if(productList.innerHTML === ""){
        //error message preventing check out if cart is empty
        document.getElementById("checkOut").nextElementSibling.innerHTML = "Please add at least one item to your cart.";
    }else{
        //success message to user when check out is successful
        window.alert("Purchase successful. Thank you for shopping!")

        //reset all cart items back to default, ready for new shopping spree
        productList.innerHTML = "";
        productList.style.borderTop = "";
        productList.style.borderBottom = "";
        subtotalPrice.innerHTML = "";
        totalPrice.innerHTML = "";
        document.getElementById("checkOut").nextElementSibling.innerHTML = "";
        items = Array ();
        for( let checkbox of checkboxes){
            checkbox.checked = false;
            checkbox.nextElementSibling.innerHTML = "Add to Cart";
        }
    }
}

//add event listeners
for(let checkbox of checkboxes){
    checkbox.addEventListener("change", shoppingCart);
}

document.getElementById("checkOut").addEventListener("click", checkOut);

//contact form validation
//create map of messages to display to user
let messages = {
    nameMsg: "Please enter a valid full name",
    commentsMsg: "Please enter your comments or questions",
    emailMsg: "Please enter a valid email address",
    phoneMsg: "Please enter a valid phone number",
    contactMethodMsg: "Please choose your preferred contact method",
    successMsg: "Thank you for reaching out! The form submitted successfully.",
    failureMsg: "There was an issue when trying to submit the form. Please correct the error and try again.",
};
  
//Create Object Literal - blank values, include a getUser method that returns a nice string of the keys and values
let newContact = {
    fullName: "",
    userEmail: "",
    userPhone: "",
    userComments: "",
    userContactMethod: "",
    getUser(){
        return "Name: " + this.fullName + "<br>Email: " + this.userEmail + "<br>Phone Number: " + this.userPhone + "<br>Comments: " + this.userComments + "<br>Contact Method: " + this.userContactMethod;
    }
};

//validate form function
function validateForm(event){
    //prevent the form from submitting while we perform validation
      event.preventDefault();
    
    //the regular expressions
    let fullNameRegex = /[a-zA-Z]+\s[a-zA-z]+/;
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,3})$/;
    let phoneRegex = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/;

    //the inputs
    let fullName = document.getElementById("fullName"); 
    let comments = document.getElementById("comments");
    let prefEmail = document.getElementById("prefEmail");
    let prefPhone = document.getElementById("prefPhone");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");

    //remove the error class given to inputs on previous submit of error
    fullName.classList.remove("error");
    comments.classList.remove("error");
    document.querySelector("#contactMethod").classList.remove("error");
    email.classList.remove("error");
    phone.classList.remove("error");

    //clear out any previous error messages and the previous submission from the form
    fullName.nextSibling.innerHTML = "";
    comments.nextSibling.innerHTML = "";
    document.querySelector("fieldset").nextSibling.innerHTML = "";
    email.nextSibling.innerHTML = "";
    phone.nextSibling.innerHTML = "";

    //variable to track whether or not the form is valid
    let isValid = true;

    //ensure that full name matches pattern, give feedback to user if not
    if(fullName.value === "" || !(fullNameRegex.test(fullName.value))){//add check for empty input and to match regex
        isValid = false; 
        //add error class to input
        fullName.classList.add("error");
        
        //add error message for user about this input
        fullName.nextSibling.innerHTML = messages.nameMsg;
    }else{
        newContact.fullName = fullName.value;
    }

    //ensure that comments is not blank
    if(comments.value === ""){
        isValid = false; 
        //add error class to input
        comments.classList.add("error");
        
        //add error message for user about this input
        comments.nextSibling.innerHTML = messages.commentsMsg;
    }else{
        newContact.userComments = comments.value;
    }

    //determine which contact method is chosen and add checking for related method input
    if(prefEmail.checked){
        newContact.userContactMethod = "Email";
        //validate email input
        if(email.value === "" || !(emailRegex.test(email.value))){ //check for empty input and test against regex
            isValid = false;
            //add error class to input
            email.classList.add("error");
            
            //add error message for user about this input - "Please enter a valid email address";
            email.nextSibling.innerHTML = messages.emailMsg;
          }else{
            newContact.userEmail = email.value;
          }
    }else if(prefPhone.checked) {
        newContact.userContactMethod = "Phone";
        //validate phone input
        if(phone.value === "" || !(phoneRegex.test(phone.value))){ //check for empty input and test against regex
            isValid = false;
            //add error class to input
            phone.classList.add("error");
            
            //add error message for user about this input - "Please enter a valid email address";
            phone.nextSibling.innerHTML = messages.phoneMsg;
          }else{
            newContact.userPhone = phone.value;
          }
    }else{
        isValid = false;
        //add error class
        document.querySelector("#contactMethod").classList.add("error");

        //add error message for user 
        document.querySelector("fieldset").nextSibling.innerHTML = messages.contactMethodMsg;
    }

    //form will submit and display contact info. on screen if valid
    if(isValid){

        //call the display submission function to display the user object on the screen
        displaySubmission();
  
        //reset values
        fullName.value = "";
        email.value = "";
        phone.value = "";
        comments.value = "";
        prefEmail.checked = false;
        prefPhone.checked = false;
  
        //clear out any error messages
        fullName.nextSibling.innerHTML = "";
        comments.nextSibling.innerHTML = "";
        document.querySelector("fieldset").nextSibling.innerHTML = "";
        email.nextSibling.innerHTML = "";
        phone.nextSibling.innerHTML = "";

         //display the success message from the map to the user
         window.alert(messages.successMsg);
    }  
}

function displaySubmission(){
    //container to display user object
    let confirm = document.getElementById("confirm");
    
    //clear previous content from paragraph
    confirm.innerHTML = "";
    
    //display the user's input to them on the page
    confirm.innerHTML = "You submitted the following info:<br>" + newContact.getUser();
  }

//clears newContact object when focus given to fullName input indicating new fill out
function clearObject (){
    let confirm = document.getElementById("confirm");
    confirm.innerHTML = "";
}

//add event listeners
document.getElementById("contactForm").addEventListener("submit", validateForm);
document.getElementById("fullName").addEventListener("focus", clearObject);


//dark mode display
//save dark mode button in variable
let darkButton = document.querySelector("nav div:first-of-type");

function darkMode(){
    //toggle icon from moon to sun, or vice versa
    document.getElementById("sun").classList.toggle("hidden");
    document.getElementById("moon").classList.toggle("hidden");

    //toggle style of the dark mode button
    darkButton.classList.toggle("darkModeBtn");
    darkButton.classList.toggle("darkModeBtnSwitch");
    

    //toggle body colors
    document.querySelector("body").classList.toggle("darkMode");

    //toggle logo fill
    document.querySelector("#logo").classList.toggle("logoSwitch");

    //change hamburger menu color 
    let menuBars = document.querySelectorAll("#toggle-button>span")
    for (let bar of menuBars) {
        bar.classList.toggle("bar");
        bar.classList.toggle("barSwitch");
    }

    //change nav link color 
    let navLinks = document.querySelectorAll("nav li a");
    for (let link of navLinks){
        link.classList.toggle("navColor");
        link.classList.toggle("navColorSwitch");
    }

    //toggle fill of featured product icons
    document.getElementById("ringIcon").classList.toggle("featuredIconSwitch");
    document.getElementById("necklaceIcon").classList.toggle("featuredIconSwitch");
    document.getElementById("earringsIcon").classList.toggle("featuredIconSwitch");
    document.getElementById("braceletIcon").classList.toggle("featuredIconSwitch");

    //switch color of featured 'learn more' link
    document.querySelector("#featuredProduct a").classList.toggle("learnMore");
    document.querySelector("#featuredProduct a").classList.toggle("learnMoreSwitch");

    //change shop section borders
    let shopSections = document.querySelectorAll("#shop section[id^='product']");
    for(let section of shopSections){
        section.classList.toggle("border");
        section.classList.toggle("borderSwitch");
    }

    //switch colors of shopping cart button 
    document.getElementById("checkOut").classList.toggle("buttonColor");
    document.getElementById("checkOut").classList.toggle("buttonColorSwitch");

    //swap fills of social icons
    let socialFills = document.getElementsByClassName("cls-1");
    for(let socialFill of socialFills){
        socialFill.classList.toggle("cls-1Switch");
    }
    let socialDetails = document.getElementsByClassName("cls-2");
    for(let socialDetail of socialDetails){
        socialDetail.classList.toggle("cls-2Switch");
    }
}

darkButton.addEventListener("click", darkMode);