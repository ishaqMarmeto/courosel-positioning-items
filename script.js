document.addEventListener('DOMContentLoaded', function () {
  // JSON data for the carousel
  const data = {
    "carousel": {
      "settings": {
        "type": "loop",
        "perPage": 1,
        "autoplay": true,
        "interval": 3000,
        "arrows": true,
        "pagination": true
      },
      "slides": [
        {
          "title": "Womens Apparel",
          "description": "Elevate your wardrobe<br> with our limited-time <br>fashion offer!.",
          "button_text": "Explore More",
          "image_url": "https://veena-theme-fashion.myshopify.com/cdn/shop/files/1.png?v=1705665890&width=3840",
          "alt_text": "Image of Product 1",
          "product_url": "#",  // Replace with actual product URL if available
          "position_class": "position-middle-center"
        },
        {
          "title": "Trendy classic",
          "description": "Discover Signature Look:<br> Fashion Forward and Fabulous!.",
          "button_text": "Shop Now",
          "image_url": "https://veena-theme-fashion.myshopify.com/cdn/shop/files/4.png?v=1705665890&width=3840",
          "alt_text": "Image of Product 2",
          "product_url": "#",  // Replace with actual product URL if available
          "position_class": "position-middle-start"
        },
        {
          "title": "Modern Eligence",
          "description": "Step into the World of <br>Style with the Latest <br>Fashion Trends Unveiled!.",
          "button_text": "Explore More",
          "image_url": "https://veena-theme-fashion.myshopify.com/cdn/shop/files/3.png?v=1705665898&width=3840",
          "alt_text": "Image of Product 3",
          "product_url": "#",  // Replace with actual product URL if available
          "position_class": "position-middle-end"
        }
      ]
    }
  };

  // Get the Splide list element
  const splideList = document.querySelector('.splide__list');

  // Add slides dynamically based on JSON data
  data.carousel.slides.forEach(slide => {
    const li = document.createElement('li');
    li.className = 'splide__slide';
    li.innerHTML = `
      <img src="${slide.image_url}" alt="${slide.alt_text}">
      <div class="carousel-content ${slide.position_class}">
        <h2>${slide.title}</h2>
        <h1>${slide.description}</h1>
        <button><a href="${slide.product_url}">${slide.button_text}</a></button>
      </div>
    `;
    splideList.appendChild(li);
  });

  // Initialize Splide after slides are added
  const splide = new Splide('#splide', data.carousel.settings);
  splide.mount();

  // Update slide position dynamically based on dropdown selection
  document.getElementById('position').addEventListener('change', function(event) {
    const selectedPosition = event.target.value;
    const slides = document.querySelectorAll('.carousel-content');
    slides.forEach(slide => {
      slide.className = `carousel-content ${selectedPosition}`;
    });
  });
});
