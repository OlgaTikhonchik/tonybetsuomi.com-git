// document.addEventListener("DOMContentLoaded", function () {
//   // sidebar
//   const button2 = document.querySelector(".menu__review-desk");
//   const list2 = document.querySelector(".menu__review");

//   if (button2 && list2) {
//     console.log("Button 2 and List 2 found");
//     list2.style.overflow = "hidden";
//     list2.style.maxHeight = "0";
//     list2.style.transition = "max-height 0.5s ease";

//     button2.addEventListener("click", function () {
//       const isActive = list2.classList.contains("active");
//       console.log("List 2 active:", isActive);

//       if (isActive) {
//         list2.style.maxHeight = "0";
//       } else {
//         list2.style.maxHeight = `${list2.scrollHeight}px`;
//       }

//       list2.classList.toggle("active", !isActive);
//       button2.classList.toggle("active", !isActive);
//     });
//   } else {
//     console.log("Button 2 or List 2 not found");
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  // sidebar
  const button2 = document.querySelector(".menu__review-desk");
  const list2 = document.querySelector(".menu__review");

  if (button2 && list2) {
    console.log("Button 2 and List 2 found");
    list2.style.overflow = "hidden";
    list2.style.transition = "max-height 0.5s ease";

    list2.classList.add("active");
    button2.classList.add("active");
    list2.style.maxHeight = `${list2.scrollHeight}px`;

    button2.addEventListener("click", function () {
      const isActive = list2.classList.contains("active");
      console.log("List 2 active:", isActive);

      if (isActive) {
        list2.style.maxHeight = "0";
      } else {
        list2.style.maxHeight = `${list2.scrollHeight}px`;
      }

      list2.classList.toggle("active", !isActive);
      button2.classList.toggle("active", !isActive);
    });
     window.addEventListener("resize", function () {
    if (list2.classList.contains("active")) {
      list2.style.maxHeight = `${list2.scrollHeight}px`;
    }
  });
  } else {
    console.log("Button 2 or List 2 not found");
  }
});

// page

document.addEventListener("DOMContentLoaded", function () {
  const button2 = document.querySelector(".menu__review-content");
  const list2 = document.querySelector(".menu__review-list");

  if (button2 && list2) {
    console.log("Button 2 and List 2 found");
    list2.style.overflow = "hidden";
    list2.style.maxHeight = "0";
    list2.style.transition = "max-height 0.5s ease";

    button2.addEventListener("click", function () {
      const isActive = list2.classList.contains("active");
      console.log("List 2 active:", isActive);

      if (isActive) {
        list2.style.maxHeight = "0";
      } else {
        list2.style.maxHeight = `${list2.scrollHeight}px`;
      }

      list2.classList.toggle("active", !isActive);
      button2.classList.toggle("active", !isActive);
    });
     window.addEventListener("resize", function () {
    if (list2.classList.contains("active")) {
      list2.style.maxHeight = `${list2.scrollHeight}px`;
    }
  });
  } else {
    console.log("Button 2 or List 2 not found");
  }
});



document.addEventListener("DOMContentLoaded", function () {
  // sidebar
  const button2 = document.querySelector(".menu__links-desk");
  const list2 = document.querySelector(".menu__links");

  if (button2 && list2) {
    console.log("Button 2 and List 2 found");

    list2.style.overflow = "hidden";
    list2.style.transition = "max-height 0.5s ease";

    // Открываем меню по умолчанию
    list2.style.maxHeight = list2.scrollHeight + "px";
    list2.classList.add("active");
    button2.classList.add("active");

    button2.addEventListener("click", function () {
      const isActive = list2.classList.contains("active");
      console.log("List 2 active:", isActive);

      if (isActive) {
        list2.style.maxHeight = "0";
      } else {
        list2.style.maxHeight = list2.scrollHeight + "px";
      }

      list2.classList.toggle("active", !isActive);
      button2.classList.toggle("active", !isActive);
    });
     window.addEventListener("resize", function () {
    if (list2.classList.contains("active")) {
      list2.style.maxHeight = `${list2.scrollHeight}px`;
    }
  });
  } else {
    console.log("Button 2 or List 2 not found");
  }
});
