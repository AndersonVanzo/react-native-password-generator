import EncryptedStorage from "react-native-encrypted-storage";

export const useEncryptedStorage = () => {
    const getItem = async (key: string) => {
        try {
            return await EncryptedStorage.getItem(key);
        } catch (error) {
            console.log(`error on getItem: ${error}`);
        }
    };

    const saveItem = async (key: string, value: string) => {
        try {
            await EncryptedStorage.setItem(key, value);
        } catch (error) {
            console.log(`error on saveItem: ${error}`);
        }
    };

    const removeItem = async (key: string) => {
        try {
            await EncryptedStorage.removeItem(key);
        } catch (error) {
            console.log(`error on removeItem: ${error}`);
        }
    };

    return {
        getItem,
        saveItem,
        removeItem,
    };
};
