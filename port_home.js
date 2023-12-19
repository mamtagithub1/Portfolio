  // scroll bar scipt
    window.onscroll = function() {myFunction()};
    
    function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
    }


// const filled=document.querySelector('.progress-container');
// function update(){
//     filled.style.width=`${((window.scrollY)/(document.body.scrollHeight-window_innerheight)*100)}%`
//     requestAnimationFrame(update)
// }
// update();
//scroll animation stop
  $(document).ready(function() {
      // Toggle details on click
      $('.event').click(function() {
      $(this).toggleClass('active').siblings().removeClass('active');
      });
  });

      var typed = new Typed('#element', {
      strings: ['Coder','Tester','Python Developer','Web Designer'],
      typeSpeed: 50,
      backspeed:150,
      loop:true,
      });
      const inputs = document.querySelectorAll(".input");

  function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
  }

  function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
      parent.classList.remove("focus");
  }
  }

  inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
  });