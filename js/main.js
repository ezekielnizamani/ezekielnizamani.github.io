const navbar = document.querySelector('.navbar')
const mobileMenu = document.querySelector(".mobile-menu")
const links = document.getElementsByClassName("list-link");


  mobileMenu.addEventListener("click", () => {
    navbar.classList.toggle("open");
  });


window.addEventListener('scroll',()=>
{
   if(window.scrollY > 50){
       navbar.classList.add("navbar--colored");
   }else{
       navbar.classList.remove("navbar--colored");
   }
})
for(let i = 0; i <links.length; i++){
links[i].addEventListener('click',()=>{
    navbar.classList.remove('open')
})
}
document.addEventListener("click", e => {
  const isClickInside = navbar.contains(e.target);

  if (!isClickInside) {
   navbar.classList.remove('open')
  }
});