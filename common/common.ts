import { ResumeDataManager } from "../data/ResumeDataManager.js";

export class CommonDOMRenderer {
  private dataManager: ResumeDataManager;

  constructor() {
      this.dataManager = new ResumeDataManager();
  }

  renderCommonData = async () => {
    const resumeData = await this.dataManager.getResumeData();

    // Common Web Page Parts Implementation
    // Head - title
    const resumeTitle = document.getElementById("resumeTitle")  as HTMLElement;
    resumeTitle.textContent = resumeData.resumeTitle;

    // Header - title name
    const titleNames = document.querySelectorAll(".title-name");
    titleNames.forEach((name) => {
      name.textContent = resumeData.titleName;
    });

    // Assign Copyright Text In Footer
    const footerCopyrightTexts = document.querySelectorAll(".footerCopyrightText");
    footerCopyrightTexts.forEach((footerText) => {
      footerText.textContent = resumeData.footerCopyrightText;
    });
  }
}
