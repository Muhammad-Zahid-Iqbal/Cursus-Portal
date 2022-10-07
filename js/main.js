/*This is code of SidebarMenu in which catagory exist start here */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
   window.onclick = function(event) {
     if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
      
     }
   }
  /*This is code of SidebarMenu in which catagory exist end
   here */

   
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function yourFunction() {
  document.getElementById("yourDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.drop-envolpe')) {
    var dropdown = document.getElementsByClassName("content-envolpe");
    var i;
    for (i = 0; i < dropdown.length; i++) {
      var openDropdown1 = dropdown[i];
      if (openDropdown1.classList.contains('show')) {
        openDropdown1.classList.remove('show');
      }
    }
  }
}







function yourFunction2() {
  document.getElementById("yourDropdown2").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event2) {
  if (!event2.target.matches('.drop-envolpe2')) {
    var dropdown2 = document.getElementsByClassName("content-envolpe2");
    var j;
    for (j = 0; j < dropdown2.length; j++) {
      var openDropdown2 = dropdown2[j];
      if (openDropdown2.classList.contains('show')) {
        openDropdown2.classList.remove('show');
      }
    }
  }
}

/* Here is javascript code for account */

function yourFunction3() {
  document.getElementById("yourAccount").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event3) {
  if (!event3.target.matches('.drop-account')) {
    var dropdown3 = document.getElementsByClassName("content-account");
    var i;
    for (i = 0; i < dropdown3.length; i++) {
      var openDropdown3 = dropdown3[i];
      if (openDropdown3.classList.contains('show')) {
        openDropdown3.classList.remove('show');
      }
    }
  }
}

//Initialize Swiper 

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  // slidesPerGroup: 3,
   loop: true,
   loopFillGroupWithBlank: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
