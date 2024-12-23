import { myResumeInfoObject } from "./resumeObject.js";

// Common Web Page Parts Implementation
// Head - title
const resumeTitle = document.getElementById("resumeTitle")  as HTMLElement;
resumeTitle.textContent = myResumeInfoObject.resumeTitle;

// Header - title name
const titleNames = document.querySelectorAll(".title-name");
titleNames.forEach((name) => {
  name.textContent = myResumeInfoObject.titleName;
});

// Assign Copyright Text In Footer
const footerCopyrightTexts = document.querySelectorAll(".footerCopyrightText");
footerCopyrightTexts.forEach((footerText) => {
  footerText.textContent = myResumeInfoObject.footerCopyrightText;
});
