import { CommonDOMRenderer } from "./common/common.js";
import { ResumeDOMRenderer } from "./resume/resume.js";
import { RandomUserDataFetcher } from "./data/RandomUserDataFetcher.js";

const commonRenderer = new CommonDOMRenderer();
export const renderC = commonRenderer.renderCommonData;

const resumeRenderer = new ResumeDOMRenderer();
export const renderR = resumeRenderer.renderResumeData;

(window as any).renderC = renderC;
(window as any).renderR = renderR;
