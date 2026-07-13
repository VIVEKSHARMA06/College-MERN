const sidebar = document.querySelector(".sidebar");
const openBtn = document.querySelector("#side");
const closeBtn = document.querySelector(".X");

openBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
});
console.log("New Project");
