import { PasswordsView } from "./PasswordsView";
import { useEncryptedStorage } from "../../hooks/useEncryptedStorage/useEncryptedStorage";
import { STORAGE_KEY } from "../../@common/constants";
import React from "react";
import { useFocusEffect } from "@react-navigation/native";

export const PasswordsController = () => {
    const [passwordList, setPasswordList] = React.useState<string[]>([]);

    const { getItem } = useEncryptedStorage();

    const getSavedPasswords = async () => {
        const passwords = JSON.parse((await getItem(STORAGE_KEY)) ?? "[]");
        setPasswordList(passwords);
    };

    useFocusEffect(
        React.useCallback(() => {
            getSavedPasswords();
        }, []),
    );

    return <PasswordsView passwords={passwordList} />;
};
