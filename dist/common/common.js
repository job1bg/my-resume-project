var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ResumeDataManager } from "../data/ResumeDataManager.js";
export class CommonDOMRenderer {
    constructor() {
        this.renderCommonData = () => __awaiter(this, void 0, void 0, function* () {
            const resumeData = yield this.dataManager.getResumeData();
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
            const footerCopyrightTexts = document.querySelectorAll(".footerCopyrightText");
            footerCopyrightTexts.forEach((footerText) => {
                footerText.textContent = resumeData.footerCopyrightText;
            });
        });
        this.dataManager = new ResumeDataManager();
    }
}
