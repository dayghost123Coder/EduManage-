
const sidebar = document.querySelector(".sidebar");
const toggle = document.querySelector(".menu-toggle");
const overLay = document.querySelector(".sidebar-overlay");
const closeBtn = document.querySelector(".sidebar-close");

function openMenu() {
  sidebar.classList.add("active");
  overLay.classList.add("active");
}

function closeMenu() {
  sidebar.classList.remove("active");
  overLay.classList.remove("active");
}

toggle.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
overLay.addEventListener("click", closeMenu);


//Select all navigation links inside the EduManage sidebar.
const navLinks= document.querySelectorAll(".nav-link");

navLinks.forEach(
  function(link){
    link.addEventListener("click", function(){
      // Remove the active class from all navigation links.
      navLinks.forEach(function(active){
        active.classList.remove("active");
      });
      link.classList.add("active");
      overLay.classList.remove("active");
      sidebar.classList.remove("active");
    });
  }
);

