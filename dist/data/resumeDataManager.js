var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { myResumeInfoObject } from "./resumeObject.js";
import { RandomUserDataFetcher } from "./RandomUserDataFetcher.js";
export class ResumeDataManager {
    constructor() {
        this.getResumeData = () => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const fakeUser = yield this.fetcher.fetchRandomUserData();
            if (fakeUser) {
                this.fakeApiData = fakeUser;
            }
            else {
                console.log("Failed to fetch fake user data.");
            }
            let data = {
                resumeTitle: (_b = (_a = this.fakeApiData) === null || _a === void 0 ? void 0 : _a.titleName) !== null && _b !== void 0 ? _b : `${myResumeInfoObject.resumeTitle} - Resume`,
                titleName: (_d = (_c = this.fakeApiData) === null || _c === void 0 ? void 0 : _c.titleName) !== null && _d !== void 0 ? _d : myResumeInfoObject.titleName,
                address: (_f = (_e = this.fakeApiData) === null || _e === void 0 ? void 0 : _e.address) !== null && _f !== void 0 ? _f : myResumeInfoObject.address,
                birthday: myResumeInfoObject.birthday,
                languages: myResumeInfoObject.languages,
                educationalTitle: myResumeInfoObject.educationalTitle,
                facultyName: myResumeInfoObject.facultyName,
                graduationYear: myResumeInfoObject.graduationYear,
                skills: myResumeInfoObject.skills,
                experience: myResumeInfoObject.experience,
                projects: myResumeInfoObject.projects,
                footerCopyrightText: myResumeInfoObject.footerCopyrightText,
                profilePictureUrl: (_h = (_g = this.fakeApiData) === null || _g === void 0 ? void 0 : _g.profilePictureUrl) !== null && _h !== void 0 ? _h : myResumeInfoObject.profilePictureUrl
            };
            return data;
        });
        this.fetcher = new RandomUserDataFetcher();
    }
}
