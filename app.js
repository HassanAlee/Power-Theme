// services-tab-js
const tabBtn = document.querySelectorAll(".service-tab-btn");
// console.log(tabBtn);
tabBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const content = document.querySelectorAll(".content-item");
    // console.log(content);
    const id = e.currentTarget.dataset.id;
    tabBtn.forEach((tab) => {
      tab.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    content.forEach((item) => {
      item.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  });
});
// services-tab-js end
// portfolio
const modalElm = document.querySelector(".modal"),
  modalImageELm = document.querySelectorAll(".modal-img img"),
  portfolioItem = document.querySelectorAll(".item img"),
  closeIcon = document.querySelector(".modal .bi-x");
portfolioItem.forEach((item) => {
  item.addEventListener("click", openPortfolio);
});
function openPortfolio(e) {
  e.preventDefault();
  modalElm.classList.add("active");
  const id = e.currentTarget.dataset.id;
  const element = modalElm.querySelector(`#${id}`);
  element.style.display = "block";
  closeIcon.addEventListener("click", () => {
    modalElm.classList.remove("active");
    element.style.display = "none";
  });
}
closeIcon.addEventListener("click", () => {
  modalElm.classList.remove("active");
});
// portfolio end

// blog posts
const blogBtns = document.querySelectorAll(".btn-blog"),
  blogContent = document.querySelectorAll(".blog-content-container .content");
// console.log(blogContent);
blogBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    blogBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    blogContent.forEach((content) => {
      content.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    const id = e.currentTarget.dataset.id;
    console.log(id);
    const element = document.querySelector(`#${id}`);
    element.classList.add("active");
  });
});
// blog posts end

// navbar javascript
const navElm = document.querySelector("nav");
window.addEventListener("scroll", () => {
  let y = window.scrollY;
  if (y >= 33) {
    navElm.classList.add("fixed");
  } else {
    navElm.classList.remove("fixed");
  }
});
