import { myResumeInfoObject, ResumeInfo } from "./resumeObject.js";

export class ResumeDataManager {
    getResumeData(): ResumeInfo {
        let data: ResumeInfo = {
            resumeTitle: myResumeInfoObject.resumeTitle,
            titleName: myResumeInfoObject.titleName,
            address: myResumeInfoObject.address,
            birthday: myResumeInfoObject.birthday,
            languages: myResumeInfoObject.languages,
            educationalTitle: myResumeInfoObject.educationalTitle,
            facultyName: myResumeInfoObject.facultyName,
            graduationYear: myResumeInfoObject.graduationYear,
            skills: myResumeInfoObject.skills,
            experience: myResumeInfoObject.experience,
            projects: myResumeInfoObject.projects,
            footerCopyrightText: myResumeInfoObject.footerCopyrightText,
        }
        return data;
    }
}