const wrapper = document.getElementById("buttonWrapper");
    const leftArrow = document.getElementById("left");
    const rightArrow = document.getElementById("right");

    let currentIndex = 0;
    const visibleCount = 3;
    const totalButtons = wrapper.children.length;

    function updateCarousel() {
      const offset = currentIndex * 110; // Approx width + margin
      wrapper.style.transform = `translateX(-${offset}px)`;
      leftArrow.disabled = currentIndex === 0;
      rightArrow.disabled = currentIndex + visibleCount >= totalButtons;
    }

    leftArrow.addEventListener("click", () => {
      if (currentIndex > 0) currentIndex--;
      updateCarousel();
    });

    rightArrow.addEventListener("click", () => {
      if (currentIndex + visibleCount < totalButtons) currentIndex++;
      updateCarousel();
    });

    const buttons = wrapper.querySelectorAll("button");

    buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active")); // Remove from all
        btn.classList.add("active"); // Add to clicked
    });
    });


    updateCarousel();