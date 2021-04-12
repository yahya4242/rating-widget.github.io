const btn = document.querySelector("button");
const post = document.querySelector(".post");
const editBtn = document.querySelector(".edit");
const widget = document.querySelector(".star-widget");

btn.addEventListener("click", function () {
    widget.style.display = "none";
    post.style.display = "block";

});

editBtn.addEventListener("click", function () {
    widget.style.display = "block";
    post.style.display = "none";
});