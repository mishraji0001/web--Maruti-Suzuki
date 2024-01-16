// Dynamic Navigation Generation
const pages = [
  { label: "Home", link: "home.html" },
  { label: "Corporate", link: "corporate.html" },
  { label: "Drive-car", link: "drive.html" },
  { label: "service", link: "service.html" },
  { label: "Contact", link: "contact.html" },
  { label: "Login", link: "login page.html" },
  { label: "Sign up", link: "Sign up.html" },
];

const navElement = document.getElementById("dynamicNav");

pages.forEach((page) => {
  const linkElement = document.createElement("a");
  linkElement.href = page.link;
  linkElement.textContent = page.label;
  navElement.appendChild(linkElement);
});

/* // ing hover
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};*/
