
const homePage = document.querySelector(".home-page");
const returnHomePageBtn = document.querySelector(".home-button");
const addHabitPage = document.querySelector(".add-habit-page");
const addHabitButton = document.querySelector(".add-habit");



















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

