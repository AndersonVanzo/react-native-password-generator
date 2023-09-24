import { StyleSheet } from "react-native";

export const PasswordCardStyles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#000000",
        borderRadius: 8,
        flexDirection: "row",
        gap: 16,
        height: 48,
        paddingHorizontal: 16,
    },
    passwordWrapper: {
        flex: 1,
    },
    passwordText: {
        color: "#ffff",
    },
    placeholder: {
        backgroundColor: "#333333",
        borderRadius: 2,
        flex: 1,
        height: 24,
    },
    button: {
        alignItems: "center",
        height: 48,
        justifyContent: "center",
    },
});
