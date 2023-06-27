"use strict";

function carousel() {
  let carouselSlider = document.querySelector(".carousel__slider");
  let list = document.querySelector(".carousel__list");
  let item = document.querySelectorAll(".carousel__item");
  let list2;

  const speed = 0.6;
  const width = list.offsetWidth;
  let x = 0;
  let x2 = width;

  function clone() {
    list2 = list.cloneNode(true);
    carouselSlider.appendChild(list2);
    list2.style.left = `${width}px`;
  }

  function move() {
    x -= speed;
    x2 -= speed;

    if (x < -width) {
      x += width;
    }

    if (x2 < -width) {
      x2 += width;
    }

    list.style.left = `${x}px`;
    list2.style.left = `${x2}px`;

    requestAnimationFrame(move);
  }

  clone();
  requestAnimationFrame(move);

  carouselSlider.addEventListener("mouseleave", unhover);
}

carousel();
