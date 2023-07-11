"use strict";

function carousel() {
  let carouselSlider =                document.querySelector(".carousel__slider");
  let list = document.querySelector(".carousel__list");
  let item = document.querySelectorAll(".carousel__item");
  let list2;

  const speed = 1.2;

  const width = list.offsetWidth;
  let x = 0;
  let x2 = width;

  function clone() {
    list2 = list.cloneNode(true);
    carouselSlider.appendChild(list2);
    list2.style.left = `${width}px`;
  }

  function moveFirst() {
    x -= speed;

    if (width >= Math.abs(x)) {
      list.style.left = `${x}px`;
    } else {
      x = width;
    }
    requestAnimationFrame(moveFirst);
  }

  function moveSecond() {
    x2 -= speed;

    if (list2.offsetWidth >= Math.abs(x2)) {
      list2.style.left = `${x2}px`;
    } else {
      x2 = width;
    }
    requestAnimationFrame(moveSecond);
  }

  

 

  clone();

   requestAnimationFrame(moveFirst);
   requestAnimationFrame(moveSecond);
  
  carouselSlider.addEventListener("mouseleave", unhover);
}

carousel();