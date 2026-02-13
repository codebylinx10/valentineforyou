const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const gif = document.getElementById("gif");
const text = document.getElementById("text");

const steps = [
{
    gif: "pictures/eee.gif",
    text: "You meant yes, right? 😭",
    gifStyle: { width: "35%", height: "auto" },
    yesStyle: { height: "50%", width: "50%" },  // Balanced size
    noStyle: { height: "40%", width: "40%" }    // Keep No visible & balanced
},
{
    gif: "pictures/1.png.gif",
    text: "Pleaseeee 🥺",
    gifStyle: { width: "40%", height: "auto" },
    yesStyle: { height: "50%", width: "50%" },
    noStyle: { height: "40%", width: "40%" }
},
{
    gif: "pictures/2.png.gif",
    text: "Don't break my heart 💔",
    gifStyle: { width: "40%", height: "auto" },
    yesStyle: { height: "55%", width: "55%" },  // Slight growth only
    noStyle: { height: "35%", width: "35%" }    // Gradual shrink
},
{
    gif: "pictures/lll.gif",
    text: "Last chance 😤",
    gifStyle: { width: "40%", height: "auto" },
    yesStyle: { height: "60%", width: "60%" },  // Max balanced size
    noStyle: { height: "30%", width: "30%", opacity: "0.7" }  // Fade instead of hide
}
];

let stepIndex = 0;

// Preload all GIFs
const allGifs = steps.map(step => step.gif).concat(["pictures/idc.png.gif"]);
allGifs.forEach(src => {
    const img = new Image();
    img.src = src;
});

noBtn.addEventListener("click", () => {
    if(stepIndex < steps.length) {
        const currentStep = steps[stepIndex];

        gif.src = currentStep.gif;
        Object.assign(gif.style, currentStep.gifStyle);

        text.innerHTML = currentStep.text;

        // Apply balanced styles - both buttons stay proportional
        Object.assign(yesBtn.style, currentStep.yesStyle);
        Object.assign(noBtn.style, currentStep.noStyle);

        stepIndex++;
    }
});

yesBtn.addEventListener("click", () => {
    gif.src = "pictures/VVV.gif";
    gif.style.width = "40%";
    text.innerHTML = "I knew it! ❤️";

    noBtn.style.display = "none";
    yesBtn.style.height = "80px";
    yesBtn.style.width = "300px";
    yesBtn.innerHTML = `
        <a href="https://www.instagram.com/" class="boton-final">
            Text me💌
        </a>
    `;
});
