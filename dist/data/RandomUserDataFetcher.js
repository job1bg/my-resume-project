var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class RandomUserDataFetcher {
    constructor() {
        this.fetchRandomUserData = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch("https://randomuser.me/api/");
                const data = yield response.json();
                if (!data.results || data.results.length === 0) {
                    throw new Error("No user data found in response.");
                }
                const user = {
                    titleName: `${data.results[0].name.first} ${data.results[0].name.last}`,
                    address: `${data.results[0].location.street.name} ${data.results[0].location.street.number}, ${data.results[0].location.city}, ${data.results[0].location.country}`,
                    profilePictureUrl: data.results[0].picture.large,
                };
                return user;
            }
            catch (error) {
                console.error("Error fetching data:", error);
                return null;
            }
        });
    }
}
