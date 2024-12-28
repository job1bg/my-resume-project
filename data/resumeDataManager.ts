import { myResumeInfoObject } from "./resumeObject.js";
import { ResumeInfo, SimplifiedUser } from "./UserDataAPI.js";
import { RandomUserDataFetcher } from "./RandomUserDataFetcher.js";

export class ResumeDataManager {
    private fetcher: RandomUserDataFetcher;
    private fakeApiData?: SimplifiedUser | null;

    constructor() {
        this.fetcher = new RandomUserDataFetcher();
    }
    
    getResumeData = async (): Promise<ResumeInfo> => {
        const fakeUser: SimplifiedUser | null = await this.fetcher.fetchRandomUserData();
        if (fakeUser) {
            this.fakeApiData = fakeUser;
        } else {
            console.log("Failed to fetch fake user data.")
        }

        let data: ResumeInfo = {
            resumeTitle: this.fakeApiData?.titleName ?? `${myResumeInfoObject.resumeTitle} - Resume`,
            titleName: this.fakeApiData?.titleName ?? myResumeInfoObject.titleName,
            address: this.fakeApiData?.address ?? myResumeInfoObject.address,
            birthday: myResumeInfoObject.birthday,
            languages: myResumeInfoObject.languages,
            educationalTitle: myResumeInfoObject.educationalTitle,
            facultyName: myResumeInfoObject.facultyName,
            graduationYear: myResumeInfoObject.graduationYear,
            skills: myResumeInfoObject.skills,
            experience: myResumeInfoObject.experience,
            projects: myResumeInfoObject.projects,
            footerCopyrightText: myResumeInfoObject.footerCopyrightText,
            profilePictureUrl: this.fakeApiData?.profilePictureUrl ?? myResumeInfoObject.profilePictureUrl
        }
        return data;
    }
}