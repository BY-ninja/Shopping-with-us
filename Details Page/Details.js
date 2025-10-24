
// 1️⃣ Thumbnail click => Main image change
const thumbnails = document.querySelectorAll('.thumbnails img');
const mainImage = document.getElementById('mainImage');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    mainImage.src = thumbnail.src;


  });
});


// 2️⃣ Quantity increase/decrease
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const qtyInput = document.getElementById('qty');

decreaseBtn.addEventListener('click', () => {
  let qty = parseInt(qtyInput.value);
  if (qty > 1) {
    qtyInput.value = qty - 1;
  }
});

increaseBtn.addEventListener('click', () => {
  let qty = parseInt(qtyInput.value);
  qtyInput.value = qty + 1;
});


// Accordion functionality - allow only one open
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;

    // Close all other open accordions
    document.querySelectorAll(".accordion-item").forEach(i => {
      if (i !== item) {
        i.classList.remove("active");
      }
    });

    // Toggle current one
    item.classList.toggle("active");
  });
});