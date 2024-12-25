import { SimplifiedUser } from "./UserDataAPI";

export class RandomUserDataFetcher {
  fetchRandomUserData = async (): Promise<SimplifiedUser | null> => {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();

      if (!data.results || data.results.length === 0) {
        throw new Error("No user data found in response.");
      }

      const user: SimplifiedUser = {
        titleName: `${data.results[0].name.first} ${data.results[0].name.last}`,
        address: `${data.results[0].location.street.name} ${data.results[0].location.street.number}, ${data.results[0].location.city}, ${data.results[0].location.country}`,
        profilePictureUrl: data.results[0].picture.large,
      };

      return user;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };
}
