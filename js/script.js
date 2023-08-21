// Define the secondfunction variable at the beginning of your script
let secondfunction = null;

// ...



// ...
secondfunction = document.getElementById("second-function-elements");

// Function to handle the "Save" button click on the second page
function onSaveClickSecondPage() {
    // ...

    // Update the content of the secondfunction element
    secondfunction.innerHTML = html;

    // Save the data in a JavaScript object
    const secondPageData = {
        imagePreview: imagePreview.src,
        firstName: firstName,
        lastName: lastName,
        email: email,
    };

    localStorage.setItem("secondPageData", JSON.stringify(secondPageData));
}

// ...

// Define a function to handle loading the data
function loadDataFromLocalStorage() {
    // Load and display data for the second page
    const savedSecondPageData = localStorage.getItem("secondPageData");
    if (savedSecondPageData) {
        const secondPageData = JSON.parse(savedSecondPageData);
        const imagePreview = document.getElementById("imagePreview");
        const firstNameInput = document.getElementById("first-name");
        const lastNameInput = document.getElementById("last-name");
        const emailInput = document.getElementById("email");
        const secondfunction = document.getElementById("second-function-elements");

        // Populate the elements with the saved data
        imagePreview.src = secondPageData.imagePreview || "";
        firstNameInput.value = secondPageData.firstName || "";
        lastNameInput.value = secondPageData.lastName || "";
        emailInput.value = secondPageData.email || "";

        // Construct the HTML based on the saved data
        let imageHtml = "";
        if (imagePreview.src) {
            imageHtml = `<svg width="500" height="500">
                <defs>
                    <clipPath id="circleClip">
                    <circle cx="274.5" cy="230" r="48"></circle>
                    </clipPath>
                </defs>
                
                <image href="${imagePreview.src}" width="96" height="96" x="227.5" y="180" clip-path="url(#circleClip)"></image>
                </svg>
                `;

            const firstName = firstNameInput.value;
            const lastName = lastNameInput.value;
            function capitalizeFirstLetter(str) {
                return str.charAt(0).toUpperCase() + str.slice(1);
            }

            // Capitalize the first letter of the first name and last name
            const capitalizedFirstName = capitalizeFirstLetter(firstName);
            const capitalizedLastName = capitalizeFirstLetter(lastName);

            // const lineSpacing = 1.2; // Adjust this value to control line spacing

            // const nameHtml = `<text x="220" y="321" font-size="18" fill="#000" font-weight="600">
            //     <tspan x="220" dy="${lineSpacing}em">${capitalizedFirstName} ${capitalizedLastName}</tspan>
            // </text>`;

            const nameHtml = `<text width="160" height="16" x="234" y="321" font-size="18" fill="#000" font-weight="600">${capitalizedFirstName} ${capitalizedLastName}</text>`;

            // const nameHtml = `<text width="160" height="16" x="230" y="321" font-size="25" fill="#000">${firstNameInput.value} ${lastNameInput.value}</text>`;
            const emailHtml = `<text width="72" height="8" x="206" y="347" font-size="14" fill="#000">${emailInput.value}</text>`;

            const html = imageHtml + nameHtml + emailHtml;
            secondfunction.innerHTML = html;

            // reload_data()
        }
    }
    const firstfunction = document.getElementById("first-function-elements");

    const storedData = JSON.parse(localStorage.getItem("linkData") || "[]");

    const y1Initial = 379;
    const y2Initial = 387;
    const y3Initial = 404;
    const y4Initial = 397;

    let y1 = y1Initial;
    let y2 = y2Initial;
    let y3 = y3Initial;
    let y4 = y4Initial;

    storedData.forEach((linkData) => {
        const { linkInput, selectLink, color, selectedOption } = linkData;

        // Construct the HTML for the link using the stored data
        const linkHtml = `
      <a href="${linkInput}" class='link-section'>
        <g fill="white" font-family="Arial" font-size="16" text-anchor="middle">
          <rect x="161" y="${y1}" width="237" height="44" rx="8" fill="${color}"></rect>
          <image href="images/${selectedOption}_icon.png" width="24" height="24" x="180" y="${y2}"></image>
          <text x="246" y="${y3}">${selectLink}</text>

          <image href="images/side-arrow.png" x="370" y="${y4}"></image>
        
        </g>
      </a>
      <g fill="white" font-family="Arial" font-size="16" text-anchor="middle">
      </g>
      
    `;

        // Append the HTML to the container
        firstfunction.innerHTML += linkHtml;
        // Increment the y positions
        y1 += 64;
        y2 += 64;
        y3 += 64;
        y4 += 64;
    });
    if (storedData) {
        update_form(storedData);
    }
}
$(document).on("click", "#delete-data", function (e) {
    var existingData = JSON.parse(localStorage.getItem("linkData")) || [];
    linkData = [];
    existingData.forEach((linkData1) => {
        if (linkData1["selectedOption"] !== $(this).attr("value")) linkData.push(linkData1);
    });
    localStorage.setItem("linkData", JSON.stringify(linkData));
    location.reload();
    // $(this).parent().siblings('.link-section').remove()
    // $(this).parent().remove()
    // reload_data()
});

document.addEventListener("DOMContentLoaded", loadDataFromLocalStorage);

var sharedState = {
    uploadedImageURL: "",
    firstName: "",
    lastName: "",
    email: "",
};

let html = "";

// Get references to the div elements and the SVG element
const saveButton = document.getElementById("save-btn");
const saveButton2 = document.getElementById("save-btn2");
const div1 = document.getElementById("toggle-1");
const div2 = document.getElementById("toggle-2");
const div3 = document.getElementById("main-div");
const div4 = document.getElementById("main-div2");
const devlink = document.querySelector(".desktop-1");
// const devlink = document.getElementById("home-link");
const svgicon = document.getElementById("view-profile");
const svgicon1 = document.getElementById("view-profile2");

// Function to return to home page
// devlink.addEventListener("click", () => {
//     div1.style.display = "block";
//     div2.style.display = "block";
//     div3.style.display = "none";
//     div4.style.display = "none";
// });

function returnToHomePage() {
    div1.style.display = "block";
    div2.style.display = "block";
    div3.style.display = "none";
    div4.style.display = "none";
    const rectElement = document.querySelector(".topnav-d-rect");
    const rectElement3 = document.querySelector(".topnav-c-rect");
    let grey1 = document.getElementById("r-tg-1");
    let grey2 = document.getElementById("r-tg-2");
    let grey3 = document.getElementById("r-tg-3");
    let blue1 = document.getElementById("l-tg-1");
    let blue2 = document.getElementById("l-tg-2");
    let blue3 = document.getElementById("l-tg-3");


    // let blue4 = document.getElementById("l-tg-4");

    
    // Change the fill attribute of the rect element
    if (rectElement) rectElement.setAttribute("display", "none");
    rectElement3.setAttribute("display", "block");
    grey1.setAttribute("fill", "#737373");
    grey2.setAttribute("fill", "#737373");
    grey3.setAttribute("fill", "#737373");

    
    
    blue1.setAttribute("fill", "#633CFF");
    blue2.setAttribute("fill", "#633CFF");
    // let blue3 = document.getElementById("l-tg-3");
    blue3.setAttribute("fill", "#633CFF");

    // blue4.setAttribute("fill","#red");

}
devlink.addEventListener("click", returnToHomePage);
// Assuming you have multiple elements with the class "desktop-1"
const desktopLinks = document.getElementsByClassName("desktop-1");
for (const link of desktopLinks) {
    link.addEventListener("click", returnToHomePage);
}
// Function to handle the SVG click event
svgicon.addEventListener("click", () => {
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "block";
    div4.style.display = "block";
    // Get a reference to the SVG container
    const svgContainer2 = document.querySelector(".desktop-2");

    // Create the <rect> element
    const rectElement2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rectElement2.setAttribute("class", "topnav-d-rect");
    rectElement2.setAttribute("x", "0.5");
    rectElement2.setAttribute("width", "100%");
    rectElement2.setAttribute("height", "46");
    rectElement2.setAttribute("rx", "8");
    rectElement2.setAttribute("fill", "#EFEBFF");

    // Get the first child element of the SVG container
    const firstChild = svgContainer2.firstChild;

    // Insert the <rect> element before the first child element
    svgContainer2.insertBefore(rectElement2, firstChild);
    // Find the <rect> element with the class "topnav-c-rect"
    const rectElement = document.querySelector(".topnav-c-rect");
    let blue1 = document.getElementById("r-tg-1");
    let blue2 = document.getElementById("r-tg-2");
    let grey1 = document.getElementById("l-tg-1");
    let grey2 = document.getElementById("l-tg-2");
    // Change the fill attribute of the rect element
    rectElement.setAttribute("display", "none");
    grey1.setAttribute("fill", "#737373");
    grey2.setAttribute("fill", "#737373");
    blue1.setAttribute("fill", "#633CFF");
    blue2.setAttribute("fill", "#633CFF");
});

//for mobile
svgicon1.addEventListener("click", () => {
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "block";
    div4.style.display = "block";
    let blue3 = document.getElementById("r-tg-3");
    blue3.setAttribute("fill", "#633CFF");


    let blue4 = document.getElementById("l-tg-4");
    blue4.setAttribute("fill","white");
    
    
    const rectElement6 = document.querySelector(".topnav-c-rect");
    rectElement6.style.display = "none";
    let grey3 = document.getElementById("l-tg-3");
    grey3.setAttribute("fill", "#737373");
   

    
});

// Add a click event listener to the "imagePreview" element
const imagePreview = document.getElementById("imagePreview");
// const imagePreview = document.getElementById("uploadedImage");
const imageUpload = document.getElementById("imageUpload");

imagePreview.addEventListener("click", () => {
    imageUpload.click();
});
// Function to handle the image upload change event
imageUpload.addEventListener("change", () => {
    const file = imageUpload.files[0];
    if (file) {
        // Display the selected image as a preview
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.src = e.target.result;
            // imagePreview.setAttribute("xlink:href", e.target.result);
        };
        reader.readAsDataURL(file);
    } else {
        // If the user cancels the file selection, reset the image preview
        imagePreview.src = "upload.png";
    }
});
let linkCounter = 0; // Counter to keep track of added links
const parentContainerFist = document.querySelector("#boxContainer");
const remove = document.getElementById("remove-btn");

//link1 remove
remove.addEventListener("click", (e) => {
    const originalBox = document.querySelector(".select-wrapper");
    originalBox.style.display = "none";
    var linkData = [];
    var existingData = JSON.parse(localStorage.getItem("linkData")) || [];
    existingData.forEach((linkData1) => {
        if (linkData1["selectedOption"] !== $(".select-wrapper").find(".selectlink").val()) linkData.push(linkData1);
    });
    $(originalBox).find(".selectlink").val("");
    $(originalBox).find(".linkInput").val("");
    $(originalBox).find(".btn-selectone").val("");
    $(originalBox).find(".btn-selectone").html("select option");
    linkCounter--;
    localStorage.setItem("linkData", JSON.stringify(linkData));
    rearrange_list()
    reload_data();
    const rightIconDown = document.querySelector(".right-icon-down");
    const hiddenDiv = document.querySelector(".hidden");
    if (linkCounter === 0) {
        rightIconDown.style.display = "flex";
        hiddenDiv.classList.remove("show");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.querySelector(".link-btn1");
    const hiddenDiv = document.querySelector(".hidden");
    const rightIconDown = document.querySelector(".right-icon-down");
    const parentContainer = document.querySelector("#boxContainer");
    const originalBox = document.querySelector(".select-wrapper");

    addButton.addEventListener("click", () => {
        console.log("pppppppppppppp");
        if (linkCounter === 0) {
            hiddenDiv.classList.add("show");
            rightIconDown.style.display = "none";
            originalBox.style.display = "block";
            linkCounter++;
        } else if (linkCounter === 5) {
            alert("maximum limit reached");
        } else {
            // Clone the original box to create a new one
            const newBox = originalBox.cloneNode(true);
            newBox.style.display = "block";

            var bx = newBox.querySelector(".box-number");
            svgHtml = `<svg class="two-line" width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="12" height="1" fill="#737373"/>
            <rect y="5" width="12" height="1" fill="#737373"/>
            </svg>`;
            bx.innerHTML = `${svgHtml}<text class="counter" font-size="16" style="font-weight: 700; position:relative; left: 7px; color:
            #737373">Link #${linkCounter + 1}</text>`;
            const removeButton = newBox.querySelector(".remove-btn");

            //remove button
            removeButton.addEventListener("click", () => {
                linkCounter--;
                parentContainer.removeChild(newBox);
                if (linkCounter === 0) {
                    rightIconDown.style.display = "flex";
                    hiddenDiv.classList.remove("show");
                }
                var linkData = [];
                var existingData = JSON.parse(localStorage.getItem("linkData")) || [];
                existingData.forEach((linkData1) => {
                    if (linkData1["selectedOption"] !== $(newBox).find("select").val()) {
                        linkData.push(linkData1);
                    }
                });
                console.log(linkData);
                localStorage.setItem("linkData", JSON.stringify(linkData));
                rearrange_list()
                reload_data();
            });

            // Reset input values
            newBox.querySelector("input[type='text']").value = "";
            newBox.querySelector("select").selectedIndex = 0;
            // Append the new box to the parent container
            parentContainer.appendChild(newBox);
            // Append the image to a container element (e.g., the body)
            // parentContainer.appendChild(image);
            linkCounter++; // Increment the link counter

            // $(newBox)
            //     .find(".vodiapicker")
            //     .removeClass("vodiapicker")
            //     .addClass("vodiapicker" + linkCounter)
            //     .attr("id", "selectlink" + linkCounter);
            // $(newBox)
            //     .find(".btn-select")
            //     .removeClass("btn-select")
            //     .addClass("btn-select" + linkCounter);
            // $(newBox)
            //     .find(".b")
            //     .removeClass("b")
            //     .addClass("b" + linkCounter);
            // $(newBox)
            //     .find("#a")
            //     .attr("id", "a" + linkCounter);
            update(linkCounter, $(newBox));
        }
    });
});

//for dropdown click
function update(linkCounter, newBox) {
    let langArray = [];
    newBox.find('.selectlink option').each(function () {
        var img = $(this).attr("data-thumbnail");
        var text = this.innerText;
        var value = $(this).val();
        var item =
            '<li><img src="' +
            img +
            '" alt="" value="' +
            value +
            '"/><span style="padding-left:10px">' +
            text +
            "</span></li>";
        langArray.push(item);
    });
    newBox.find("#a").html(langArray);

    //Set the button value to the first el of the array
    // $(".btn-select" + linkCounter).html("select options");

    newBox.find(".btn-select").html('<span class="select-option">Select option</span>');
    newBox.find(".btn-select").attr("value", "");
    newBox.find(".linkInput").attr("placeholder", "paste link here");

    // change button stuff on click
    newBox.find("li").click(function (e) {
        // $(".btn-select img.arrow-down-btn-" + linkCounter).addClass("rotate-180");

        var img = $(this).find("img").attr("src");
        var value = $(this).find("img").attr("value");
        var text = this.innerText;
        var item = '<li><img src="' + img + '" alt="" /><span style="padding-left: 10px" >' + text + "</span></li>";

        // $('.btn-select img.arrow-down-btn').addClass('rotate-180');
        newBox.find(".btn-select").html(item);
        newBox.find(".btn-select").attr("value", value);
        parent = $(this);
        $(".selectlink").each(function (index2, element2) {
            if ($(element2).attr("id") !== newBox.find(".selectlink").attr("id")) {
                if ($(element2).val() == value) {
                    let message = "this option alredy selected";
                    newBox.find(".linkInput").addClass("error");
                    newBox.find(".error-message").text(message);
                    saveButton.disabled = true;
                    saveButton.style.opacity = 0.5;
                } else {
                    newBox.find(".error-message").text("");
                }
            }
        });

        newBox.find(".selectlink").val(value);
        newBox.find(".btn-select").toggleClass("open");
        newBox.find(".b").toggle();

        var selectedOption = newBox.find(".selectlink").val();
        var placeholderText = "";

        if (selectedOption === "github") {
            placeholderText = "https://www.github.com/username/repository";
        } else if (selectedOption === "youtube") {
            placeholderText = "https://www.youtube.com/user/username";
        } else if (selectedOption === "linkedin") {
            placeholderText = "https://www.linkedin.com/in/username";
        }

        newBox.find(".linkInput").attr("placeholder", placeholderText);
    });

    //fot down byn
    arbtn = document.getElementById("icon-for-down-" + linkCounter);
    newBox.find(".btn-select").click(function () {
        $(this).toggleClass("open");
        newBox.find(".b").toggle();
    });
}
// Function to validate the link and toggle the save button
const linkInput = document.getElementById("linkInput");
const linkErrorMessage = document.getElementById("linkErrorMessage");
const selectLink = document.getElementById("selectlink");

// linkInput.addEventListener("input", validateLinkAndToggleSaveButton);

function validateLinkAndToggleSaveButton(element) {
    const link = $(element).val().trim();
    // let isValidLink = checkelinkexist(element);
    let isValidLink = true;
    if (isValidLink) {
        isValidLink = validateLinkV2(link, element);
        saveButton.disabled = !isValidLink;
        saveButton.style.opacity = isValidLink ? 1 : 0.5;

        $(element).toggleClass("error", !isValidLink);

        let message = isValidLink ? "" : "Please check the URL.";
        $(element).siblings(".error-message").text(message);
    } else {
        saveButton.disabled = !isValidLink;
        saveButton.style.opacity = isValidLink ? 1 : 0.5;

        $(element).toggleClass("error", !isValidLink);

        let message = isValidLink ? "" : "this option alredy added";
        $(element).siblings(".error-message").text(message);
        $(element).siblings(".error-message").show();
    }
    // linkInput.classList.toggle("error", !isValidLink);
    function showError(element, message) {
        element.classList.add("error");
        linkErrorMessage.textContent = message;
    }
}

// function validateLinkAndToggleSaveButton(element) {
//     const link = $(element).val().trim();
//     // let isValidLink = checkelinkexist(element);
//     let isValidLink = true;
//     let message = "cab'r";

//     if (isValidLink) {
//         isValidLink = validateLinkV2(link, element);
//         saveButton.disabled = !isValidLink;
//         saveButton.style.opacity = isValidLink ? 1 : 0.5;

//         $(element).toggleClass("error", !isValidLink);

//         message = isValidLink ? "" : "Please check the URL.";
//     }

//     else {
//         saveButton.disabled = !isValidLink;
//         saveButton.style.opacity = isValidLink ? 1 : 0.5;

//         $(element).toggleClass("error", !isValidLink);

//         message = "This option already added";
//         $(element).siblings(".error-message").show();
//     }

//     // Show error message only if message is not empty and isValidLink is false
//     if (!isValidLink && message.trim() !== "") {
//         $(element).siblings(".error-message").text(message);
//     } else {
//         $(element).siblings(".error-message").text("");
//     }

//     // linkInput.classList.toggle("error", !isValidLink);
//     function showError(element, message) {
//         element.classList.add("error");
//         linkErrorMessage.textContent = message;
//     }
// }

$(document).on("input focusout keyup", ".linkInput", function (e) {
    validateLinkAndToggleSaveButton(this); // Trigger validation on input event
});
function validateLinkV2(link, element) {
    const selectedOption = $(element).parent().siblings().find("select").val();
    if (selectedOption === "github") {
        return validateGitHubLink(link);
    } else if (selectedOption === "youtube") {
        return validateYouTubeLink(link);
    } else if (selectedOption === "linkedin") {
        return validateLinkedInLink(link);
    }
    return false;
}
function validateLink(link) {
    const selectedOption = selectLink.value;
    if (selectedOption === "github") {
        return validateGitHubLink(link);
    } else if (selectedOption === "youtube") {
        return validateYouTubeLink(link);
    } else if (selectedOption === "linkedin") {
        return validateLinkedInLink(link);
    }
    return false;
}

function checkelinkexist(element) {
    let option = $(element).parent().siblings().find("select").val();
    let exist = false;
    let existingData = JSON.parse(localStorage.getItem("linkData")) || [];
    existingData.forEach((linkData1) => {
        const { linkInput, selectLink, color, selectedOption } = linkData1;
        if (option == selectedOption) {
            exist = true;
        }
    });
    if (exist) {
        return false;
    } else {
        return true;
    }
}

function validateGitHubLink(link) {
    const githubRegex = /^https?:\/\/(www\.)?github\.com\/[\w-]+\/?$/i;
    return githubRegex.test(link);
}

// function validateYouTubeLink(link) {
//     const youtubeRegex = /^https?:\/\/(www\.)?youtube\.com\/watch\?v=\w+$/i;
//     return youtubeRegex.test(link);
// }

function validateYouTubeLink(link) {
    // const youtubeRegex = /^https?:\/\/(www\.)?youtube\.com\/c\/[\w-]+\/?$/i;
    const youtubeRegex = /^https?:\/\/(www\.)?youtube\.com\/@[\w-]+$/i;
    return youtubeRegex.test(link);
}

function validateLinkedInLink(link) {
    const linkedinRegex = /^https?:\/\/(www\.)?linkedin\.com\/in\/[\w-]+\/?$/i;
    return linkedinRegex.test(link);
}

// Variables for the SVG elements positioning
let y1 = 379;
let y2 = 387;
let y3 = 406;
// let y4 =

const svg = document.getElementById("mobile-svg");
const firstfunction = document.getElementById("first-function-elements");
// Function to handle the "Save" button click on the first page

// const imagePreview = document.getElementById("imagePreview").src;
const firstName = document.getElementById("first-name").value;
const lastName = document.getElementById("last-name").value;
const email = document.getElementById("email").value;

$(document).on("click", "#save-btn2", function () {
    if (!$(this).attr("disabled")) {
        onSaveClickSecondPage();
    } else {
        alert("Please fill the form correctly.");
    }
});
// JS for the second page
function onSaveClickSecondPage() {
    // alert('aa')
    // const svgfile = document.getElementById('mobile-svg')
    const imagePreview = document.getElementById("imagePreview");
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;

    let imageHtml = "";
    if (imagePreview.src) {
        imageHtml = `<svg width="500" height="500">
                <defs>
                    <clipPath id="circleClip">
                    <circle cx="274.5" cy="230" r="48"></circle>
                    </clipPath>
                </defs>
                
                <image href="${imagePreview.src}" width="96" height="96" x="227.5" y="180" clip-path="url(#circleClip)"></image>
                </svg>
                `;

        const firstName1 = firstName;
        const lastName1 = lastName;
        function capitalizeFirstLetter(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }

        // Capitalize the first letter of the first name and last name
        const capitalizedFirstName = capitalizeFirstLetter(firstName1);
        const capitalizedLastName = capitalizeFirstLetter(lastName1);
        const nameHtml = `<text width="160" height="16" x="230" y="321" font-size="25" fill="#000" font-weight="500" >${capitalizedFirstName} ${capitalizedLastName}</text>`;

        // const nameHtml = `<text width="160" height="16" x="230" y="321" font-size="25" fill="#000">${firstName} ${lastName}</text>`;
        const emailHtml = `<text width="72" height="8" x="205" y="347" font-size="16" fill="#000">${email}</text>`;

        html = imageHtml + nameHtml + emailHtml;
        secondfunction.innerHTML = html;

        // Save the data in a JavaScript object
        const secondPageData = {
            imagePreview: imagePreview.src,
            firstName: firstName,
            lastName: lastName,
            email: email,
        };

        localStorage.setItem("secondPageData", JSON.stringify(secondPageData));
    }
}

// Function to show error messages for inputs
function showError(element, message) {
    element.classList.add("error");
    linkErrorMessage.textContent = message;
}

function goToPage(url) {
    window.location.href = url;
}



$(document).on("input focusout keyup", "#first-name", function () {
    validateNameInput($(this), "Invalid Name.");
    updateSaveButtonOpacity();
});
$(document).on("input focusout keyup", "#last-name", function () {
    validateNameInput($(this), "Invalid Name.");
    updateSaveButtonOpacity();
});
$(document).on("input focusout keyup", "#email", function () {
    validateEmail($(this), "Invalid Email.");
    updateSaveButtonOpacity();
});

function validateNameInput(inputElement, errorMessage) {
    const value = inputElement.val().trim(); // Remove leading/trailing spaces
    const validNamePattern = /[a-zA-Z]/; // Allow letters, hyphens, apostrophes, and spaces
    const error_el = inputElement.siblings(".profile_input_error");
    if (value === "" || !validNamePattern.test(value)) {
        inputElement.addClass("error");
        showErrorV2(error_el, errorMessage);
        $("#save-btn2").css("opacity", 0.5).attr("disabled", "disabled");
    } else {
        inputElement.removeClass("error");
        hideErrorV2(error_el);
        $("#save-btn2").css("opacity", 1).removeAttr("disabled");
    }
}

function validateEmail(inputElement, errorMessage) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const value = inputElement.val().trim(); // Remove leading/trailing spaces
    const error_el = inputElement.siblings(".profile_input_error");
    if (value !== "" && !emailPattern.test(value)) {
        inputElement.addClass("error");
        // Check for not empty and not valid email
        showErrorV2(error_el, "Invalid Email.");
        $("#save-btn2").css("opacity", 0.5).attr("disabled", "disabled");
    } else {
        inputElement.removeClass("error");
        hideErrorV2(error_el, errorMessage);
        $("#save-btn2").css("opacity", 1).removeAttr("disabled");
    }
}
// function displayErrorV2(element, message) {

// }
// function hideErrorV2(element) {

// }
// saveButton2.style.opacity = isValidLink ? 1 : 0.5;

// Function to show error messages for invalid inputs
function showError(errorElement, message) {
    errorElement.textContent = message;
    errorElement.style.display = "block"; // Show the error message
}

// Function to hide error messages
function hideError(errorElement) {
    errorElement.textContent = ""; // Clear the error message
    errorElement.style.display = "none"; // Hide the error message
}

function updateSaveButtonOpacity() {
    // const firstName = document.getElementById("first-name");
    const isValidFirstName = validateNameInput($("#first-name"), "Invalid Name.");
    // const email = document.getElementById("email");
    const isValidEmail = validateEmail($("#email"), "Invalid Email.");

    if (isValidFirstName && isValidEmail) {
        saveButton.style.opacity = 1;
    } else {
        saveButton.style.opacity = 0.5;
    }
}

function onSaveClickFirstPage() {
    // Create an array to store the link data
    var linkData = [];

    let allValid = true; // Flag to track if all links are valid
    let current_val = [];
    $(".select-wrapper").each(function (index) {
        var selectLink = $(this).find(".selectlink");
        var linkInput = $(this).find(".linkInput");
        var selectedOption = selectLink.val();
        const linkErrorMessage = $(this).find(".error-message");
        console.log(selectLink.is(':visible'))
        console.log(selectLink);
        //for neglecting the value from the first link because it is display none
        if($(this).is(':visible')){
            if (current_val.includes(selectedOption) === false) {
                current_val.push(selectedOption);
                var link = linkInput.val().trim();
                // const linkErrorMessage = wrapper.querySelector(".error-message");
    
    
                var name = "";
                var color = "";
                // const exist=checkelinkexist()
                // if(exist){
                //     showErrorV2(linkErrorMessage, "Option already added.");
                //     allValid = false;
                //     return;
                // }
    
                if (selectedOption === "github") {
                    name = "GitHub";
                    color = "#000";
                    if (!validateGitHubLink(link)) {
                        showErrorV2(linkErrorMessage, "Invalid GitHub link. Please enter a valid GitHub profile URL.");
                        allValid = false;
                        linkInput.addClass("error");
                        return;
                    }
                } else if (selectedOption === "youtube") {
                    name = "YouTube";
                    color = "#f00";
                    if (!validateYouTubeLink(link)) {
                        linkInput.addClass("error");
                        showErrorV2(linkErrorMessage, "Invalid YouTube link. Please enter a valid YouTube video URL.");
                        allValid = false;
                        return;
                    }
                } else if (selectedOption === "linkedin") {
                    name = "LinkedIn";
                    color = "#2D68FF";
                    if (!validateLinkedInLink(link)) {
                        linkInput.addClass("error");
                        showErrorV2(linkErrorMessage, "Invalid LinkedIn link. Please enter a valid LinkedIn profile URL.");
                        allValid = false;
                        return;
                    }
                } else {
                    showErrorV2(linkErrorMessage, "Please select an option.");
                    allValid = false;
                    return;
                }
                hideErrorV2(linkErrorMessage);

                //dict for localstorage
                var linkObj = {
                    id: index + 1, // You can assign a unique ID based on your needs
                    selectLink: name,
                    linkInput: link,
                    color: color,
                    selectedOption: selectedOption,
                };
                linkData.push(linkObj);
            } else {
                showErrorV2(linkErrorMessage, "Option already selected.");
                allValid = false;
                return;
            }
        }
    });
    if (allValid) {
        // var existingData = JSON.parse(localStorage.getItem("linkData")) || [];
        // existingData.forEach((linkData1) => {
        //     if (current_val.includes(linkData1["selectedOption"]) === false) linkData.push(linkData1);
        // });
        

        //save buttton to localstorage
        localStorage.setItem("linkData", JSON.stringify(linkData));

        // Clear input fields and error messages
        $(".select-wrapper").each(function (index) {
            const selectLink = $(this).find(".selectlink");
            const linkInput = $(this).find(".linkInput");
            const linkErrorMessage = $(this).find(".error-message");

            selectLink.value = "";
            linkInput.value = "";
            hideErrorV2(linkErrorMessage);
        });



        reload_data();
        saveButton.disabled = true;
        saveButton.style.opacity = 0.5;
        const msg = document.getElementById("msg");
        msg.textContent = "Data saved successfully";
        msg.classList.add("show");

        setTimeout(() => {
            msg.classList.remove("show");
            msg.textContent = "";
        }, 3000);
    }
}
function showErrorV2(element, message) {
    element.addClass("error");
    element.html(message);
    element.css({ display: "block" });
}
// Function to hide error messages
function hideErrorV2(element) {
    element.html("");
    element.css({ display: "none" });
}

//for updating the svg
function reload_data() {
    // Optional: Display a message to indicate successful saving
    const storedData = JSON.parse(localStorage.getItem("linkData") || "[]");

    const y1Initial = 379;
    const y2Initial = 387;
    const y3Initial = 406;
    const y4Initial = 397;

    let y1 = y1Initial;
    let y2 = y2Initial;
    let y3 = y3Initial;
    let y4 = y4Initial;

    firstfunction.innerHTML = "";
    storedData.forEach((linkData2) => {
        const { linkInput, selectLink, color, selectedOption } = linkData2;
        // <text x="370" y="${y3}" font-size="16">\u279C</text>

        // Construct the HTML for the link using the stored data
        const linkHtml = `
        <a href="${linkInput}">
        <g fill="white" font-family="Arial" font-size="16" text-anchor="middle">
          <rect x="161" y="${y1}" width="237" height="44" rx="8" fill="${color}"></rect>
          <image href="images/${selectedOption}_icon.png" width="24" height="24" x="180" y="${y2}"></image>
          <text x="246" y="${y3}">${selectLink}</text>
         
        <image href="images/side-arrow.png" x="370" y="${y4}"></image>
        </g>
      </a>
      <g fill="white" font-family="Arial" font-size="16" text-anchor="middle">
      </g>
                `;

        // Append the HTML to the container
        firstfunction.innerHTML += linkHtml;
        // Increment the y positions
        y1 += 64;
        y2 += 64;
        y3 += 64;
        y4 += 64;
    });
}


//for refresh event
function update_form(storedData) {
    let cont = 1;
    storedData.forEach((linkData2) => {
        const hiddenDiv = document.querySelector(".hidden");
        const rightIconDown = document.querySelector(".right-icon-down");
        const originalBox = document.querySelector(".select-wrapper");
        const parentContainer = document.querySelector("#boxContainer");
        if (cont == 1) {
            hiddenDiv.classList.add("show");
            rightIconDown.style.display = "none";
            originalBox.style.display = "block";
            var text = linkData2["selectLink"];
            $(".select-wrapper").find(".selectlink").val(linkData2["selectedOption"]);
            $(".select-wrapper").find(".linkInput").val(linkData2["linkInput"]);
            $(".select-wrapper").find(".linkInput").attr("placeholder", text);
            $(".select-wrapper").find(".btn-selectone").val(linkData2["selectedOption"]);
            var img = $(".select-wrapper").find(".selectlink").find("option:selected").attr("data-thumbnail");
            var value = linkData2["linkInput"];
            var item =
                '<li><img src="' +
                img +
                '" alt="" value="' +
                value +
                '"/><span style="padding-left:10px">' +
                text +
                "</span></li>";
            $(".select-wrapper").find(".btn-selectone").html(item);
            linkCounter++;
        } else {
            const newBox = originalBox.cloneNode(true);

            var bx = newBox.querySelector(".box-number");
            svgHtml = `<svg class="two-line" width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="12" height="1" fill="#737373"/>
            <rect y="5" width="12" height="1" fill="#737373"/>
            </svg>`;
            bx.innerHTML = `${svgHtml}<text  class="counter" font-size="16" style="font-weight: 700; position:relative; left: 7px; color:
            #737373">Link #${linkCounter + 1}</text>`;

            const removeButton = newBox.querySelector(".remove-btn");
            removeButton.addEventListener("click", () => {
                linkCounter--;
                parentContainer.removeChild(newBox);
                if (linkCounter === 0) {
                    rightIconDown.style.display = "flex";
                }
                var linkData = [];
                var existingData = JSON.parse(localStorage.getItem("linkData")) || [];
                existingData.forEach((linkData1) => {
                    if (linkData1["selectedOption"] !== $(newBox).find("select").val()) linkData.push(linkData1);
                });
                localStorage.setItem("linkData", JSON.stringify(linkData));
                rearrange_list()
                reload_data();
            });

            // Reset input values
            newBox.querySelector("input[type='text']").value = linkData2["linkInput"];
            $(newBox).find(".selectlink").val(linkData2["selectedOption"]);
            // Append the new box to the parent container
            parentContainer.appendChild(newBox);
            linkCounter++; // Increment the link counter

            // $(newBox)
            //     .find(".vodiapicker")
            //     .removeClass("vodiapicker")
            //     .addClass("vodiapicker" + linkCounter)
            //     .attr("id", "selectlink" + linkCounter);
            // $(newBox)
            //     .find(".btn-select")
            //     .removeClass("btn-select")
            //     .addClass("btn-select" + linkCounter);
            // $(newBox)
            //     .find(".b")
            //     .removeClass("b")
            //     .addClass("b" + linkCounter);
            // $(newBox)
            //     .find("#a")
            //     .attr("id", "a" + linkCounter);
            update_formselect(linkCounter, $(newBox), linkData2);
        }
        cont++;
    });
}


//after refresh selecting options actions 
function update_formselect(linkCounter, newBox, linkData2) {
    let langArray = [];
    newBox.find('.selectlink option').each(function () {
        var img = $(this).attr("data-thumbnail");
        var text = this.innerText;
        var value = $(this).val();
        var item =
            '<li><img src="' +
            img +
            '" alt="" value="' +
            value +
            '"/><span style="padding-left:10px">' +
            text +
            "</span></li>";
        langArray.push(item);
    });
    newBox.find("#a").html(langArray);
    $(newBox).find(".selectlink").val(linkData2["selectedOption"]);
    $(newBox).find(".linkInput").val(linkData2["linkInput"]);
    $(newBox).find(".btn-selectone").val(linkData2["selectedOption"]);
    var img = $(newBox).find(".selectlink").find("option:selected").attr("data-thumbnail");
    var text = linkData2["selectLink"];
    var value = linkData2["linkInput"];
    var item =
        '<li><img src="' + img + '" alt="" value="' + value + '"/><span style="padding-left:10px">' + text + "</span></li>";
    //Set the button value to the first el of the array
    newBox.find(".btn-select").html(item);



    newBox.find("li").click(function (e) {
        var img = $(this).find("img").attr("src");
        var value = $(this).find("img").attr("value");
        var text = this.innerText;
        var item = '<li><img src="' + img + '" alt="" /><span style="padding-left:10px">' + text + "</span></li>";
        newBox.find(".btn-select").html(item);
        newBox.find(".btn-select").attr("value", value);

        // Reset error message and enable save button by default
        newBox.find(".error-message").text("");
        newBox.find(".linkInput").removeClass("error");
        saveButton.disabled = false;
        saveButton.style.opacity = 1;

        // Check if the selected option is already chosen in any other box
        var optionAlreadyChosen = false;
        $(".selectlink")
            .not(newBox.find(".selectlink"))
            .each(function (index2, element2) {
                if ($(element2).val() == value) {
                    optionAlreadyChosen = true;
                    return false; // Exit the loop since the option is already chosen
                }
            });

        if (optionAlreadyChosen) {
            let message = "the option already selected";
            newBox.find(".error-message").text(message);
            newBox.find(".linkInput").addClass("error");
            saveButton.disabled = true;
            saveButton.style.opacity = 0.5;
        }

        newBox.find(".selectlink").val(value);
        newBox.find(".btn-select").toggleClass("open");
        newBox.find(".b").toggle();

        var selectedOption = newBox.find(".selectlink").val();
        var placeholderText = "";

        if (selectedOption === "github") {
            placeholderText = "https://www.github.com/username/repository";
        } else if (selectedOption === "youtube") {
            placeholderText = "https://www.youtube.com/user/username";
        } else if (selectedOption === "linkedin") {
            placeholderText = "https://www.linkedin.com/in/username";
        }

        newBox.find(".linkInput").attr("placeholder", placeholderText);
    });

    newBox.find(".btn-select").click(function () {
        newBox.find(".b").toggle();
        $(this).toggleClass("open");
    });
}


function rearrange_list(){
    let count=1;
    $('.select-wrapper').each(function (index2, element2) {
        if($(this).find('.counter').is(':visible')){
            $(this).find('.counter').text("Link #"+(count));
            count++
        }
    });
}