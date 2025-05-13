document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("animationState") === "true") {
        document.getElementById("animatedBox").classList.add("animate");
    }
});

function toggleAnimation() {
    let box = document.getElementById("animatedBox");
    box.classList.toggle("animate");
    localStorage.setItem("animationState", box.classList.contains("animate"));
}

function savePreference() {
    localStorage.setItem("welcomeMessage", "true");
    document.getElementById("message").style.opacity = "1";
}
