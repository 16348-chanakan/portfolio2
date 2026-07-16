// ===============================
// Portfolio by Nana
// ===============================


// เอฟเฟกต์ Fade In ตอนเลื่อน
const faders = document.querySelectorAll(".fade");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

faders.forEach(item=>{

observer.observe(item);

});




// Active Menu

const currentPage = window.location.pathname.split("/").pop();

const menuLinks = document.querySelectorAll("nav a");

menuLinks.forEach(link=>{

const href = link.getAttribute("href");

if(href === currentPage){

link.classList.add("active");

}

});




// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});




// ปุ่ม Scroll To Top

const topButton = document.createElement("button");

topButton.innerHTML="⬆";

topButton.id="topBtn";

document.body.appendChild(topButton);



window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});



topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});




// ปุ่ม Hover เด้ง

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px) scale(1.05)";

});



btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0px) scale(1)";

});

});




// Loading Console

console.log("Portfolio Loaded Successfully 🌸");
#topBtn{

position:fixed;

bottom:30px;

right:30px;

width:50px;

height:50px;

border:none;

border-radius:50%;

background:#ff7ba9;

color:white;

font-size:22px;

cursor:pointer;

display:none;

box-shadow:0 5px 15px rgba(0,0,0,.2);

transition:.3s;

z-index:999;

}

#topBtn:hover{

background:#ff5c8a;

transform:scale(1.1);

}
