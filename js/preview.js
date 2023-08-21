function gotoPrevious() {
  window.location.href = "index.html";
}

const copyButton = document.getElementById("copyButton");
const messageBox = document.getElementById("messageBox");

copyButton.addEventListener("click", copyPageLink);

function copyPageLink() {
  const currentURL = window.location.href;

  // Copy the link to clipboard
  copyToClipboard(currentURL);

  // Show a message box to inform the user
  messageBox.textContent = "Link copied!";
  messageBox.classList.add("show");

  // Hide the message box after 2 seconds
  setTimeout(() => {
    messageBox.classList.remove("show");
    messageBox.textContent = "";
  }, 2000);
}

function copyToClipboard(text) {
  const tempInput = document.createElement("input");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

const storedData = localStorage.getItem("linkData")
  ? JSON.parse(localStorage.getItem("linkData"))
  : [];
const storedData2 = localStorage.getItem("secondPageData")
  ? JSON.parse(localStorage.getItem("secondPageData"))
  : [];



const mobileBody = document.querySelector(".mobile-body");
const nameForMobile = mobileBody.querySelector("#name-for-mobile");
const emailForMobile = mobileBody.querySelector("#email-for-mobile");
const firstPageData = mobileBody.querySelector(".first-page-data");
const secondPageData = mobileBody.querySelector(".second-page-data");

// Set name and email text content

nameForMobile.textContent =
  storedData2.firstName && storedData2.lastName
    ? `${storedData2.firstName.charAt(0).toUpperCase() + storedData2.firstName.slice(1)} ${storedData2.lastName.charAt(0).toUpperCase() + storedData2.lastName.slice(1)}`
    : "";








emailForMobile.textContent = storedData2.email || "";



// Create and append image to the second page data
const imageUploadCircle = secondPageData.querySelector(".image-upload-circle");
if(storedData2.imagePreview){
  
const image = document.createElement("img");
image.setAttribute("src", (storedData2.imagePreview || "no-image-icon-4.png"));
image.setAttribute("width", "96");
image.setAttribute("height", "96");
imageUploadCircle.appendChild(image);




console.log("sdfnk",storedData);
const rectangleElements = document.querySelectorAll(".rectangle");
storedData.forEach((linkData, index) => {
  console.log(linkData.linkInput);
  if (index < rectangleElements.length) {
    const rectangle = rectangleElements[index];

  
    
    rectangle.style.backgroundColor = linkData.color;
    const image = document.createElement("img");
    image.src = `images/${linkData.selectedOption}_icon.png`;
    image.style.marginRight = "5px";
    // image.classList.add("icon-image")
    rectangle.appendChild(image);

    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = linkData.selectLink;
    // nameParagraph.classList.add("text-icon")
    rectangle.appendChild(nameParagraph);
    

    const img=document.createElement("img");
    img.src= `images/arrow-mark.png`;
    img.style.marginLeft= "auto";
    rectangle.appendChild(img);

    
    rectangle.style.backgroundColor = linkData.color;

    rectangle.addEventListener("click", () => {
      window.open(linkData.linkInput, "_blank");
    });
  }
});}
