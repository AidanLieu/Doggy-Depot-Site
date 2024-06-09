const logoDiv = document.querySelector(".logoDiv");
const logo = document.querySelector("#logo");
window.addEventListener("resize", windowCheck); 
window.addEventListener("scroll", windowCheck);

  function windowCheck(){
  if (window.innerWidth > 920) {
    if (window.scrollY > 50) {
      logoDiv.style.height = "85px";
      logoDiv.style.width = "85px";
      logo.style.width = "65px";
      logo.style.height = "65px";
      logoDiv.style.borderBottomRightRadius = "0px"; // Use camelCase
    } else {
      logoDiv.style.height = "180px";
      logoDiv.style.width = "180px";
      logo.style.width = "160px";
      logo.style.height = "160px";
      logoDiv.style.borderBottomRightRadius = "100px"; // Use quotes or camelCase
    }
  } else {
    if (window.scrollY > 50) {
      logoDiv.style.height = "40px";
      logoDiv.style.width = "35px";
      logo.style.width = "30px";
      logo.style.height = "30px";
      logoDiv.style.borderBottomRightRadius = "0px";
    } else {
      logoDiv.style.height = "80px";
      logoDiv.style.width = "70px";
      logo.style.width = "60px";
      logo.style.height = "60px";
      logoDiv.style.borderBottomRightRadius = "40px";// Use quotes or camelCase
    }
  }
}