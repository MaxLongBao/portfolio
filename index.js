const navbar = document.getElementById("second-nav")
const navbarFirst = document.getElementById("first-nav");

window.onscroll = function() {
    const isScrollUp = (this.oldScroll > this.scrollY);
    this.oldScroll = this.scrollY;
    if (isScrollUp) {
        console.log(navbar.classList.add("scroll"));
        setTimeout(function(){ navbar.classList.add("scroll-animation"); }, 1);
        navbar.classList.remove("display");
        if (scrollY === 0) {
            navbar.classList.add("display");
            navbarFirst.classList.remove("hide");
        } else {
            navbar.classList.remove("display");
        }
    } else {
        setTimeout(function(){ navbar.classList.remove("scroll-animation"); }, 250);
        navbar.classList.add("scroll");
        navbarFirst.classList.add("hide");
    }
  }