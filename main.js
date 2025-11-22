
const homePage = document.querySelector(".home-page");
const returnHomePageBtn = document.querySelector(".home-button");
const addHabitPage = document.querySelector(".add-habit-page");
const addHabitButton = document.querySelector(".add-habit");
const buildHabitBtn = document.querySelector(".build-habit");
const quitHabitBtn = document.querySelector(".quit-habit");
const recommendedHabitsToBuild = document.querySelector(".recommended-habits-build");
const recommendedHabitsToQuit = document.querySelector(".recommended-habits-quit");





buildHabitBtn.addEventListener("click", () => {
    buildHabitBtn.style.backgroundColor = "#3280dabd";
    buildHabitBtn.style.color = "white";
    quitHabitBtn.style.backgroundColor = "";
    recommendedHabitsToBuild.style.display = "flex";
    recommendedHabitsToQuit.style.display = "none"
})

quitHabitBtn.addEventListener("click", () => {
    quitHabitBtn.style.backgroundColor = "#e14631bd";
    quitHabitBtn.style.color = "white";
    buildHabitBtn.style.backgroundColor = "";
    recommendedHabitsToBuild.style.display = "none";
    recommendedHabitsToQuit.style.display = "flex"
})















// Hides homepage and shows add-habit page

addHabitButton.addEventListener("click", () => {
    homePage.style.display = "none";
    addHabitPage.style.display = "block";
})

// Hides add-habit page and return to homepage

returnHomePageBtn.addEventListener("click", () => {
    homePage.style.display = "block";
    addHabitPage.style.display = "none";
})

