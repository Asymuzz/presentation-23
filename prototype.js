const presentationSections = document.querySelectorAll("#presentation .chapter section");
const slideNumberElement = document.getElementById("slide-number");
const titlesContainer = document.querySelector('.titles');
const strongContainer = document.getElementById("Copyright");
const currentChapters = document.getElementById("current-chapter")
let currentSlide = 0;
let currentChapter = null;

//------------------------------------------------------------------------------------------------------------------------------

// Assign IDs to sections and update chapter names
function assignSectionIds() {
  presentationSections.forEach((section, index) => {
    section.id = (index + 1).toString();
  });
  updateChapterName();
}
//------------------------------------------------------------------------------------------------------------------------------


// Display based on ID
function showSlide(slideIndex) {
  presentationSections.forEach((section, index) => {
    if (index === slideIndex) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
  slideNumberElement.textContent = (slideIndex + 1).toString();
  currentSlide = slideIndex;

  // Update chapter name when transitioning to a new chapter
  updateChapterName();
}

// Update the displayed chapter name
function updateChapterName() {
  const sections = Array.from(presentationSections);
  const currentSection = sections[currentSlide];
  const currentChapterElem = currentSection.closest('.chapter');
  const chapterName = currentChapterElem.querySelector('h2').textContent;
  currentChapter = chapterName;
  titlesContainer.dataset.chapterTitle = chapterName;
  currentChapters.textContent = "Chapter:" + chapterName;
}
//------------------------------------------------------------------------------------------------------------------------------

// Functions for next and previous slide navigation
function nextSlide() {
  if (currentSlide < presentationSections.length - 1) // so that the slide will not go to the negatives
    showSlide(currentSlide + 1);
}
function prevSlide() {
  if (currentSlide > 0) 
    showSlide(currentSlide - 1);
}

assignSectionIds();
showSlide(currentSlide);

document.addEventListener("keydown", (event) => {    //Arrow keys functionality
  if (event.key === "ArrowRight") 
    nextSlide();
  if (event.key === "ArrowLeft") 
    prevSlide();
});

document.getElementById("previousSlide").addEventListener("click", () => prevSlide());  //Button functionality
document.getElementById("nextSlide").addEventListener("click", () => nextSlide());

// Restart button
const restartButton = document.getElementById("restart");
restartButton.addEventListener("click", () => {
  showSlide(0);
});

//-----------------------------------------------------------------------------------------------------------------
//Small adjustment for style
function showStrong() {
  strongContainer.classList.remove("fade-out");
}
function hideStrong() {
  strongContainer.classList.add("fade-out");
}

hideStrong();
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
    showStrong();
    setTimeout(hideStrong, 1000); 
  }
});


