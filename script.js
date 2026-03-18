let currentPage = 0;
let cart = [];

/* SLIDE PAGE */
function slidePage(index){
currentPage = index;
document.querySelector(".container").style.transform =
"translateX(-" + (index * 100) + "vw)";
}

/* ADD TO CART */
function addToCart(name, price){
cart.push({name, price});
alert(name + " added to cart");
}

/* LOAD CART */
function loadCart(){
let list = document.getElementById("cartList");
list.innerHTML = "";
let total = 0;

cart.forEach(i=>{
let li = document.createElement("li");
li.innerText = i.name + " ₹" + i.price;
list.appendChild(li);
total += i.price;
});

document.getElementById("total").innerText = total;
}

/* AUTO LOAD CART */
setInterval(()=>{
if(currentPage === 3){
loadCart();
}
},500);

/* SEARCH */
function searchProduct(){
let input = document.getElementById("search").value.toLowerCase();
let items = document.querySelectorAll(".product");
let found = false;

items.forEach(i=>{
if(i.innerText.toLowerCase().includes(input)){
i.style.display="block";
found=true;
}else{
i.style.display="none";
}
});

document.getElementById("notFound").innerText =
found ? "" : "❌ Item not found";
}


/* CONTACT FORM VALIDATION */

function sendMessage(){

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let message = document.getElementById("message").value.trim();

let formMsg = document.getElementById("formMsg");

/* EMAIL PATTERN */
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

/* CHECK EMPTY */
if(name === "" || email === "" || message === ""){
formMsg.style.color = "red";
formMsg.innerText = "❌ All fields are required!";
return;
}

/* CHECK EMAIL FORMAT */
if(!pattern.test(email)){
formMsg.style.color = "red";
formMsg.innerText = "❌ Please enter a valid email (example@gmail.com)";
return;
}

/* SUCCESS */
formMsg.style.color = "green";
formMsg.innerText = "✅ Message sent successfully!";

/* CLEAR FORM */
document.getElementById("name").value="";
document.getElementById("email").value="";
document.getElementById("message").value="";
}
