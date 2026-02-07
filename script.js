const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const h3 = document.getElementById("h3")
h3.addEventListener('click',function(){
 document.location.href = "css.html"
})

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Simple contact form handler
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("thanks for your suggestion");
});
