document.addEventListener("DOMContentLoaded", function () {
    const typewriter = document.querySelector(".typewriter");
    const texts = [
      "Saya Faqih",
      "Mahasiswa Politeknik Negeri Bandung",
      "Jurusan Teknik Elektro",
      "Program Studi D-IV Teknik Otomasi Industri",
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 90;
    const deleteSpeed = 25;
    const pauseAfterTyping = 1500;
    const pauseAfterDeleting = 500;
  
    function type() {
      if (isDeleting) {
        typewriter.textContent = texts[textIndex].substring(0, charIndex--);
        if (charIndex < 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
          setTimeout(type, pauseAfterDeleting);
        } else {
          setTimeout(type, deleteSpeed);
        }
      } else {
        typewriter.textContent = texts[textIndex].substring(0, charIndex++);
        if (charIndex > texts[textIndex].length) {
          isDeleting = true;
          setTimeout(type, pauseAfterTyping);
        } else {
          setTimeout(type, typeSpeed);
        }
      }
    }
  
    type();
  
    window.addEventListener("load", () => window.scrollTo(0, 0));
  
    function setActiveLink() {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll("nav ul li a");
      let activeIndex = -1;
  
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          activeIndex = index;
        }
      });
  
      navLinks.forEach((link, index) => {
        link.classList.toggle("active", index === activeIndex);
      });
    }
  
    window.addEventListener("scroll", setActiveLink);
  
    setActiveLink();
  
    const lazyLoadSections = document.querySelectorAll(".lazy-load");
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
  
    lazyLoadSections.forEach((section) => observer.observe(section));
  
    document.querySelectorAll(".fade-in").forEach(function (element) {
      const checkVisibility = () => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          element.classList.add("in-view");
        }
      };
      checkVisibility();
      window.addEventListener("scroll", checkVisibility);
    });
  });
  
  window.addEventListener("load", function () {
    document.querySelector(".loading-spinner").style.display = "none";
  });
  
  