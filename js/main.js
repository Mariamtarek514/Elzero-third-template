// start showing scroll button
window.addEventListener("scroll", () => {
    let topArrow = document.querySelector(".arrow");
    if (
        document.body.scrollTop > 600 ||
        document.documentElement.scrollTop > 600
    ) {
        topArrow.style.display = "block";
        topArrow.onclick = () => {
            document.documentElement.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        };
    } else {
        topArrow.style.display = "none";
    }
});

// end

let openMenue = document.getElementById("open-menue");
let closeMenue = document.getElementById("close-menue");
let container = document.getElementById("nav-container");
let collapsing = document.getElementsByClassName("collapse")[0];
openMenue.addEventListener("click", () => {
    container.classList.add("collapse");
    openMenue.style.cssText = "opacity:0";
});
closeMenue.addEventListener("click", () => {
    container.classList.remove("collapse");
    openMenue.style.cssText = "opacity:1";
});
document.addEventListener("click", (e) => {
    if (
        e.target.id !== "nav-container" &&
        e.target.id !== "open-menue" &&
        e.target.parentElement.id !== "open-menue" &&
        e.target.id !== "subMenue"
    ) {
        container.classList.remove("collapse");
        openMenue.style.cssText = "opacity:1";
    }
});
// remove active class
let mainList = document.querySelectorAll(".mainList li a");
mainList.forEach((a) => {
    a.addEventListener("click", () => {
        a.parentElement.parentElement
            .querySelectorAll(".active")
            .forEach((e) => {
                e.classList.remove("active");
            });
        a.classList.add("active");
    });
});

// start sublinks
let subMenue = document.getElementsByClassName("list")[0];
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("open-sub-link")) {
        subMenue.classList.toggle("sub-list");
    } else {
        subMenue.classList.remove("sub-list");
    }
});
window.addEventListener("scroll", () => {
    if (
        document.documentElement.scrollTop > 300 ||
        document.body.scrollTop > 300
    ) {
        subMenue.classList.remove("sub-list");
        container.classList.remove("collapse");
        openMenue.style.cssText = "opacity:1";
    }
});
// start gallery section
let ourGallery = document.querySelectorAll(".gallery .image img");
ourGallery.forEach((img) => {
    img.addEventListener("click", (e) => {
        let overlay = document.createElement("div");
        overlay.className = "overlay";
        document.body.appendChild(overlay);

        // creat popup box
        let popupBox = document.createElement("figure");
        popupBox.className = "popup-box";
        if (img.alt !== null) {
            let imgHeadeing = document.createElement("h3");
            let textHeading = document.createTextNode(img.alt);
            imgHeadeing.appendChild(textHeading);
            popupBox.append(imgHeadeing);
        }
        let popupImg = document.createElement("img");

        popupImg.src = img.src;
        popupBox.appendChild(popupImg);
        overlay.appendChild(popupBox);

        // creat colse spant
        let closeBtn = document.createElement("span");
        closeBtn.appendChild(document.createTextNode("x"));
        closeBtn.className = "close-btn";
        popupBox.appendChild(closeBtn);
    });
});
// close popup btn
document.addEventListener("click", (e) => {
    if (e.target.className === "close-btn") {
        e.target.parentNode.remove();
        document.querySelector(".overlay").remove();
    }
});

// end gallery section

// skills section
let ourSkills = document.querySelector(".our-skills");
window.onscroll = function () {
    // skills section offset
    let skillsOffsetTop = ourSkills.offsetTop;
    // skill outer height
    let skillsOuterHeight = ourSkills.offsetHeight;
    // window height
    let windowHeight = this.innerHeight;
    // window scroll top
    let windowScrollTop = this.scrollY;

    if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
        let allSkills = document.querySelectorAll(".skill .prograss span");
        allSkills.forEach((skill) => {
            skill.style.width = skill.dataset.width;
        });
    }
};
// event tiem
let countdown = new Date("Dec 31 2022 00:00:00:00").getTime();
let time = setInterval(function () {
    let now = new Date().getTime();
    let distance = countdown - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementsByClassName("days")[0].innerHTML = days;
    document.getElementsByClassName("hours")[0].innerHTML = hours;
    document.getElementsByClassName("minutes")[0].innerHTML = minutes;
    document.getElementsByClassName("seconds")[0].innerHTML = seconds;
}, 1000);
// stats section
let stats = document.querySelector(".stats");
let statsNumber = document.querySelectorAll(".stats .number");
function startCount(element) {
    let countDown = element.dataset.static;
    let counter = setInterval(() => {
        element.textContent++;
        if (element.textContent == countDown) {
            clearInterval(counter);
        }
    }, 2000 / countDown);
}
let startedFunction = false;

window.addEventListener("scroll", () => {
    let statsOffsetTop = stats.offsetTop;
    // skill outer height
    let statsOuterHeight = stats.offsetHeight;
    // window height
    let windowHeights = this.innerHeight;
    // window scroll top
    let windowScrollY = this.scrollY;
    if (windowScrollY >= statsOffsetTop + statsOuterHeight - windowHeights) {
        if (!startedFunction) {
            statsNumber.forEach((num) => {
                startCount(num);
            });
        }
        startedFunction = true;
    }
});
