
//Select all navigation links inside the EduManage sidebar.
const navLinks= 
  document.querySelectorAll(".nav-link");

navLinks.forEach(
  function(link){
    link.addEventListener("click", function(){
      // Remove the active class from all navigation links.
      navLinks.forEach(function(active){
        active.classList.remove("active")
      });
      link.classList.add("active");
    });
  }
);

