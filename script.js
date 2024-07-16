document.addEventListener('DOMContentLoaded', function () {
    const contactButton = document.querySelector('.contact-btn');
    contactButton.addEventListener('click', function () {
      alert('Contact us button clicked!');
    });
  });

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const indicators = document.querySelectorAll(".indicator");
    const items = document.querySelectorAll(".carousel-item");
    let currentSlide = 0;
  
    function showSlide(index) {
      items.forEach((item, i) => {
        item.style.display = i === index ? "block" : "none";
      });
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle("active", i === index);
      });
    }
  
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        currentSlide = index;
        showSlide(currentSlide);
      });
    });
  
    showSlide(currentSlide);
  });
  