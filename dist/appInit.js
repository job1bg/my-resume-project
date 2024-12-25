import { CommonDOMRenderer } from "./common/common.js";
import { ResumeDOMRenderer } from "./resume/resume.js";
const commonRenderer = new CommonDOMRenderer();
export const renderC = commonRenderer.renderCommonData;
const resumeRenderer = new ResumeDOMRenderer();
export const renderR = resumeRenderer.renderResumeData;
window.renderC = renderC;
window.renderR = renderR;
