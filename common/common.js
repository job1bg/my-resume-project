import { ResumeDataManager } from "../data/resumeDataManager.js";
export class CommonDOMRenderer {
  constructor() {
    this.dataManager = new ResumeDataManager();
  }
  renderCommonData() {
    const resumeData = this.dataManager.getResumeData();
    // Common Web Page Parts Implementation
    // Head - title
    const resumeTitle = document.getElementById("resumeTitle");
    resumeTitle.textContent = resumeData.resumeTitle;
    // Header - title name
    const titleNames = document.querySelectorAll(".title-name");
    titleNames.forEach((name) => {
      name.textContent = resumeData.titleName;
    });
    // Assign Copyright Text In Footer
    const footerCopyrightTexts = document.querySelectorAll(
      ".footerCopyrightText"
    );
    footerCopyrightTexts.forEach((footerText) => {
      footerText.textContent = resumeData.footerCopyrightText;
    });
  }
}
