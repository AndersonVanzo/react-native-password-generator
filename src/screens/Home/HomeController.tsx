import { HomeView } from "./HomeView";
import { DIGITS, STORAGE_KEY } from "../../@common/constants";
import { useEncryptedStorage } from "../../hooks/useEncryptedStorage/useEncryptedStorage";

export const HomeController = () => {
    const { getItem, saveItem } = useEncryptedStorage();

    const generatePassword = (length: number) => {
        let password = "";
        for (let index = 0; index < length; index++) {
            password += DIGITS.charAt(Math.floor(Math.random() * DIGITS.length));
        }
        return password;
    };

    const savePassword = async (password: string) => {
        const passwords: string[] = JSON.parse((await getItem(STORAGE_KEY)) ?? "[]");
        passwords.push(password);
        await saveItem(STORAGE_KEY, JSON.stringify(passwords));
    };

    return <HomeView savePassword={savePassword} generatePassword={generatePassword} />;
};
