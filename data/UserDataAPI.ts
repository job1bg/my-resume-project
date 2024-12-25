interface Experience {
    companyNameText: string;
    workPeriodStartText: string | number;
    workPeriodEndText: string | number;
    companyRoleText: string;
    tasksList: string[];
}

interface Project {
    projectName: string;
    projectDescriptionList: string[];
}

export interface ResumeInfo {
    resumeTitle: string;
    titleName: string;
    address: string;
    birthday: string;
    languages: string;
    educationalTitle: string;
    facultyName: string;
    graduationYear: string | number;
    skills: string[];
    experience: Experience[];
    projects: Project[];
    footerCopyrightText: string;
    profilePictureUrl: string;
}

export interface SimplifiedUser {
    titleName: string;
    address: string;
    profilePictureUrl: string;
  }