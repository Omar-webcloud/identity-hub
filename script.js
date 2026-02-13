 const toggle = document.getElementById("navbarToggle");
const menu = document.getElementById("navbarMenu");

toggle.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", isOpen);
});

 
 
 
 const swiper = new Swiper("#testimonialsSwiper", {
        loop: true,
        autoplay: {
          delay: 1000000, 
          disableOnInteraction: false,
        },
        pagination: {
          el: "#dotsContainer",
          clickable: true,
          renderBullet: (index, className) => {
            return `<button class="dot ${className}" data-index="${index}"></button>`;
          },
        },
        navigation: {
          nextEl: ".btn-next",
          prevEl: ".btn-prev",
        },
        speed: 600,
        effect: "slide",
      });

      
      swiper.on("slideChange", () => {
        document.querySelectorAll(".dot").forEach((dot, index) => {
          dot.classList.toggle("active", index === swiper.realIndex);
        });
      });
     
      document.querySelectorAll(".dot")[0].classList.add("active");
